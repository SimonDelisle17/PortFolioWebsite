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

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Project Not Found
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mt: 3 }}
        >
          Back to Portfolio
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
            Back to Portfolio
          </Button>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" sx={{ fontSize: '4rem', mb: 2 }}>
              {project.icon}
            </Typography>
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
                View Live Project
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
                Project Overview
              </Typography>
              <Typography variant="body1" paragraph>
                {project.detailedDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Architecture:</strong> {project.architecture}
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
                Key Features
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
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Code color="primary" />
                Technology Stack
              </Typography>
              <Grid container spacing={3} sx={{ mt: 1 }}>
                {Object.entries(project.technologies).map(([category, techs], index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Typography variant="h6" color="secondary" gutterBottom>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {techs.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{ bgcolor: 'background.default' }}
                        />
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
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
                Project Metrics
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
