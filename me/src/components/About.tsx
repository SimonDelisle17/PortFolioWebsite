import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: '600,000+', label: t('about.stats.loc') },
    { value: '20+', label: t('about.stats.systems') },
    { value: '8+', label: t('about.stats.languages') },
    { value: '25+', label: t('about.stats.frameworks') },
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
            {t('about.title')}
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

          <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, textAlign: 'center' }}>
            {t('about.greeting')}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            {t('about.description1')}
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            {t('about.description2')}
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} md={3} key={index}>
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
