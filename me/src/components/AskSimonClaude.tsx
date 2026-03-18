import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ─── Mock answers ─────────────────────────────────────────────────────────────
const ANSWERS_EN: Record<string, string> = {
  default:
    "I'm Simon Claude Delisle — a full-stack & AI engineer based in Québec. I build production software: logistics platforms, Flutter mobile apps, and AI systems. Try one of the suggestions above!",
  who: "Simon Claude Delisle. Full-stack engineer at PA Super. I design and ship complete software systems — from Flutter warehouse apps used daily by field workers to AI phone assistants handling real customer calls. The 'Claude' in my name? Named before it was cool 🤖",
  built: "19 production projects over 4 years:\n• Super API Ecosystem — enterprise logistics backend (300K+ lines)\n• SuperApp Mobile — Flutter dual-mode app for drivers & warehouse\n• PaSUPER AI — omnichannel AI: real phone calls + streaming chat\n• APDQ Towing System — Flutter + FastAPI + React (3 stacks)\n• Kubernetes infrastructure, parsers, cron systems, and more.",
  stack:
    "Core: Flutter / Dart, Python / FastAPI, Node.js / TypeScript, React, Angular.\nAI: LangChain, OpenAI GPT-4o, Gladia STT, AWS Polly, SSE streaming.\nInfra: Kubernetes, Docker, ArgoCD, Redis, PostgreSQL, MySQL.\nTools: Helm, Prometheus, Celery, Elasticsearch, Twilio.",
  available:
    "I'm currently employed full-time at PA Super, but I'm open to interesting conversations. Send me a message at simon.delisle2025@gmail.com or connect on LinkedIn.",
  biggest:
    "The PaSUPER AI system — a production omnichannel AI for a 40,000-part automotive distributor. It handles real Twilio phone calls with voice recognition (Gladia STT + AWS Polly) AND web chat via Server-Sent Events, in French, English, and Spanish. Single LangChain agent, stateless, runs on Kubernetes. 4,353 lines across 40 Python files.",
};

const ANSWERS_FR: Record<string, string> = {
  default:
    "Je suis Simon Claude Delisle — ingénieur full-stack & IA basé au Québec. Je construis des logiciels en production : plateformes logistiques, apps mobiles Flutter et systèmes IA. Essayez une des suggestions!",
  who: "Simon Claude Delisle. Ingénieur full-stack chez PA Super. Je conçois et livre des systèmes logiciels complets — des apps Flutter utilisées quotidiennement sur le terrain aux assistants IA qui gèrent de vrais appels. Le 'Claude' dans mon nom? Nommé avant que ce soit à la mode 🤖",
  built:
    "19 projets en production en 4 ans:\n• Super API Ecosystem — backend logistique (300K+ lignes)\n• SuperApp Mobile — app Flutter double mode (livreurs & entrepôt)\n• PaSUPER IA — IA omnicanal: vrais appels + chat SSE\n• Système de remorquage APDQ — Flutter + FastAPI + React\n• Infrastructure Kubernetes, parseurs, systèmes cron, et plus.",
  stack:
    "Cœur: Flutter / Dart, Python / FastAPI, Node.js / TypeScript, React, Angular.\nIA: LangChain, OpenAI GPT-4o, Gladia STT, AWS Polly, streaming SSE.\nInfra: Kubernetes, Docker, ArgoCD, Redis, PostgreSQL, MySQL.\nOutils: Helm, Prometheus, Celery, Elasticsearch, Twilio.",
  available:
    "Je suis actuellement en poste à temps plein chez PA Super, mais je suis ouvert aux conversations intéressantes. Écrivez-moi à simon.delisle2025@gmail.com ou connectez-vous sur LinkedIn.",
  biggest:
    "Le système PaSUPER IA — une IA omnicanal en production pour un distributeur automobile de 40 000 pièces. Il gère de vrais appels Twilio avec reconnaissance vocale (Gladia STT + AWS Polly) ET le chat web via Server-Sent Events, en français, anglais et espagnol. Agent LangChain unique, sans état, tourne sur Kubernetes. 4 353 lignes dans 40 fichiers Python.",
};

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

