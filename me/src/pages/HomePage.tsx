import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import LanguageSwitcher from '../components/LanguageSwitcher';
import mePhoto from '../assets/me.jpg';
import simondevLogo from '../assets/simondev_transparent.png';
import apdqLogo from '../assets/apdq.png';

// ─── Typewriter ───────────────────────────────────────────────────────────────
const PHRASES_EN = [
  'builds logistics ecosystems.',
  'ships Flutter apps to the field.',
  'deploys AI that actually works.',
  'engineers real-time pipelines.',
  'writes K8s manifests at 2am.',
  'turns coffee into microservices.',
  'automates what others do by hand.',
  'builds backends that handle 5M+ parts.',
  'makes phones answer themselves.',
  'ships 19 projects in 2 years.',
  'codes in the evening for fun.',
  'puts LLMs on real phone lines.',
  'runs GitOps on bare metal.',
];
const PHRASES_FR = [
  "construit des écosystèmes logistiques.",
  "déploie des apps Flutter en production.",
  "met en prod des IA qui fonctionnent vraiment.",
  "conçoit des pipelines en temps réel.",
  "écrit des manifests K8s à 2h du matin.",
  "transforme le café en microservices.",
  "automatise ce que d'autres font à la main.",
  "construit des backends pour 5M+ pièces.",
  "fait répondre les téléphones tout seuls.",
  "livre 19 projets en 2 ans.",
  "code le soir pour le plaisir.",
  "met des LLMs sur de vraies lignes téléphoniques.",
  "fait du GitOps sur du bare metal.",
];

const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const phrase = phrases[phraseIdx];

    if (paused) {
      timeoutRef.current = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 1800);
      return;
    }

    if (!deleting && displayed.length < phrase.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length + 1));
      }, 52);
    } else if (!deleting && displayed.length === phrase.length) {
      setPaused(true);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, paused, phraseIdx, phrases]);

  return (
    <Box component="span" sx={{ display: 'inline' }}>
      <Box component="span" sx={{ color: '#f5c842' }}>{displayed}</Box>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          bgcolor: '#f5c842',
          ml: '2px',
          verticalAlign: 'text-bottom',
          animation: 'blink 1s step-end infinite',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      />
    </Box>
  );
};

// ─── Animated chat bubbles ────────────────────────────────────────────────────
const Dot = ({ delay }: { delay: number }) => (
  <Box
    component={motion.div}
    animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 1.2, repeat: Infinity, delay, ease: 'easeInOut' }}
    sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#f5c842' }}
  />
);

const ChatBubbles = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 1 }}>
    {[
      { color: '#f5c842', width: '72%', delay: 0 },
      { color: '#8c8272', width: '55%', delay: 0.15 },
      { color: '#f5c842', width: '40%', delay: 0.3 },
    ].map((b, i) => (
      <Box key={i} sx={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
        <Box
          sx={{
            width: b.width,
            height: 12,
            borderRadius: '8px',
            bgcolor: i % 2 === 0 ? 'rgba(245, 200, 66, 0.18)' : 'rgba(240, 236, 228, 0.08)',
            border: '1px solid',
            borderColor: i % 2 === 0 ? 'rgba(245, 200, 66, 0.3)' : 'rgba(240, 236, 228, 0.1)',
          }}
        />
      </Box>
    ))}
    <Box sx={{ display: 'flex', gap: 0.7, mt: 0.5, pl: 0.5 }}>
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </Box>
  </Box>
);

// ─── Stack pills ──────────────────────────────────────────────────────────────
const STACK = [
  'Flutter', 'Python', 'FastAPI', 'Node.js',
  'React', 'Angular', 'LangChain', 'Kubernetes',
  'Redis', 'PostgreSQL', 'Docker', 'TypeScript',
];

