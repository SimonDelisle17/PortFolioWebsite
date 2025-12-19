import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Animated background gradient */}
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              sx={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            {/* Logo/Initials */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
            >
              <Typography
                sx={{
                  fontSize: '8rem',
                  fontWeight: 900,
                  background:
                    'linear-gradient(135deg, #00d4ff 0%, #ffc107 50%, #00d4ff 100%)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 4,
                  animation: 'shimmer 3s linear infinite',
                  '@keyframes shimmer': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                  },
                }}
              >
                SD
              </Typography>
            </motion.div>

            {/* Progress bar */}
            <Box
              sx={{
                width: '300px',
                height: '4px',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #00d4ff, #ffc107)',
                  borderRadius: '2px',
                }}
              />
            </Box>

            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Typography
                sx={{
                  mt: 2,
                  color: 'primary.main',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                }}
              >
                {progress}%
              </Typography>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                sx={{
                  mt: 3,
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                Loading Portfolio
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
