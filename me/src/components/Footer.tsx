import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 4, bgcolor: 'background.default', borderTop: '1px solid rgba(0, 212, 255, 0.1)' }}>
    <Container>
      <Typography variant="body2" align="center" color="text.secondary">
        © 2025 Simon Delisle. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
