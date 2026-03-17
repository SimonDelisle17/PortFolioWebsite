import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projectsData } from '../data/projectsData';
import { projectsDataFr } from '../data/projectsData.fr';
import { ProjectCategory } from '../types/project';
import { useTranslation } from 'react-i18next';
import TiltCard from './TiltCard';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t('portfolio.filters.all') },
    { id: 'backend', label: t('portfolio.filters.backend') },
    { id: 'frontend', label: t('portfolio.filters.frontend') },
    { id: 'mobile', label: t('portfolio.filters.mobile') },
    { id: 'ai', label: t('portfolio.filters.ai') },
    { id: 'fullstack', label: t('portfolio.filters.fullstack') },
    { id: 'devops', label: t('portfolio.filters.devops') },
  ];

  const currentProjects = i18n.language === 'fr' ? projectsDataFr : projectsData;

  const filteredProjects = activeFilter === 'all'
    ? currentProjects
    : currentProjects.filter(project => project.category === activeFilter);

  const spotlightProject = filteredProjects.find(p => p.displayOrder !== undefined);
  const regularProjects = filteredProjects.filter(p => p.displayOrder === undefined);

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <Box id="portfolio" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          {t('portfolio.title')}
        </Typography>
        <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 3 }} />

        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: 'text.secondary',
            fontWeight: 400,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          {t('portfolio.subtitle')}
        </Typography>

        {/* Filters */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 6 }}>
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'contained' : 'outlined'}
              onClick={() => setActiveFilter(filter.id)}
              sx={{ borderRadius: '25px' }}
            >
              {filter.label}
            </Button>
          ))}
        </Box>

        {/* Spotlight Project — full width, shown first */}
        {spotlightProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem' }}
          >
            <Card
              onClick={() => handleProjectClick(spotlightProject.id)}
              sx={{
                cursor: 'pointer',
                border: '2px solid',
                borderColor: 'primary.main',
                boxShadow: '0 0 40px rgba(0, 212, 255, 0.2)',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(18, 24, 41, 0.95) 50%, rgba(255, 193, 7, 0.04) 100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 60px rgba(0, 212, 255, 0.35)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                {/* Header row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                  <Box
                    sx={{
                      bgcolor: 'primary.main',
                      color: '#000',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    ⚡ Flagship Project
                  </Box>
                  <Box
                    sx={{
                      bgcolor: 'rgba(255,193,7,0.15)',
                      color: 'secondary.main',
                      border: '1px solid',
                      borderColor: 'secondary.main',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    AI
                  </Box>
                </Box>

                {/* Two-column layout */}
                <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                  {/* Left: identity */}
                  <Box sx={{ flex: '1 1 55%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ fontSize: '3rem' }}>{spotlightProject.icon}</Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                        {spotlightProject.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2.5, lineHeight: 1.7, fontSize: '1rem' }}
                    >
                      {spotlightProject.shortDescription}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                      {spotlightProject.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ fontSize: '0.75rem', height: '26px', fontWeight: 500 }}
                        />
                      ))}
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.6 }}
                    >
                      💡 {spotlightProject.impact}
                    </Typography>
                  </Box>

                  {/* Right: metrics + CTA */}
                  <Box
                    sx={{
                      flex: '1 1 40%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                      borderLeft: { md: '1px solid rgba(0,212,255,0.2)' },
                      pl: { md: 4 },
                    }}
                  >
                    {Object.entries(spotlightProject.metrics).map(([key, value]) => (
                      <Box key={key}>
                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {key}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                          {value}
                        </Typography>
                      </Box>
                    ))}

                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ textTransform: 'none', fontWeight: 700, fontSize: '1rem', py: 1.4, borderRadius: '8px' }}
                      >
                        {t('portfolio.viewDetails')}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -8 }}
              style={{ width: '100%' }}
            >
              <TiltCard onClick={() => handleProjectClick(project.id)}>
                <CardContent
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      fontSize: '3.5rem',
                      mb: 2.5,
                      height: '70px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {project.icon.startsWith('http') || project.icon.includes('.png') || project.icon.includes('.jpg') || project.icon.includes('.svg') ? (
                      <img src={project.icon} alt={project.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                    ) : (
                      project.icon
                    )}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      height: '64px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      fontSize: '1.35rem',
                      lineHeight: 1.4,
                      textAlign: 'center',
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2.5,
                      height: '72px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {project.shortDescription}
                  </Typography>

                  {/* Tags */}
                  <Box
                    sx={{
                      mb: 2.5,
                      height: '60px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.75,
                      alignContent: 'flex-start',
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{
                          fontSize: '0.75rem',
                          height: '26px',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                    {project.tags.length > 3 && (
                      <Chip
                        label={`+${project.tags.length - 3}`}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.75rem',
                          height: '26px',
                        }}
                      />
                    )}
                  </Box>

                  {/* Impact */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontStyle: 'italic',
                      mb: 2.5,
                      height: '44px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: 1.5,
                      fontSize: '0.9rem',
                    }}
                  >
                    💡 {project.impact}
                  </Typography>

                  {/* Button - Pushed to bottom */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        py: 1.2,
                        borderRadius: '8px',
                      }}
                    >
                      {t('portfolio.viewDetails')}
                    </Button>
                  </Box>
                </CardContent>
              </TiltCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