// ─── Project items (id + icon for clickable navigation) ──────────────────────
const PROJECT_ITEMS: { id: number; icon: string | 'tow' }[] = [
  { id: 6, icon: '🤖' }, { id: 8, icon: 'tow' }, { id: 1, icon: '🚚' }, { id: 2, icon: '📱' },
  { id: 3, icon: '🛒' }, { id: 4, icon: '🏢' }, { id: 5, icon: '🚗' }, { id: 7, icon: '⚙️' },
  { id: 9, icon: '☸️' }, { id: 10, icon: '🎛️' }, { id: 11, icon: '📡' }, { id: 12, icon: '⏰' },
  { id: 13, icon: '🔗' }, { id: 14, icon: '📦' }, { id: 15, icon: '🔄' }, { id: 16, icon: '⛳' },
  { id: 17, icon: '🎓' }, { id: 18, icon: '🛍️' }, { id: 19, icon: '🔧' },
];

// ─── Bento card base ──────────────────────────────────────────────────────────
interface BentoCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: object;
  interactive?: boolean;
  delay?: number;
}

const BentoCard = ({ children, onClick, sx, interactive = false, delay = 0 }: BentoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ height: '100%' }}
  >
    <Box
      onClick={onClick}
      sx={{
        height: '100%',
        borderRadius: '18px',
        border: '1px solid rgba(240, 236, 228, 0.07)',
        background: '#161412',
        boxShadow: '0 1px 3px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        position: 'relative',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
        ...(interactive && {
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.6), 0 20px 48px rgba(0,0,0,0.4)',
            borderColor: 'rgba(245, 200, 66, 0.2)',
            '& .card-arrow': { transform: 'translate(3px, -3px)', opacity: 1 },
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  </motion.div>
);

// ─── Arrow badge for navigable cards ─────────────────────────────────────────
const CardArrow = () => (
  <Box
    className="card-arrow"
    sx={{
      position: 'absolute',
      top: 18,
      right: 18,
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '1px solid rgba(245, 200, 66, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5,
      transition: 'transform 0.22s ease, opacity 0.22s ease',
      fontSize: '0.75rem',
      color: '#f5c842',
    }}
  >
    ↗
  </Box>
);

// ─── Static star background ───────────────────────────────────────────────────
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.4 + 0.1,
}));

