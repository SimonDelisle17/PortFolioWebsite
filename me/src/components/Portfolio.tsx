import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projectsData } from '../data/projectsData';
import { ProjectCategory } from '../types/project';

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box id="portfolio" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          PORTFOLIO
        </Typography>
        <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

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

        {/* Projects Grid - COMPLETELY UNIFORM */}
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -8 }}
              style={{ width: '100%' }}
            >
              <Card
                onClick={() => handleProjectClick(project.id)}
                sx={{
                  height: '500px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 24px rgba(0, 212, 255, 0.25)',
                  },
                }}
              >
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
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
