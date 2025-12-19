import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Character animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const nameText = 'Simon\nDelisle';

  return (
    <Box
      ref={ref}
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0f1e 0%, #121829 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        },
      }}
    >
      {/* Particle Background */}
      <ParticleBackground />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ y, opacity }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'secondary.main',
                      mb: 2,
                      fontWeight: 500,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('hero.greeting')}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ perspective: '1000px' }}
                >
                  <Box
                    component="h1"
                    sx={{
                      fontSize: { xs: '3rem', md: '5.5rem' },
                      fontWeight: 900,
                      mb: 2,
                      lineHeight: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                    }}
                  >
                    {nameText.split('\n').map((line, lineIndex) => (
                      <Box
                        key={lineIndex}
                        sx={{ display: 'flex', overflow: 'hidden' }}
                      >
                        {line.split('').map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            variants={charVariants}
                            style={{
                              display: 'inline-block',
                              background:
                                'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffc107 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundSize: '200% auto',
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {t('hero.title1')}
                    <br />
                    {t('hero.title2')}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/simon-d2088/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          bgcolor: 'background.paper',
                          width: 64,
                          height: 64,
                          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            bgcolor: 'background.paper',
                            boxShadow: '0 12px 48px rgba(0, 212, 255, 0.5)',
                          },
                        }}
                      >
                        <LinkedIn sx={{ fontSize: 32 }} />
                      </IconButton>
                    </motion.div>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1.2,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 500,
                      aspectRatio: '1',
                      background:
                        'linear-gradient(135deg, rgba(26, 34, 51, 0.8), rgba(18, 24, 41, 0.8))',
                      borderRadius: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow:
                        '0 20px 60px rgba(0, 212, 255, 0.3), inset 0 0 60px rgba(0, 212, 255, 0.1)',
                      mx: 'auto',
                      position: 'relative',
                      overflow: 'hidden',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          'linear-gradient(135deg, rgba(0, 212, 255, 0.1), transparent 50%, rgba(255, 193, 7, 0.1))',
                        animation: 'shimmer 3s ease-in-out infinite',
                      },
                      '@keyframes shimmer': {
                        '0%, 100%': { opacity: 0.5 },
                        '50%': { opacity: 1 },
                      },
                    }}
                  >
                    <Typography
                      component={motion.div}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      sx={{
                        fontSize: '7rem',
                        fontWeight: 900,
                        background:
                          'linear-gradient(135deg, #00d4ff 0%, #ffc107 50%, #00d4ff 100%)',
                        backgroundSize: '200% auto',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      SD
                    </Typography>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
