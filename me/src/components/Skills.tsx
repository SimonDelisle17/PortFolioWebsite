import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { WorkHistory, School } from '@mui/icons-material';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'Senior Full Stack Developer / Flutter Developer / AI Engineer',
      company: 'Pièces Auto Super',
      period: '2024 - Present',
      responsibilities: [
        'Built Super API Ecosystem: 300,000+ lines enterprise logistics platform with FastAPI, MySQL dual-database, JWE encryption, and microservices architecture',
        'Developed SuperApp v2.0: Dual-mode Flutter mobile app for delivery drivers and warehouse workers with HERE Maps SDK, real-time GPS tracking, barcode scanning, and offline-first architecture',
        'Created AI Phone Assistant: Multi-language conversational AI using OpenAI GPT, Azure Speech Services, and Deepgram for automated customer support via Twilio',
        'Engineered SuperDispatch: Real-time operations dashboard with React, Material-UI, and Socket.IO for live driver tracking and analytics',
        'Developed SuperParser, SuperCron, SuperODBC, and SuperTelemetry APIs for data processing, automation, and real-time fleet monitoring',
        'Implemented Kubernetes DevOps infrastructure with ArgoCD GitOps, Helm charts, reducing deployment time by 80%',
      ],
      tech: ['Flutter', 'Dart', 'Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'HERE SDK', 'OpenAI', 'Azure', 'Socket.IO'],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Blue Badger',
      period: '2021 - 2024',
      responsibilities: [
        'Developed and maintained Shopify e-commerce sites for major clients (Suzy Shier, Blnts, From Rachel)',
        'Integrated and customized Shopify apps: Spot, Gift Reggie, Product Filter & Search',
        'Optimized performance, accessibility (WCAG), SEO, and code quality',
        'Contributed to UI/UX design with Figma, Adobe XD, InVision',
        'Developed frontend (React, HTML/CSS, Liquid) and backend (NodeJS, .NET, MySQL, Ruby)',
      ],
      tech: ['React', 'Liquid', 'Node.js', 'Ruby', '.NET', 'MySQL', 'HTML', 'CSS', 'Sass', 'JavaScript', 'Shopify'],
    },
    {
      title: 'Hybrid Mobile Developer (Internship)',
      company: 'FetchVision',
      period: '2021',
      responsibilities: [
        'Developed hybrid mobile apps with Flutter and Dart',
        'Integrated MySQL database and Node.js server logic',
        'Implemented navigation, state management, REST API calls, and feature testing',
      ],
      tech: ['Flutter', 'Dart', 'Node.js', 'MySQL'],
    },
  ];

  const languages = [
    'Python', 'TypeScript', 'JavaScript', 'Dart', 'HTML/CSS', 'Liquid', 'C#', 'Rust',
    'Java', 'Kotlin', 'Swift', 'SQL/MySQL', 'Bash/Shell'
  ];

  const frameworks = [
    'FastAPI', 'SQLAlchemy', 'Flutter', 'React', 'Vue.js', 'Angular', 'Adonis',
    '.NET Core 7', 'Vite', 'Bootstrap', 'Shopify', 'Docker', 'Node.js'
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
            RESUME
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
              Work Experience
            </Typography>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card sx={{ mb: 3 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {exp.period}
                    </Typography>

                    <Box component="ul" sx={{ mb: 2, pl: 2 }}>
                      {exp.responsibilities.map((resp, i) => (
                        <Typography component="li" key={i} variant="body2" sx={{ mb: 1 }}>
                          {resp}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
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
              <School color="primary" />
              Education
            </Typography>

            <Card sx={{ mb: 6 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  AEC Management IT
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Teccart, Montreal, QC
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2019 - 2021
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
                  Programming Languages
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
                  Frameworks & Tools
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
