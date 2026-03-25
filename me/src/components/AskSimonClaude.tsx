import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ─── System prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are SimonClaude — an AI assistant embedded in the personal portfolio of Simon Delisle.
Answer questions about Simon concisely and naturally (2-4 sentences unless more detail is genuinely useful).
Reply in the same language the user writes in (French or English).
Be professional but personable — not a corporate chatbot.

About Simon:
- Full-stack & AI engineer, Québec, Canada
- Founder of SimonDev — builds production software for clients
- 5+ years in production, 19 projects shipped
- Main client: PA Super (Canadian automotive parts distributor) — built their entire logistics ecosystem from zero
- Stack: Flutter/Dart, Python/FastAPI, Node.js/TypeScript, React, Angular, LangChain, Kubernetes, Redis, MySQL, Elasticsearch
- Flagship project: PaSUPER AI — omnichannel AI handling real Twilio phone calls + SSE web chat in 3 languages (FR/EN/ES)
- Other notable projects: SuperApp (dual-mode Flutter for drivers & warehouse), SuperODBC, SuperInventaire, SuperTransfer, APDQ towing system, Kubernetes GitOps infra on OVH
- Contact: info@simondelisle.dev
- LinkedIn: https://www.linkedin.com/in/simon-d2088/
- GitHub: https://github.com/SimonPasuper (repos are private)
- "Claude" is his Catholic name (a Québec tradition) — the AI coincidence is one he's accepted
- Plays golf badly, thinks about software constantly
- Open to client projects through SimonDev

If asked something you don't know specifically about Simon, be honest and suggest they contact him directly.`;

// ─── Fallback mock (used if no API key configured) ────────────────────────────
const MOCK_EN: Record<string, string> = {
  default: "I'm Simon Delisle — full-stack & AI engineer, founder of SimonDev. I build production software for clients. Try one of the suggestions!",
  who: "Simon Delisle. Founder of SimonDev — I design and ship complete production software systems. Flutter apps, AI voice assistants, logistics backends. 'Claude' is my Catholic name — the AI coincidence is one I've accepted. 🤖",
  built: "19 production projects:\n• Super API — enterprise logistics backend (300K+ lines)\n• SuperApp — Flutter dual-mode for drivers & warehouse\n• PaSUPER AI — omnichannel AI: real phone calls + streaming chat in 3 languages\n• APDQ Towing — Flutter + FastAPI + React (3 stacks)\n• Kubernetes infra, parsers, cron systems, and more.",
  stack: "Core: Flutter/Dart, Python/FastAPI, Node.js/TypeScript, React, Angular.\nAI: LangChain, GPT-4o, Gladia STT, AWS Polly, SSE streaming.\nInfra: Kubernetes, Docker, ArgoCD, Redis, MySQL, Elasticsearch.",
  available: "I run SimonDev and take on client projects. Reach me at info@simondelisle.dev or connect on LinkedIn.",
  biggest: "PaSUPER AI — production omnichannel AI for a 5M-part automotive distributor. Real Twilio phone calls with voice recognition + web chat via SSE, in FR/EN/ES. Single LangChain agent, stateless, runs on Kubernetes.",
};
const MOCK_FR: Record<string, string> = {
  default: "Je suis Simon Delisle — ingénieur full-stack & IA, fondateur de SimonDev. Je construis des logiciels de production pour des clients. Essayez une suggestion!",
  who: "Simon Delisle. Fondateur de SimonDev. Je conçois et livre des systèmes de production complets. «Claude» est mon nom catholique — la coïncidence avec l'IA, j'ai arrêté de l'expliquer. 🤖",
  built: "19 projets en production:\n• Super API — backend logistique (300K+ lignes)\n• SuperApp — Flutter double mode (chauffeurs & entrepôt)\n• PaSUPER IA — omnicanal: vrais appels + chat SSE en 3 langues\n• APDQ Remorquage — Flutter + FastAPI + React\n• Infra Kubernetes, parseurs, systèmes cron, et plus.",
  stack: "Cœur: Flutter/Dart, Python/FastAPI, Node.js/TypeScript, React, Angular.\nIA: LangChain, GPT-4o, Gladia STT, AWS Polly, streaming SSE.\nInfra: Kubernetes, Docker, ArgoCD, Redis, MySQL, Elasticsearch.",
  available: "Je gère SimonDev et prends des projets clients. Écrivez-moi à info@simondelisle.dev ou sur LinkedIn.",
  biggest: "PaSUPER IA — IA omnicanal pour un distributeur de 5M pièces. Vrais appels Twilio + chat SSE en FR/EN/ES. Agent LangChain unique, sans état, sur Kubernetes.",
};

