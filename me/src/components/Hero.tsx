import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, IconButton, Grid } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
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
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{ color: 'secondary.main', mb: 2, fontWeight: 500 }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Simon
                <br />
                Delisle
              </Typography>

              <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
                Software Engineer / AI Engineer
                <br />
                Full Stack Developer
              </Typography>

              <Button variant="contained" size="large" sx={{ mb: 4 }}>
                Hire me
              </Button>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: 'background.paper',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: 'background.paper',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: 'background.paper',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Twitter />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  aspectRatio: '1',
                  background: 'linear-gradient(135deg, #1a2233, #121829)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(0, 212, 255, 0.2)',
                  mx: 'auto',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '6rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  SD
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
