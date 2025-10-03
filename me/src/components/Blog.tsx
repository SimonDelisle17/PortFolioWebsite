import { Box, Container, Typography } from '@mui/material';

const Blog = () => (
  <Box id="blog" sx={{ py: 10, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        BLOG & INSIGHTS
      </Typography>
      <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />
      <Typography variant="body1" align="center">
        Blog posts about enterprise architecture, mobile development, and AI
      </Typography>
    </Container>
  </Box>
);

export default Blog;
