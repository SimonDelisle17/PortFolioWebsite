import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import InnerPageLayout from '../components/InnerPageLayout';

const EMAIL = 'info@simondelisle.dev';
const LINKEDIN = 'https://www.linkedin.com/in/simon-d2088/';
const GITHUB = 'https://github.com/SimonPasuper';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const ContactPage = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
  };

  return (
    <InnerPageLayout title="Contact">
      <Box sx={{ maxWidth: '720px', mx: 'auto', px: { xs: 2, md: 3 }, py: { xs: 4, md: 6 } }}>

        {/* Header */}
        <motion.div {...fade(0.05)}>
          <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: { xs: '2.2rem', md: '3rem' }, fontWeight: 700, color: '#f0ece4', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 0.5 }}>
            {isEn ? "Let's talk." : 'Parlons-en.'}
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#8c8272', mb: 4 }}>
            {isEn
              ? "Founder of SimonDev — I build production software for clients. Open to new projects."
              : "Fondateur de SimonDev — je construis des logiciels de production pour des clients. Ouvert à de nouveaux projets."}
          </Typography>
        </motion.div>

        {/* Email card */}
        <motion.div {...fade(0.1)}>
          <Box
            onClick={copyEmail}
            sx={{
              p: 3,
              mb: 2,
              borderRadius: '16px',
              border: '1px solid rgba(245,200,66,0.15)',
              background: '#161412',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              '&:hover': {
                borderColor: 'rgba(245,200,66,0.35)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              },
            }}
          >
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c8272', mb: 1, fontFamily: "'DM Sans', sans-serif" }}>
              {isEn ? 'Email — click to copy' : 'Email — cliquer pour copier'}
            </Typography>
            <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: { xs: '0.85rem', md: '1rem' }, color: '#f5c842' }}>
              {EMAIL}
            </Typography>
          </Box>
        </motion.div>

        {/* Social links */}
        <motion.div {...fade(0.15)}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 4 }}>
            <Box
              component="a"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: 2.5,
                borderRadius: '14px',
                border: '1px solid rgba(240,236,228,0.07)',
                background: '#161412',
                textDecoration: 'none',
                transition: 'all 0.18s ease',
                '&:hover': { borderColor: 'rgba(240,236,228,0.15)', transform: 'translateY(-2px)' },
              }}
            >
              <Box sx={{ fontSize: '1.3rem', mb: 1 }}>💼</Box>
              <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '0.95rem', fontWeight: 600, color: '#f0ece4', mb: 0.3 }}>LinkedIn</Typography>
              <Typography sx={{ fontSize: '0.72rem', color: '#8c8272' }}>simon-delisle</Typography>
            </Box>

            <Box
              component="a"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: 2.5,
                borderRadius: '14px',
                border: '1px solid rgba(240,236,228,0.07)',
                background: '#161412',
                textDecoration: 'none',
                transition: 'all 0.18s ease',
                '&:hover': { borderColor: 'rgba(240,236,228,0.15)', transform: 'translateY(-2px)' },
              }}
            >
              <Box sx={{ fontSize: '1.3rem', mb: 1 }}>⚙️</Box>
              <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '0.95rem', fontWeight: 600, color: '#f0ece4', mb: 0.3 }}>GitHub</Typography>
              <Typography sx={{ fontSize: '0.72rem', color: '#8c8272' }}>SimonPasuper — repos are private</Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Location */}
        <motion.div {...fade(0.2)}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: '14px',
              border: '1px solid rgba(240,236,228,0.07)',
              background: '#161412',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            <Box sx={{ fontSize: '1.4rem' }}>📍</Box>
            <Box>
              <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#f0ece4', mb: 0.2 }}>
                {isEn ? 'Québec, Canada' : 'Québec, Canada'}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#8c8272' }}>
                {isEn ? 'GMT-5 (Eastern Time)' : 'GMT-5 (Heure de l\'Est)'}
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* AskSimonClaude hint */}
        <motion.div {...fade(0.25)}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: '14px',
              border: '1px solid rgba(245,200,66,0.12)',
              background: 'rgba(245,200,66,0.04)',
            }}
          >
            <Typography sx={{ fontSize: '0.82rem', color: '#8c8272', lineHeight: 1.7 }}>
              <Box component="span" sx={{ color: '#f5c842' }}>🤖 Ask SimonClaude</Box>
              {isEn
                ? ' — The yellow button at the bottom right has pre-loaded answers about my work, stack, and availability. Faster than waiting for a reply.'
                : ' — Le bouton jaune en bas à droite a des réponses préchargées sur mon travail, ma stack et ma disponibilité. Plus rapide qu\'attendre une réponse.'}
            </Typography>
          </Box>
        </motion.div>

      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={2500}
        onClose={() => setCopied(false)}
        message={isEn ? 'Email copied to clipboard' : 'Email copié dans le presse-papiers'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            background: '#1a1814',
            border: '1px solid rgba(245,200,66,0.3)',
            color: '#f5c842',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.82rem',
            borderRadius: '10px',
          },
        }}
      />
    </InnerPageLayout>
  );
};

export default ContactPage;
