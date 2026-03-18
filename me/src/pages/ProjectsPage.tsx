import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InnerPageLayout from '../components/InnerPageLayout';
import { projectsData } from '../data/projectsData';
import { projectsDataFr } from '../data/projectsData.fr';
import { ProjectCategory } from '../types/project';
import TOWImage from '../assets/TOW.png';
import apdqLogo from '../assets/apdq.png';

const CATEGORIES: { id: ProjectCategory; en: string; fr: string }[] = [
  { id: 'all', en: 'All', fr: 'Tous' },
  { id: 'ai', en: 'AI', fr: 'IA' },
  { id: 'backend', en: 'Backend', fr: 'Backend' },
  { id: 'mobile', en: 'Mobile', fr: 'Mobile' },
  { id: 'frontend', en: 'Frontend', fr: 'Frontend' },
  { id: 'fullstack', en: 'Full Stack', fr: 'Full Stack' },
  { id: 'devops', en: 'DevOps', fr: 'DevOps' },
];

const CATEGORY_COLORS: Record<string, string> = {
  ai: '#f5c842',
  backend: '#6ee7b7',
  mobile: '#93c5fd',
  frontend: '#c4b5fd',
  fullstack: '#fda4af',
  devops: '#86efac',
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const data = isEn ? projectsData : projectsDataFr;
  const filtered = activeFilter === 'all' ? data : data.filter(p => p.category === activeFilter);
  const flagship = filtered.find(p => p.displayOrder !== undefined);
  const regular = filtered.filter(p => p.displayOrder === undefined);

  const isImageIcon = (icon: string) => icon === TOWImage || icon === apdqLogo || icon.includes('.png') || icon.includes('.jpg');
  const resolveIcon = (icon: string) => {
    if (isImageIcon(icon)) return null;
    return icon;
  };

  return (
    <InnerPageLayout title={isEn ? 'Projects' : 'Projets'}>
      <Box sx={{ maxWidth: '1100px', mx: 'auto', px: { xs: 2, md: 3 }, py: 4 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Typography
            sx={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: '#f0ece4',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              mb: 0.5,
            }}
          >
            {isEn ? '19 Projects' : '19 Projets'}
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#8c8272', mb: 3.5 }}>
            {isEn ? 'All shipped in production.' : 'Tous livrés en production.'}
          </Typography>
        </motion.div>

        {/* Filter pills */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.3 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 4 }}>
            {CATEGORIES.map((cat) => (
              <Box
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                sx={{
                  px: 1.5,
                  py: 0.55,
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: activeFilter === cat.id ? 'rgba(245, 200, 66, 0.6)' : 'rgba(240, 236, 228, 0.1)',
                  background: activeFilter === cat.id ? 'rgba(245, 200, 66, 0.12)' : 'transparent',
                  color: activeFilter === cat.id ? '#f5c842' : '#8c8272',
                  fontSize: '0.78rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  userSelect: 'none',
                  '&:hover': {
                    borderColor: 'rgba(245, 200, 66, 0.4)',
                    color: '#f0ece4',
                  },
                }}
              >
                {isEn ? cat.en : cat.fr}
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Flagship card */}
        <AnimatePresence mode="popLayout">
          {flagship && (
            <motion.div
              key="flagship"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                onClick={() => navigate(`/project/${flagship.id}`)}
                sx={{
                  mb: 2.5,
                  borderRadius: '18px',
                  border: '1px solid rgba(245, 200, 66, 0.2)',
                  background: 'linear-gradient(135deg, #1a1710 0%, #161412 100%)',
                  p: { xs: 2.5, md: 3.5 },
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 40px rgba(245, 200, 66, 0.12)',
                    borderColor: 'rgba(245, 200, 66, 0.4)',
                  },
                }}
              >
                <Box sx={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, md: 4 }, flexWrap: 'wrap' }}>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                      <Box sx={{ fontSize: '1.8rem' }}>{isImageIcon(flagship.icon) ? <Box component="img" src={flagship.icon} alt="" sx={{ width: 40, height: 40, objectFit: 'contain' }} /> : flagship.icon}</Box>
                      <Box sx={{ px: 1, py: 0.3, borderRadius: '4px', background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.25)', fontSize: '0.65rem', fontWeight: 600, color: '#f5c842', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                        ⚡ {isEn ? 'Flagship' : 'Phare'}
                      </Box>
                    </Box>
                    <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: { xs: '1.3rem', md: '1.6rem' }, fontWeight: 600, color: '#f0ece4', lineHeight: 1.2, mb: 1 }}>
                      {flagship.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: '#8c8272', lineHeight: 1.7, mb: 2, maxWidth: 600 }}>
                      {flagship.shortDescription}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
                      {flagship.tags.slice(0, 6).map((tag) => (
                        <Box key={tag} sx={{ px: 1, py: 0.3, borderRadius: '4px', background: 'rgba(240,236,228,0.05)', border: '1px solid rgba(240,236,228,0.1)', fontSize: '0.7rem', color: '#8c8272', fontFamily: "'JetBrains Mono', monospace" }}>
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Metrics */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, minWidth: 220 }}>
                    {Object.entries(flagship.metrics).slice(0, 4).map(([k, v]) => (
                      <Box key={k} sx={{ p: 1.5, borderRadius: '10px', background: 'rgba(240,236,228,0.04)', border: '1px solid rgba(240,236,228,0.07)' }}>
                        <Typography sx={{ fontSize: '0.72rem', color: '#f5c842', fontFamily: "'JetBrains Mono', monospace", mb: 0.3 }}>{v}</Typography>
                        <Typography sx={{ fontSize: '0.68rem', color: '#5c5448', fontFamily: "'DM Sans', sans-serif", textTransform: 'capitalize' }}>{k.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Regular project grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
          <AnimatePresence mode="popLayout">
            {regular.map((project, i) => {
              const emoji = resolveIcon(project.icon);
              const catColor = CATEGORY_COLORS[project.category] || '#8c8272';
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                >
                  <Box
                    onClick={() => navigate(`/project/${project.id}`)}
                    sx={{
                      height: '100%',
                      borderRadius: '16px',
                      border: '1px solid rgba(240, 236, 228, 0.07)',
                      background: '#161412',
                      p: 2.5,
                      cursor: 'pointer',
                      transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        borderColor: 'rgba(240, 236, 228, 0.14)',
                      },
                    }}
                  >
                    {/* Icon + category */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ fontSize: '1.6rem' }}>
                        {emoji ? emoji : isImageIcon(project.icon) ? <Box component="img" src={project.icon} alt="" sx={{ width: 36, height: 36, objectFit: 'contain' }} /> : '🔧'}
                      </Box>
                      <Box sx={{ px: 1, py: 0.25, borderRadius: '4px', background: `${catColor}18`, border: `1px solid ${catColor}30`, fontSize: '0.62rem', fontWeight: 600, color: catColor, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                        {project.category}
                      </Box>
                    </Box>

                    <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#f0ece4', lineHeight: 1.3, mb: 0.8 }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: '#8c8272', lineHeight: 1.6, mb: 2 }}>
                      {project.shortDescription}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <Box key={tag} sx={{ px: 0.8, py: 0.2, borderRadius: '4px', background: 'rgba(240,236,228,0.04)', border: '1px solid rgba(240,236,228,0.08)', fontSize: '0.65rem', color: '#5c5448', fontFamily: "'JetBrains Mono', monospace" }}>
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Box>

        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography sx={{ color: '#8c8272', fontSize: '0.9rem' }}>
              {isEn ? 'No projects in this category.' : 'Aucun projet dans cette catégorie.'}
            </Typography>
          </Box>
        )}
      </Box>
    </InnerPageLayout>
  );
};

export default ProjectsPage;
