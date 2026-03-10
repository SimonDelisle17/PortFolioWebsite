import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dismiss = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      // Already loaded — brief flash then dismiss
      const timer = setTimeout(dismiss, 300);
      return () => clearTimeout(timer);
    }

    // Wait for real page load, but cap at 800ms max
    const maxTimer = setTimeout(dismiss, 800);
    window.addEventListener('load', dismiss);

    return () => {
      clearTimeout(maxTimer);
      window.removeEventListener('load', dismiss);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              background: 'linear-gradient(135deg, #0a0f1e 0%, #121829 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.img
              src={logo}
              alt="SimonDev Inc"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                width: 120,
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))',
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
