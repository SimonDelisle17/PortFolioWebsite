import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { WorkHistory } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'Senior Full Stack Developer / Flutter Developer / AI Engineer',
      company: 'Pièces Auto Super',
      period: '2024 - Present',
      highlight: 'Built enterprise logistics ecosystem with 600K+ lines of code, WebSocket real-time systems (90% API optimization), AI integration, 6 Flutter mobile apps, and enterprise security solutions',
      tech: ['Flutter', 'Dart', 'Python', 'FastAPI', 'React', 'TypeScript', 'NestJS', 'Angular', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'HERE SDK', 'OpenAI', 'Azure', 'Socket.IO', 'WebSocket', 'Google ML Kit', 'Spring Boot'],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Blue Badger',
      period: '2021 - 2024',
      highlight: 'Developed Shopify e-commerce solutions for major brands with focus on performance and accessibility',
      tech: ['React', 'Liquid', 'Node.js', 'Ruby', '.NET', 'MySQL', 'HTML', 'CSS', 'Sass', 'JavaScript', 'Shopify'],
    },
    {
      title: 'Hybrid Mobile Developer',
      company: 'FetchVision',
      period: '2021',
      highlight: 'Built cross-platform mobile applications with Flutter and backend integrations',
      tech: ['Flutter', 'Dart', 'Node.js', 'MySQL'],
    },
  ];

  const languages = [
    'Python', 'TypeScript', 'JavaScript', 'Dart', 'HTML/CSS', 'Liquid', 'C#', 'Rust',
    'Java', 'Kotlin', 'Swift', 'SQL/MySQL', 'Bash/Shell'
  ];

  const frameworks = [
    'FastAPI', 'SQLAlchemy', 'Flutter', 'React', 'NestJS', 'Angular', 'Spring Boot',
    '.NET Core 7', 'Vite', 'Express', 'Strapi', 'Docker', 'Kubernetes', 'Node.js'
  ];

  return (
    <Box id="resume" ref={ref} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            {t('resume.title')}
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

          {/* Work Experience */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'center',
              }}
            >
              <WorkHistory color="primary" />
              {t('resume.workExperience')}
            </Typography>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card
                  sx={{
                    mb: 3,
                    position: 'relative',
                    overflow: 'visible',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '-20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '80%',
                      bgcolor: 'primary.main',
                      borderRadius: '2px',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                          {exp.company}
                        </Typography>
                      </Box>
                      <Chip
                        label={exp.period}
                        sx={{
                          bgcolor: 'primary.main',
                          color: '#000',
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                      {exp.highlight}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'text.secondary',
                            '&:hover': {
                              bgcolor: 'rgba(212, 175, 55, 0.1)',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
                  {t('resume.languages')}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                  {languages.map((lang, i) => (
                    <Chip
                      key={i}
                      label={lang}
                      sx={{
                        minWidth: '120px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        height: '36px',
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'text.secondary',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
                  {t('resume.frameworks')}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                  {frameworks.map((fw, i) => (
                    <Chip
                      key={i}
                      label={fw}
                      sx={{
                        minWidth: '120px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        height: '36px',
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        color: 'text.secondary',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Languages
              </Typography>
              <Typography variant="h6" color="text.secondary">
                French (Native) • English (Fluent)
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