function getMock(query: string, isEn: boolean): string {
  const a = isEn ? MOCK_EN : MOCK_FR;
  const q = query.toLowerCase();
  if (q.includes('who') || q.includes('simon') || q.includes('qui')) return a.who;
  if (q.includes('built') || q.includes('construit') || q.includes('project') || q.includes('projet')) return a.built;
  if (q.includes('stack') || q.includes('tech') || q.includes('language')) return a.stack;
  if (q.includes('available') || q.includes('disponible') || q.includes('hire') || q.includes('work') || q.includes('travail')) return a.available;
  if (q.includes('biggest') || q.includes('grand') || q.includes('flagship') || q.includes('best')) return a.biggest;
  return a.default;
}

// ─── Claude API call ───────────────────────────────────────────────────────────
interface ChatMessage { role: 'user' | 'assistant'; content: string; }

async function askClaude(history: ChatMessage[]): Promise<string> {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey || apiKey === 'your_new_key_here') return '__mock__';

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: history,
    }),
  });

  if (!res.ok) return '__mock__';
  const data = await res.json();
  return data?.content?.[0]?.text ?? '__mock__';
}

// ─── Markdown renderer (bold + inline code) ────────────────────────────────────
function renderMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: '#f0ece4', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', background: 'rgba(245,200,66,0.1)', padding: '1px 4px', borderRadius: '4px' }}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

// ─── Typing effect ─────────────────────────────────────────────────────────────
function useTypingEffect(text: string, onDone: () => void) {
  const [displayed, setDisplayed] = useState('');
  const [streaming, setStreaming] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    if (!text) return;
    setDisplayed('');
    setStreaming(true);
    idx.current = 0;
    const interval = setInterval(() => {
      idx.current += 4;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(interval);
        setDisplayed(text);
        setStreaming(false);
        onDone();
      }
    }, 16);
    return () => clearInterval(interval);
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  return { displayed, streaming };
}

const StreamingMessage = ({ text, onDone }: { text: string; onDone: () => void }) => {
  const { displayed, streaming } = useTypingEffect(text, onDone);
  return (
    <Box sx={{ fontSize: '0.82rem', color: '#f0ece4', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", whiteSpace: 'pre-wrap' }}>
      {renderMarkdown(displayed)}
      {streaming && (
        <Box component="span" sx={{ display: 'inline-block', width: '2px', height: '0.9em', bgcolor: '#f5c842', ml: '2px', verticalAlign: 'text-bottom', animation: 'blink 0.8s step-end infinite', '@keyframes blink': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } } }} />
      )}
    </Box>
  );
};

// ─── Suggestions ───────────────────────────────────────────────────────────────
const SUGGESTIONS_EN = [
  { label: 'Who is Simon?', key: 'who' },
  { label: 'What has he built?', key: 'built' },
  { label: "What's his stack?", key: 'stack' },
  { label: 'Available for work?', key: 'available' },
  { label: 'Biggest project?', key: 'biggest' },
];
const SUGGESTIONS_FR = [
  { label: 'Qui est Simon?', key: 'who' },
  { label: "Qu'a-t-il construit?", key: 'built' },
  { label: 'Son stack?', key: 'stack' },
  { label: 'Disponible?', key: 'available' },
  { label: 'Plus grand projet?', key: 'biggest' },
];

// ─── Message type ──────────────────────────────────────────────────────────────
interface Message { id: number; role: 'user' | 'assistant'; text: string; }