function getAnswer(query: string, isEn: boolean): string {
  const answers = isEn ? ANSWERS_EN : ANSWERS_FR;
  const q = query.toLowerCase();
  if (q.includes('who') || q.includes('simon') || q.includes('qui')) return answers.who;
  if (q.includes('built') || q.includes('construit') || q.includes('project') || q.includes('projet')) return answers.built;
  if (q.includes('stack') || q.includes('tech') || q.includes('language')) return answers.stack;
  if (q.includes('available') || q.includes('disponible') || q.includes('work') || q.includes('travail') || q.includes('hire')) return answers.available;
  if (q.includes('biggest') || q.includes('grand') || q.includes('flagship') || q.includes('best')) return answers.biggest;
  return answers.default;
}

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
}

// ─── Streaming mock ───────────────────────────────────────────────────────────
function useTypingEffect(
  text: string,
  onDone: () => void,
): { displayed: string; streaming: boolean } {
  const [displayed, setDisplayed] = useState('');
  const [streaming, setStreaming] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    if (!text) return;
    setDisplayed('');
    setStreaming(true);
    idx.current = 0;

    const interval = setInterval(() => {
      idx.current += 3;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(interval);
        setDisplayed(text);
        setStreaming(false);
        onDone();
      }
    }, 18);

    return () => clearInterval(interval);
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  return { displayed, streaming };
}

// ─── Single streaming assistant message ──────────────────────────────────────
const StreamingMessage = ({ text, onDone }: { text: string; onDone: () => void }) => {
  const { displayed, streaming } = useTypingEffect(text, onDone);

  return (
    <Box
      sx={{
        fontSize: '0.82rem',
        color: '#f0ece4',
        lineHeight: 1.7,
        fontFamily: "'DM Sans', sans-serif",
        whiteSpace: 'pre-wrap',
      }}
    >
      {displayed}
      {streaming && (
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '2px',
            height: '0.9em',
            bgcolor: '#f5c842',
            ml: '2px',
            verticalAlign: 'text-bottom',
            animation: 'blink 0.8s step-end infinite',
            '@keyframes blink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 },
            },
          }}
        />
      )}
    </Box>
  );
};

