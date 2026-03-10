import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import logo from '../assets/logo.png';

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
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
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        },
      }}
    >
      <ParticleBackground />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ y, opacity }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {/* CTA Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowDownward />}
                      onClick={() => {
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('hero.cta.work')}
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('hero.cta.contact')}
                    </Button>
                  </Box>

                </motion.div>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
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
                        '0 20px 60px rgba(0, 212, 255, 0.15), inset 0 0 60px rgba(0, 212, 255, 0.05)',
                      mx: 'auto',
                      position: 'relative',
                      overflow: 'hidden',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 212, 255, 0.15)',
                    }}
                  >
                    <Box
                      component="img"
                      src={logo}
                      alt="SimonDev Inc"
                      sx={{
                        width: '70%',
                        maxWidth: 350,
                        height: 'auto',
                        position: 'relative',
                        zIndex: 1,
                        filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.2))',
                      }}
                    />
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
