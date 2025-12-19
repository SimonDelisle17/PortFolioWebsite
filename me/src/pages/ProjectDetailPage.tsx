import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  Launch,
  Architecture,
  Code,
  Speed,
} from '@mui/icons-material';
import { getProjectById } from '../data/projectsData';
import { projectsDataFr } from '../data/projectsData.fr';
import { useTranslation } from 'react-i18next';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const project = i18n.language === 'fr'
    ? projectsDataFr.find(p => p.id === parseInt(id || ''))
    : getProjectById(id || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          {t('projectDetail.backToPortfolio')}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mt: 3 }}
        >
          {t('projectDetail.backToPortfolio')}
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{ mb: 4, color: 'primary.main' }}
          >
            {t('projectDetail.backToPortfolio')}
          </Button>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ fontSize: '4rem', mb: 2, display: 'flex', justifyContent: 'center' }}>
              {project.icon.startsWith('http') || project.icon.includes('.png') || project.icon.includes('.jpg') || project.icon.includes('.svg') ? (
                <img src={project.icon} alt={project.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              ) : (
                project.icon
              )}
            </Box>
            <Typography variant="h2" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              {project.impact}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              {project.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>

            {project.liveUrl && (
              <Button
                variant="contained"
                endIcon={<Launch />}
                href={project.liveUrl}
                target="_blank"
                sx={{ mt: 3 }}
              >
                {t('projectDetail.visitWebsite')}
              </Button>
            )}
          </Box>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Architecture color="primary" />
                {t('projectDetail.overview')}
              </Typography>
              <Typography variant="body1" paragraph>
                {project.detailedDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>{t('projectDetail.architecture')}:</strong> {project.architecture}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle color="primary" />
                {t('projectDetail.features')}
              </Typography>
              <List>
                {project.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
                <Code color="primary" />
                {t('projectDetail.technologies')}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                  },
                  gap: 3,
                }}
              >
                {Object.entries(project.technologies).map(([category, techs], index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 3,
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '250px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="secondary.main"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                      {techs.map((tech, techIndex) => (
                        <Box
                          key={techIndex}
                          sx={{
                            px: 2,
                            py: 1.5,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'primary.dark',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            textAlign: 'center',
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Speed color="primary" />
                {t('projectDetail.metrics')}
              </Typography>
              <Grid container spacing={3} sx={{ mt: 1 }}>
                {Object.entries(project.metrics).map(([key, value], index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        bgcolor: 'background.default',
                        borderRadius: 2,
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        borderOpacity: 0.2,
                      }}
                    >
                      <Typography variant="h5" color="primary" gutterBottom>
                        {value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </motion.div>

        {/* Back Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
          >
            Back to Portfolio
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetailPage;
