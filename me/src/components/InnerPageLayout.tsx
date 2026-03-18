import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LanguageSwitcher from './LanguageSwitcher';

interface InnerPageLayoutProps {
  children: ReactNode;
  title?: string;
}

const InnerPageLayout = ({ children, title }: InnerPageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0e0d0c', position: 'relative' }}>
      {/* Top bar */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
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
          background: 'rgba(14, 13, 12, 0.9)',
          gap: 2,
        }}
      >
        {/* Back button */}
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            color: '#8c8272',
            fontSize: '0.82rem',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'color 0.15s',
            userSelect: 'none',
            '&:hover': { color: '#f0ece4' },
          }}
        >
          <Box component="span" sx={{ fontSize: '0.9rem' }}>←</Box>
          <Typography
            sx={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'inherit',
              lineHeight: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Simon Delisle
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'inherit',
              lineHeight: 1,
              display: { xs: 'block', sm: 'none' },
            }}
          >
            SD
          </Typography>
        </Box>

        {/* Page title (center) */}
        {title && (
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#8c8272',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          >
            {title}
          </Typography>
        )}

        <LanguageSwitcher />
      </Box>

      {/* Content — offset for fixed top bar */}
      <Box sx={{ pt: '56px' }}>
        {children}
      </Box>
    </Box>
  );
};

export default InnerPageLayout;
