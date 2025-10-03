import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: '500,000+', label: 'Lines of Code' },
    { value: '16+', label: 'Production Systems' },
    { value: '8+', label: 'Languages Mastered' },
    { value: '20+', label: 'Frameworks Deployed' },
  ];

  return (
    <Box id="about" ref={ref} sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            ABOUT ME
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

          <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, textAlign: 'center' }}>
            Hi There! I'm Simon Delisle
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <strong>Enterprise Software Architect</strong> with proven expertise in building large-scale,
            mission-critical systems. I have delivered a <strong>complete logistics ecosystem</strong> serving
            multiple business units with <strong>real-time operations</strong>, <strong>AI integration</strong>,
            and <strong>mobile-first solutions</strong>.
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            With over <strong>500,000+ lines of production code</strong> across 16 enterprise systems,
            I've demonstrated mastery across the entire technology stack from <strong>Flutter mobile
            applications</strong> to <strong>enterprise ERP integrations</strong>.
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center' }}>
                  <CardContent>
                    <Typography variant="h4" color="primary" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