const StarBackground = () => (
  <Box
    sx={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  >
    {STARS.map((s) => (
      <Box
        key={s.id}
        sx={{
          position: 'absolute',
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          borderRadius: '50%',
          bgcolor: `rgba(240, 236, 228, ${s.opacity})`,
        }}
      />
    ))}
  </Box>
);


// ─── Main HomePage ────────────────────────────────────────────────────────────
const HomePage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');
  const phrases = isEn ? PHRASES_EN : PHRASES_FR;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0e0d0c',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <StarBackground />

      {/* Top bar */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 3 },
          py: 1.5,
          borderBottom: '1px solid rgba(240, 236, 228, 0.05)',
          backdropFilter: 'blur(12px)',
          background: 'rgba(14, 13, 12, 0.8)',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: '1rem',
            fontWeight: 600,
            color: '#f0ece4',
            letterSpacing: '-0.01em',
          }}
        >
          SD
        </Typography>
        <LanguageSwitcher />
      </Box>

      {/* Main bento grid */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 1.5, md: 2.5 },
          pt: { xs: 8, md: 7 },
          pb: { xs: 20, md: 16 },
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {/* ── Row 1: Hero ─────────────────────────────────────────────────── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr' },
            gap: { xs: 1.5, md: 2 },
            mb: { xs: 1.5, md: 2 },
          }}
        >
          <BentoCard delay={0.05} sx={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <Box sx={{ p: { xs: 3, md: 5 }, pt: { xs: 3, md: 4 } }}>
              {/* Name + logo lockup */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 2, md: 3 },
                  mb: 1.5,
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5.5rem', lg: '6.5rem' },
                    fontWeight: 700,
                    color: '#f0ece4',
                    lineHeight: 1.0,
                    letterSpacing: '-0.03em',
                    flexShrink: 0,
                  }}
                >
                  Simon Delisle
                </Typography>

                {/* Thin amber rule */}
                <Box
                  sx={{
                    width: '1px',
                    height: { sm: '44px', md: '60px', lg: '72px' },
                    background: 'linear-gradient(to bottom, transparent, rgba(245,200,66,0.5), transparent)',
                    flexShrink: 0,
                    display: { xs: 'none', sm: 'block' },
                  }}
                />

                {/* SimonDev Inc logo */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    flexShrink: 0,
                    transition: 'filter 0.2s, opacity 0.2s',
                    opacity: 0.85,
                    '&:hover': {
                      opacity: 1,
                      filter: 'drop-shadow(0 0 10px rgba(245,200,66,0.25))',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={simondevLogo}
                    alt="SimonDev Inc"
                    sx={{ width: { sm: 110, md: 150, lg: 200 }, height: 'auto', display: 'block' }}
                  />
                </Box>
              </Box>

              {/* Subtitle + typewriter */}
              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: { xs: '1rem', md: '1.3rem' },
                  color: '#8c8272',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  minHeight: '2em',
                }}
              >
                {isEn ? 'A developer who ' : 'Un développeur qui '}
                <Typewriter phrases={phrases} />
              </Typography>

              {/* Quick stat pills */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                {[
                  { label: isEn ? '19 projects shipped' : '19 projets livrés', accent: true, link: '/projects' },
                  { label: isEn ? 'Based in Québec' : 'Basé au Québec', accent: false, link: null },
                  { label: isEn ? 'Open to work' : 'Disponible', accent: false, link: '/contact', green: true },
                ].map((p) => (
                  <Box
                    key={p.label}
                    onClick={p.link ? () => navigate(p.link!) : undefined}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '20px',
                      border: '1px solid',
                      borderColor: p.accent
                        ? 'rgba(245, 200, 66, 0.4)'
                        : p.green
                        ? 'rgba(74, 222, 128, 0.35)'
                        : 'rgba(240, 236, 228, 0.1)',
                      fontSize: '0.78rem',
                      color: p.accent ? '#f5c842' : p.green ? '#4ade80' : '#8c8272',
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      cursor: p.link ? 'pointer' : 'default',
                      transition: 'all 0.15s ease',
                      ...(p.link && {
                        '&:hover': {
                          borderColor: p.accent ? 'rgba(245,200,66,0.7)' : p.green ? 'rgba(74,222,128,0.6)' : 'rgba(240,236,228,0.25)',
                          color: p.accent ? '#f5c842' : p.green ? '#86efac' : '#c8c0b4',
                        },
                      }),
                    }}
                  >
                    {p.green && <Box component="span" sx={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', bgcolor: '#4ade80', mr: 0.7, mb: '1px', verticalAlign: 'middle', animation: 'pulse 2s ease-in-out infinite', '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } } }} />}{p.label}
                  </Box>
                ))}
              </Box>
            </Box>
          </BentoCard>
        </Box>

        {/* ── Row 2: 3 columns ────────────────────────────────────────────── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gridTemplateRows: { md: 'auto auto' },
            gap: { xs: 1.5, md: 2 },
            mb: { xs: 1.5, md: 2 },
          }}
        >
          {/* ── About card (left, spans 2 rows on desktop) ─────────────── */}
          <BentoCard
            interactive
            delay={0.1}
            onClick={() => navigate('/about')}
            sx={{ gridRow: { md: '1 / 4' } }}
          >
            <CardArrow />
            <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8c8272',
                  mb: 2,
                }}
              >
                {isEn ? 'About' : 'À propos'}
              </Typography>

              {/* Photo placeholder */}
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  maxWidth: 220,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  mb: 2.5,
                  background: 'rgba(245, 200, 66, 0.05)',
                  border: '1px solid rgba(245, 200, 66, 0.1)',
                  mx: 'auto',
                  display: 'block',
                }}
              >
                <Box
                  component="img"
                  src={mePhoto}
                  alt="Simon Delisle"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.display = 'flex';
                    e.currentTarget.parentElement!.style.alignItems = 'center';
                    e.currentTarget.parentElement!.style.justifyContent = 'center';
                    e.currentTarget.insertAdjacentHTML('afterend', '<span style="font-size:3rem">👨‍💻</span>');
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#f0ece4',
                  lineHeight: 1.3,
                  mb: 1.5,
                }}
              >
                {isEn
                  ? '"I build things that run in production."'
                  : '"Je construis des choses qui tournent en prod."'}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: '#8c8272',
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {isEn
                  ? 'Founder of SimonDev Inc. I architect logistics ecosystems, ship mobile apps for field workers, and wire AI into things that actually save people time.'
                  : "Fondateur de SimonDev Inc. J'architecture des écosystèmes logistiques, livre des apps mobiles sur le terrain et intègre l'IA dans des systèmes qui font vraiment gagner du temps."}
              </Typography>

              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    borderRadius: '6px',
                    background: 'rgba(245, 200, 66, 0.1)',
                    border: '1px solid rgba(245, 200, 66, 0.2)',
                    fontSize: '0.72rem',
                    color: '#f5c842',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  @SimonDevInc
                </Box>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    borderRadius: '6px',
                    background: 'rgba(240, 236, 228, 0.05)',
                    border: '1px solid rgba(240, 236, 228, 0.1)',
                    fontSize: '0.72rem',
                    color: '#8c8272',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {'5y+ exp'}
                </Box>
              </Box>
            </Box>
          </BentoCard>

          {/* ── Projects card (top middle) ──────────────────────────────── */}
          <BentoCard interactive delay={0.15} onClick={() => navigate('/projects')}>
            <CardArrow />
            <Box sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8c8272',
                  mb: 2,
                }}
              >
                {isEn ? 'Projects' : 'Projets'}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#f0ece4',
                  lineHeight: 1.2,
                  mb: 0.5,
                }}
              >
                19 {isEn ? 'shipped' : 'livrés'}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#8c8272', mb: 2.5 }}>
                {isEn ? 'All in production' : 'Tous en production'}
              </Typography>

              {/* Icon grid — each icon links to its project */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: 1,
                }}
              >
                {PROJECT_ITEMS.map((item) => (
                  <Box
                    key={item.id}
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); navigate(`/project/${item.id}`); }}
                    sx={{
                      aspectRatio: '1',
                      borderRadius: '10px',
                      background: 'rgba(240, 236, 228, 0.04)',
                      border: '1px solid rgba(240, 236, 228, 0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      '&:hover': { background: 'rgba(245, 200, 66, 0.12)', borderColor: 'rgba(245,200,66,0.25)', transform: 'scale(1.08)' },
                    }}
                  >
                    {item.icon === 'tow'
                      ? <Box component="img" src={apdqLogo} alt="APDQ" sx={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                      : item.icon}
                  </Box>
                ))}
              </Box>
            </Box>
          </BentoCard>

          {/* ── Contact card (top right) ────────────────────────────────── */}
          <BentoCard interactive delay={0.2} onClick={() => navigate('/contact')}>
            <CardArrow />
            <Box sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8c8272',
                  mb: 2,
                }}
              >
                Contact
              </Typography>

              <ChatBubbles />

              <Box sx={{ mt: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    color: '#f0ece4',
                    mb: 0.5,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  info@simondelisle.dev
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1.5, flexWrap: 'wrap' }}>
                  {[
                    { label: 'LinkedIn', icon: '💼' },
                    { label: 'GitHub', icon: '⚙️' },
                    { label: 'Email', icon: '✉️' },
                  ].map((link) => (
                    <Box
                      key={link.label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.2,
                        py: 0.5,
                        borderRadius: '6px',
                        background: 'rgba(240, 236, 228, 0.05)',
                        border: '1px solid rgba(240, 236, 228, 0.1)',
                        fontSize: '0.73rem',
                        color: '#8c8272',
                        fontFamily: "'DM Sans', sans-serif",
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        '&:hover': {
                          background: 'rgba(245, 200, 66, 0.08)',
                          borderColor: 'rgba(245, 200, 66, 0.2)',
                          color: '#f5c842',
                        },
                      }}
                    >
                      <span>{link.icon}</span>
                      {link.label}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </BentoCard>

          {/* ── Stack card (bottom middle) ──────────────────────────────── */}
          <BentoCard interactive delay={0.25} onClick={() => navigate('/skills')}>
            <CardArrow />
            <Box sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8c8272',
                  mb: 2,
                }}
              >
                {isEn ? 'Stack' : 'Technologies'}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                {STACK.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.72rem',
                      height: 24,
                      borderColor: 'rgba(240, 236, 228, 0.12)',
                      color: '#8c8272',
                      fontFamily: "'DM Sans', sans-serif",
                      '&:hover': {
                        borderColor: 'rgba(245, 200, 66, 0.3)',
                        color: '#f5c842',
                        background: 'rgba(245, 200, 66, 0.06)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </BentoCard>

          {/* ── Featured projects (bottom right — spans col 2+3) ─────── */}
          <Box sx={{ gridColumn: { md: '2 / 4' }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 1.5, md: 2 } }}>

            {/* Flagship — PaSUPER AI */}
            <BentoCard interactive delay={0.3} onClick={() => navigate('/project/6')}>
              <CardArrow />
              <Box sx={{ p: 3, height: '100%', background: 'linear-gradient(135deg, #161412 0%, #1a1610 100%)', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1, py: 0.3, borderRadius: '4px', background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.25)', fontSize: '0.65rem', fontWeight: 600, color: '#f5c842', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", mb: 2 }}>
                  ⚡ {isEn ? 'Flagship' : 'Phare'}
                </Box>
                <Typography sx={{ fontSize: '1.5rem', mb: 0.5 }}>🤖</Typography>
                <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, color: '#f0ece4', lineHeight: 1.3, mb: 1 }}>
                  {isEn ? 'PaSUPER AI — Voice & Chat' : 'PaSUPER IA — Voix & Chat'}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#8c8272', lineHeight: 1.6, mb: 2 }}>
                  {isEn
                    ? 'Omnichannel AI for a 5M-part auto distributor. Real phone calls + streaming chat, 3 languages.'
                    : 'IA omnicanal pour un distributeur auto de 5M pièces. Appels réels + chat SSE, 3 langues.'}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                  {['LangChain', 'GPT-4o', 'FastAPI', 'Twilio'].map((t) => (
                    <Box key={t} sx={{ px: 1, py: 0.3, borderRadius: '4px', background: 'rgba(240,236,228,0.05)', border: '1px solid rgba(240,236,228,0.1)', fontSize: '0.68rem', color: '#8c8272', fontFamily: "'JetBrains Mono', monospace" }}>{t}</Box>
                  ))}
                </Box>
              </Box>
            </BentoCard>

            {/* APDQ Towing — identical layout to flagship */}
            <BentoCard interactive delay={0.35} onClick={() => navigate('/project/8')}>
              <CardArrow />
              <Box sx={{ p: 3, height: '100%', background: 'linear-gradient(135deg, #161412 0%, #1a1610 100%)', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1, py: 0.3, borderRadius: '4px', background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.25)', fontSize: '0.65rem', fontWeight: 600, color: '#f5c842', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", mb: 2 }}>
                  ⚡ {isEn ? 'Client Project' : 'Projet Client'}
                </Box>
                <Box component="img" src={apdqLogo} alt="APDQ" sx={{ width: 36, height: 36, objectFit: 'contain', display: 'block', mb: 0.5 }} />
                <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, color: '#f0ece4', lineHeight: 1.3, mb: 1 }}>
                  {isEn ? 'APDQ — EV Safety Platform' : 'APDQ — Sécurité VÉ'}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: '#f5c842', lineHeight: 1.4, mb: 1, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                  Association des Professionnels du Dépannage du Québec
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#8c8272', lineHeight: 1.6, mb: 2 }}>
                  {isEn
                    ? 'EV deactivation & neutral procedures for every electric vehicle. Flutter app + FastAPI + React portal.'
                    : 'Procédures de désactivation et mise au neutre pour chaque VÉ. App Flutter + FastAPI + portail React.'}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                  {['Flutter', 'FastAPI', 'React', 'Firebase'].map((t) => (
                    <Box key={t} sx={{ px: 1, py: 0.3, borderRadius: '4px', background: 'rgba(240,236,228,0.05)', border: '1px solid rgba(240,236,228,0.1)', fontSize: '0.68rem', color: '#8c8272', fontFamily: "'JetBrains Mono', monospace" }}>{t}</Box>
                  ))}
                </Box>
              </Box>
            </BentoCard>

          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default HomePage;
