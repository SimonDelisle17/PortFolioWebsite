import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Container, Typography, Button, IconButton, Snackbar, Alert } from '@mui/material';
import { Email, LinkedIn, GitHub, ContentCopy } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const EMAIL = 'info@simondelisle.dev';

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setSnackbarOpen(true);
  };

  return (
    <Box id="contact" ref={ref} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            {t('contact.title')}
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 5, color: 'text.secondary', lineHeight: 1.8 }}
          >
            {t('contact.subtitle')}
          </Typography>

          {/* Email */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              endIcon={<ContentCopy sx={{ fontSize: 18 }} />}
              onClick={handleCopyEmail}
              sx={{ fontSize: '1rem', px: 4, py: 1.5 }}
            >
              {EMAIL}
            </Button>
          </Box>

          {/* Social Links */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {t('contact.or')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/simon-d2088/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'background.paper',
                    width: 56,
                    height: 56,
                    '&:hover': {
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 24px rgba(0, 212, 255, 0.2)',
                    },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 28 }} />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  component="a"
                  href="https://github.com/Simon-Delisle"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'background.paper',
                    width: 56,
                    height: 56,
                    '&:hover': {
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 24px rgba(0, 212, 255, 0.2)',
                    },
                  }}
                >
                  <GitHub sx={{ fontSize: 28 }} />
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {t('contact.emailCopied')}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