// ─── Main widget ───────────────────────────────────────────────────────────────
const AskSimonClaude = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');
  const suggestions = isEn ? SUGGESTIONS_EN : SUGGESTIONS_FR;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [msgId, setMsgId] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Track conversation history for Claude context
  const historyRef = useRef<ChatMessage[]>([]);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = async (query: string) => {
    if (!query.trim() || pending !== null || loading) return;

    const uid = msgId;
    setMsgId((n) => n + 2);
    setMessages((m) => [...m, { id: uid, role: 'user', text: query }]);
    setInput('');
    setLoading(true);

    // Add to history
    historyRef.current = [...historyRef.current, { role: 'user', content: query }];

    const result = await askClaude(historyRef.current);
    const answer = result === '__mock__' ? getMock(query, isEn) : result;

    // Add assistant reply to history
    historyRef.current = [...historyRef.current, { role: 'assistant', content: answer }];

    setLoading(false);
    setPending(answer);
  };

  const handleStreamDone = () => {
    if (pending === null) return;
    const aid = msgId;
    setMsgId((n) => n + 1);
    setMessages((m) => [...m, { id: aid, role: 'assistant', text: pending }]);
    setPending(null);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  };

  const isTyping = loading || pending !== null;
  const placeholderText = isEn ? 'Ask anything about Simon…' : 'Posez n\'importe quelle question…';

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 1000 }}
          >
            <Box
              onClick={() => setOpen(true)}
              sx={{
                display: 'flex', alignItems: 'center', gap: 1.2,
                px: 2.2, py: 1.2, borderRadius: '100px',
                background: '#f5c842', color: '#0e0d0c',
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, fontSize: '0.85rem',
                boxShadow: '0 4px 24px rgba(245,200,66,0.35), 0 2px 8px rgba(0,0,0,0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                userSelect: 'none',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 32px rgba(245,200,66,0.45), 0 4px 12px rgba(0,0,0,0.4)' },
              }}
            >
              <Box sx={{ fontSize: '1rem' }}>🤖</Box>
              Ask SimonClaude
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              width: 'min(420px, calc(100vw - 32px))',
              height: 'min(560px, calc(100vh - 48px))',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                borderRadius: '20px',
                border: '1px solid rgba(245,200,66,0.2)',
                background: '#161412',
                boxShadow: '0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 2, borderBottom: '1px solid rgba(240,236,228,0.07)', background: '#1a1814', flexShrink: 0 }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#f0ece4', lineHeight: 1.2 }}>
                    {isEn ? 'Ask SimonClaude' : 'Demander à SimonClaude'}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#8c8272', mt: 0.2 }}>
                    {isEn ? 'Powered by Claude AI' : 'Propulsé par Claude AI'}
                  </Typography>
                </Box>
                <IconButton onClick={() => setOpen(false)} size="small" sx={{ color: '#8c8272', '&:hover': { color: '#f0ece4', background: 'rgba(240,236,228,0.07)' } }}>
                  ✕
                </IconButton>
              </Box>

              {/* Messages — flex: 1 + overflow scroll */}
              <Box
                onWheel={(e) => e.stopPropagation()}
                sx={{
                  flex: 1,
                  overflowY: 'auto',
                  px: 2.5,
                  py: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  '&::-webkit-scrollbar': { width: '4px' },
                  '&::-webkit-scrollbar-track': { background: 'transparent' },
                  '&::-webkit-scrollbar-thumb': { background: 'rgba(245,200,66,0.25)', borderRadius: '2px' },
                }}
              >
                {messages.length === 0 && !isTyping && (
                  <Box sx={{ textAlign: 'center', py: 3 }}>
                    <Typography sx={{ fontSize: '2rem', mb: 1.5 }}>🤖</Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: '#8c8272' }}>
                      {isEn ? 'Ask me anything about Simon.' : 'Demandez-moi n\'importe quoi sur Simon.'}
                    </Typography>
                  </Box>
                )}

                {messages.map((msg) => (
                  <Box key={msg.id} sx={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                    <Box
                      sx={{
                        maxWidth: '85%', px: 1.8, py: 1.2,
                        borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                        background: msg.role === 'user' ? 'rgba(245,200,66,0.15)' : 'rgba(240,236,228,0.05)',
                        border: '1px solid',
                        borderColor: msg.role === 'user' ? 'rgba(245,200,66,0.25)' : 'rgba(240,236,228,0.08)',
                        fontSize: '0.82rem', color: '#f0ece4', lineHeight: 1.7,
                        fontFamily: "'DM Sans', sans-serif", whiteSpace: 'pre-wrap',
                      }}
                    >
                      {msg.role === 'assistant' ? renderMarkdown(msg.text) : msg.text}
                    </Box>
                  </Box>
                ))}

                {/* Loading dots */}
                {loading && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Box sx={{ px: 1.8, py: 1.2, borderRadius: '16px 16px 16px 4px', background: 'rgba(240,236,228,0.05)', border: '1px solid rgba(240,236,228,0.08)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                      {[0, 1, 2].map((i) => (
                        <Box key={i} sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: '#f5c842', opacity: 0.6, animation: 'dotPulse 1.2s ease-in-out infinite', animationDelay: `${i * 0.2}s`, '@keyframes dotPulse': { '0%,80%,100%': { transform: 'scale(0.6)', opacity: 0.3 }, '40%': { transform: 'scale(1)', opacity: 1 } } }} />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Streaming response */}
                {pending !== null && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Box sx={{ maxWidth: '85%', px: 1.8, py: 1.2, borderRadius: '16px 16px 16px 4px', background: 'rgba(240,236,228,0.05)', border: '1px solid rgba(240,236,228,0.08)' }}>
                      <StreamingMessage text={pending} onDone={handleStreamDone} />
                    </Box>
                  </Box>
                )}

                <div ref={messagesEndRef} />
              </Box>

              {/* Suggestions — only when empty */}
              {messages.length === 0 && !isTyping && (
                <Box sx={{ px: 2.5, pb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.7, borderTop: '1px solid rgba(240,236,228,0.06)', pt: 1.5, flexShrink: 0 }}>
                  {suggestions.map((s) => (
                    <Box
                      key={s.key}
                      onClick={() => sendMessage(s.label)}
                      sx={{
                        px: 1.4, py: 0.5, borderRadius: '20px',
                        border: '1px solid rgba(240,236,228,0.12)',
                        fontSize: '0.72rem', color: '#8c8272',
                        cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                        transition: 'all 0.15s', userSelect: 'none',
                        '&:hover': { borderColor: 'rgba(245,200,66,0.35)', color: '#f5c842', background: 'rgba(245,200,66,0.06)' },
                      }}
                    >
                      {s.label}
                    </Box>
                  ))}
                </Box>
              )}

              {/* Input */}
              <Box sx={{ px: 2, py: 1.5, borderTop: '1px solid rgba(240,236,228,0.07)', display: 'flex', gap: 1, alignItems: 'center', flexShrink: 0 }}>
                <Box
                  component="input"
                  ref={inputRef}
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={placeholderText}
                  disabled={isTyping}
                  sx={{
                    flex: 1, background: 'rgba(240,236,228,0.05)',
                    border: '1px solid rgba(240,236,228,0.1)', borderRadius: '10px',
                    px: 1.5, py: 1, color: '#f0ece4',
                    fontSize: '0.82rem', fontFamily: "'DM Sans', sans-serif",
                    outline: 'none', transition: 'border-color 0.15s',
                    '&:focus': { borderColor: 'rgba(245,200,66,0.4)' },
                    '&::placeholder': { color: '#5c5448' },
                    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
                  }}
                />
                <Box
                  onClick={() => sendMessage(input)}
                  sx={{
                    width: 36, height: 36, borderRadius: '10px',
                    background: input.trim() && !isTyping ? '#f5c842' : 'rgba(240,236,228,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: input.trim() && !isTyping ? 'pointer' : 'default',
                    flexShrink: 0, transition: 'background 0.15s, transform 0.15s',
                    color: input.trim() && !isTyping ? '#0e0d0c' : '#5c5448',
                    fontSize: '0.9rem',
                    '&:hover': input.trim() && !isTyping ? { transform: 'scale(1.05)', background: '#f9d96e' } : {},
                  }}
                >
                  →
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskSimonClaude;
