import { Box, Container, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 5, bgcolor: 'background.default', borderTop: '1px solid rgba(0, 212, 255, 0.1)' }}>
      <Container>
        {/* Social Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 2 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/simon-d2088/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Simon-Delisle"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:info@simondelisle.dev"
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            <Email />
          </IconButton>
        </Box>

        {/* Location */}
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 1 }}>
          {t('footer.location')}
        </Typography>

        {/* Built with */}
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
          {t('footer.builtWith')}
        </Typography>

        {/* Copyright */}
        <Typography variant="body2" align="center" color="text.secondary">
          &copy; {new Date().getFullYear()} Simon Delisle
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
