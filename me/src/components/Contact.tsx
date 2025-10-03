import { Box, Container, Typography } from '@mui/material';

const Contact = () => (
  <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        GET IN TOUCH
      </Typography>
      <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />
      <Typography variant="body1" align="center">
        Contact form - Available for enterprise software solutions
      </Typography>
    </Container>
  </Box>
);

export default Contact;
