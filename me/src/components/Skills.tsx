import { Box, Container, Typography } from '@mui/material';

const Skills = () => (
  <Box id="resume" sx={{ py: 10, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        TECHNICAL EXPERTISE
      </Typography>
      <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />
      <Typography variant="body1" align="center">
        Skills section - Full stack expertise across 8+ languages and 20+ frameworks
      </Typography>
    </Container>
  </Box>
);

export default Skills;