// ─── Main widget ──────────────────────────────────────────────────────────────
const AskSimonClaude = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');
  const suggestions = isEn ? SUGGESTIONS_EN : SUGGESTIONS_FR;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState<string | null>(null);
  const [msgId, setMsgId] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { if (open) scrollToBottom(); }, [messages, open]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);

  const sendMessage = (query: string) => {
    if (!query.trim() || pending !== null) return;
    const answer = getAnswer(query, isEn);
    const uid = msgId;
    setMsgId((n) => n + 2);
    setMessages((m) => [...m, { id: uid, role: 'user', text: query }]);
    setInput('');
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
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const placeholderText = isEn ? 'What would you like to know?' : 'Que voulez-vous savoir?';
  const headerText = isEn ? 'Ask SimonClaude' : 'Demander à SimonClaude';
  const subtitleText = isEn
    ? 'Powered by the real AI Simon built'
    : "Propulsé par la vraie IA de Simon";

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
            style={{
              position: 'fixed',
              bottom: 28,
              right: 28,
              zIndex: 1000,
            }}
          >
            <Box
              onClick={() => setOpen(true)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                px: 2.2,
                py: 1.2,
                borderRadius: '100px',
                background: '#f5c842',
                color: '#0e0d0c',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                boxShadow: '0 4px 24px rgba(245, 200, 66, 0.35), 0 2px 8px rgba(0,0,0,0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 32px rgba(245, 200, 66, 0.45), 0 4px 12px rgba(0,0,0,0.4)',
                },
                userSelect: 'none',
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
              zIndex: 1000,
            }}
          >
            <Box
              sx={{
                borderRadius: '20px',
                border: '1px solid rgba(245, 200, 66, 0.2)',
                background: '#161412',
                boxShadow: '0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                maxHeight: 'min(560px, calc(100vh - 48px))',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2.5,
                  py: 2,
                  borderBottom: '1px solid rgba(240, 236, 228, 0.07)',
                  background: '#1a1814',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#f0ece4',
                      lineHeight: 1.2,
                    }}
                  >
                    {headerText}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#8c8272', mt: 0.2 }}>
                    {subtitleText}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => setOpen(false)}
                  size="small"
                  sx={{
                    color: '#8c8272',
                    '&:hover': { color: '#f0ece4', background: 'rgba(240,236,228,0.07)' },
                  }}
                >
                  ✕
                </IconButton>
              </Box>

              {/* Messages area */}
              <Box
                sx={{
                  flexGrow: 1,
                  overflowY: 'auto',
                  px: 2.5,
                  py: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  minHeight: 120,
                  maxHeight: 320,
                  '&::-webkit-scrollbar': { width: '4px' },
                  '&::-webkit-scrollbar-track': { background: 'transparent' },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(245, 200, 66, 0.2)',
                    borderRadius: '2px',
                  },
                }}
              >
                {messages.length === 0 && pending === null && (
                  <Box sx={{ textAlign: 'center', py: 3 }}>
                    <Typography sx={{ fontSize: '2rem', mb: 1.5 }}>🤖</Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: '#8c8272' }}>
                      {isEn
                        ? 'Ask me anything about Simon.'
                        : 'Demandez-moi n\'importe quoi sur Simon.'}
                    </Typography>
                  </Box>
                )}

                {messages.map((msg) => (
                  <Box
                    key={msg.id}
                    sx={{
                      display: 'flex',
                      justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '85%',
                        px: 1.8,
                        py: 1.2,
                        borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                        background:
                          msg.role === 'user'
                            ? 'rgba(245, 200, 66, 0.15)'
                            : 'rgba(240, 236, 228, 0.05)',
                        border: '1px solid',
                        borderColor:
                          msg.role === 'user'
                            ? 'rgba(245, 200, 66, 0.25)'
                            : 'rgba(240, 236, 228, 0.08)',
                        fontSize: '0.82rem',
                        color: '#f0ece4',
                        lineHeight: 1.7,
                        fontFamily: "'DM Sans', sans-serif",
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {msg.text}
                    </Box>
                  </Box>
                ))}

                {/* Streaming response */}
                {pending !== null && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Box
                      sx={{
                        maxWidth: '85%',
                        px: 1.8,
                        py: 1.2,
                        borderRadius: '16px 16px 16px 4px',
                        background: 'rgba(240, 236, 228, 0.05)',
                        border: '1px solid rgba(240, 236, 228, 0.08)',
                      }}
                    >
                      <StreamingMessage text={pending} onDone={handleStreamDone} />
                    </Box>
                  </Box>
                )}

                <div ref={messagesEndRef} />
              </Box>

              {/* Suggestions */}
              {messages.length === 0 && pending === null && (
                <Box
                  sx={{
                    px: 2.5,
                    pb: 1.5,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 0.7,
                    borderTop: '1px solid rgba(240, 236, 228, 0.06)',
                    pt: 1.5,
                  }}
                >
                  {suggestions.map((s) => (
                    <Box
                      key={s.key}
                      onClick={() => sendMessage(s.label)}
                      sx={{
                        px: 1.4,
                        py: 0.5,
                        borderRadius: '20px',
                        border: '1px solid rgba(240, 236, 228, 0.12)',
                        fontSize: '0.72rem',
                        color: '#8c8272',
                        cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif",
                        transition: 'all 0.15s',
                        userSelect: 'none',
                        '&:hover': {
                          borderColor: 'rgba(245, 200, 66, 0.35)',
                          color: '#f5c842',
                          background: 'rgba(245, 200, 66, 0.06)',
                        },
                      }}
                    >
                      {s.label}
                    </Box>
                  ))}
                </Box>
              )}

              {/* Input */}
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  borderTop: '1px solid rgba(240, 236, 228, 0.07)',
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                }}
              >
                <Box
                  component="input"
                  ref={inputRef}
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={placeholderText}
                  disabled={pending !== null}
                  sx={{
                    flex: 1,
                    background: 'rgba(240, 236, 228, 0.05)',
                    border: '1px solid rgba(240, 236, 228, 0.1)',
                    borderRadius: '10px',
                    px: 1.5,
                    py: 1,
                    color: '#f0ece4',
                    fontSize: '0.82rem',
                    fontFamily: "'DM Sans', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.15s',
                    '&:focus': { borderColor: 'rgba(245, 200, 66, 0.4)' },
                    '&::placeholder': { color: '#5c5448' },
                    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
                  }}
                />
                <Box
                  onClick={() => sendMessage(input)}
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: input.trim() && pending === null ? '#f5c842' : 'rgba(240,236,228,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: input.trim() && pending === null ? 'pointer' : 'default',
                    flexShrink: 0,
                    transition: 'background 0.15s, transform 0.15s',
                    color: input.trim() && pending === null ? '#0e0d0c' : '#5c5448',
                    fontSize: '0.9rem',
                    '&:hover': input.trim() && pending === null
                      ? { transform: 'scale(1.05)', background: '#f9d96e' }
                      : {},
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
