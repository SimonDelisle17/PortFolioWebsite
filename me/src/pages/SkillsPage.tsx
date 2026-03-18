import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InnerPageLayout from '../components/InnerPageLayout';

const CORE_STACK = [
  { icon: '🦋', name: 'Flutter', context: { en: '6 production apps — iOS, Android, Desktop', fr: '6 apps en prod — iOS, Android, Desktop' } },
  { icon: '🐍', name: 'Python', context: { en: 'FastAPI, LangChain, async pipelines', fr: 'FastAPI, LangChain, pipelines async' } },
  { icon: '⚡', name: 'FastAPI', context: { en: 'Primary backend for 7+ microservices', fr: 'Backend principal de 7+ microservices' } },
  { icon: '📦', name: 'Node.js', context: { en: 'TypeScript, Express, Socket.IO, NestJS', fr: 'TypeScript, Express, Socket.IO, NestJS' } },
  { icon: '⚛️', name: 'React / Angular', context: { en: 'React 19 + Angular 13–20, both in prod', fr: 'React 19 + Angular 13–20, les deux en prod' } },
  { icon: '🤖', name: 'AI / LangChain', context: { en: 'GPT-4o, voice STT/TTS, SSE streaming', fr: 'GPT-4o, voix STT/TTS, streaming SSE' } },
  { icon: '☸️', name: 'Kubernetes', context: { en: 'GitOps with ArgoCD + Helm, OVH infra', fr: 'GitOps avec ArgoCD + Helm, infra OVH' } },
];

const ALSO_USED = [
  'Redis', 'PostgreSQL', 'MySQL', 'Elasticsearch', 'Docker', 'Celery', 'APScheduler',
  'Twilio', 'AWS Polly', 'Gladia STT', 'Google ML Kit', 'Zebra DataWedge', 'HERE Maps',
  'GraphQL', 'Socket.IO', 'HMAC', 'JWT', 'Argon2', 'MongoDB', 'SQLite', 'Firebase',
  'Azure', 'AWS S3', 'Prometheus', 'PM2', 'Strapi', 'Nginx', 'Tailwind CSS',
];

const EXPERIENCE = [
  {
    company: 'PA Super',
    role: { en: 'Main Software Engineer', fr: 'Ingénieur Logiciel Principal' },
    period: '2024 – Present',
    desc: {
      en: 'Joined as their first software engineer. Built the entire logistics ecosystem from scratch: 19 systems in production spanning mobile apps (drivers & warehouse), AI phone assistant, backend APIs, and Kubernetes infrastructure.',
      fr: "Rejoint comme premier ingénieur logiciel. Bâti tout l'écosystème logistique de zéro : 19 systèmes en production — apps mobiles (chauffeurs & entrepôt), assistant IA téléphonique, APIs backend et infrastructure Kubernetes.",
    },
    tech: ['Flutter', 'Python', 'FastAPI', 'React', 'Angular', 'LangChain', 'K8s', 'MySQL', 'Redis'],
  },
  {
    company: 'Blue Badger',
    role: { en: 'Full-Stack Web Developer', fr: 'Développeur Web Full-Stack' },
    period: '2021 – 2024',
    desc: {
      en: 'Built Shopify e-commerce experiences for major brands. Emphasis on performance, accessibility, and pixel-perfect frontend.',
      fr: 'Développé des expériences e-commerce Shopify pour de grandes marques. Focus sur la performance, l\'accessibilité et le frontend pixel-perfect.',
    },
    tech: ['React', 'Liquid', 'Node.js', 'Ruby', 'Shopify', 'CSS/Sass'],
  },
  {
    company: 'FetchVision',
    role: { en: 'Hybrid Mobile Developer', fr: 'Développeur Mobile Hybride' },
    period: '2020 – 2021',
    desc: {
      en: 'Cross-platform mobile apps with Flutter and backend integrations.',
      fr: 'Apps mobiles multiplateformes avec Flutter et intégrations backend.',
    },
    tech: ['Flutter', 'Dart', 'Node.js', 'MySQL'],
  },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const SkillsPage = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');

  return (
    <InnerPageLayout title={isEn ? 'Stack & Experience' : 'Stack & Expérience'}>
      <Box sx={{ maxWidth: '900px', mx: 'auto', px: { xs: 2, md: 3 }, py: { xs: 4, md: 5 } }}>

        {/* Page header */}
        <motion.div {...fade(0.05)}>
          <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: { xs: '2.2rem', md: '3rem' }, fontWeight: 700, color: '#f0ece4', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 0.5 }}>
            {isEn ? 'Stack & Experience' : 'Stack & Expérience'}
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#8c8272', mb: 4 }}>
            {isEn ? 'Tools I reach for first, and tools I\'ve used in production.' : 'Les outils que j\'utilise en premier, et ceux que j\'ai utilisés en production.'}
          </Typography>
        </motion.div>

        {/* Core Stack */}
        <motion.div {...fade(0.1)}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c8272', mb: 2 }}>
            {isEn ? 'Core Stack' : 'Stack principale'}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1.5, mb: 5 }}>
            {CORE_STACK.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.12 + i * 0.05 }}>
                <Box sx={{ p: 2.5, borderRadius: '14px', border: '1px solid rgba(240,236,228,0.07)', background: '#161412', transition: 'border-color 0.15s, transform 0.15s', '&:hover': { borderColor: 'rgba(245,200,66,0.2)', transform: 'translateY(-2px)' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1 }}>
                    <Box sx={{ fontSize: '1.3rem' }}>{item.icon}</Box>
                    <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#f0ece4' }}>{item.name}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.78rem', color: '#8c8272', lineHeight: 1.5 }}>
                    {isEn ? item.context.en : item.context.fr}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Also used */}
        <motion.div {...fade(0.25)}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c8272', mb: 2 }}>
            {isEn ? 'Also used in production' : 'Aussi utilisés en production'}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 5 }}>
            {ALSO_USED.map((tech) => (
              <Box key={tech} sx={{ px: 1.2, py: 0.4, borderRadius: '6px', border: '1px solid rgba(240,236,228,0.1)', fontSize: '0.75rem', color: '#8c8272', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.15s', '&:hover': { borderColor: 'rgba(245,200,66,0.3)', color: '#f0ece4' } }}>
                {tech}
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Experience */}
        <motion.div {...fade(0.3)}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c8272', mb: 2.5 }}>
            {isEn ? 'Work Experience' : 'Expérience Professionnelle'}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.35 + i * 0.08 }}>
                <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: '16px', border: '1px solid rgba(240,236,228,0.07)', background: '#161412', position: 'relative', overflow: 'hidden' }}>
                  {/* Left accent */}
                  <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: i === 0 ? 'rgba(245,200,66,0.6)' : 'rgba(240,236,228,0.12)', borderRadius: '0 0 0 16px' }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
                    <Box>
                      <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, color: '#f0ece4', mb: 0.3 }}>{exp.company}</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#8c8272' }}>{isEn ? exp.role.en : exp.role.fr}</Typography>
                    </Box>
                    <Box sx={{ px: 1.2, py: 0.4, borderRadius: '20px', background: i === 0 ? 'rgba(245,200,66,0.1)' : 'rgba(240,236,228,0.05)', border: '1px solid', borderColor: i === 0 ? 'rgba(245,200,66,0.25)' : 'rgba(240,236,228,0.1)', fontSize: '0.72rem', color: i === 0 ? '#f5c842' : '#8c8272', fontFamily: "'JetBrains Mono', monospace" }}>
                      {exp.period}
                    </Box>
                  </Box>

                  <Typography sx={{ fontSize: '0.83rem', color: '#8c8272', lineHeight: 1.7, mb: 2 }}>
                    {isEn ? exp.desc.en : exp.desc.fr}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                    {exp.tech.map((t) => (
                      <Box key={t} sx={{ px: 0.9, py: 0.25, borderRadius: '4px', background: 'rgba(240,236,228,0.04)', border: '1px solid rgba(240,236,228,0.08)', fontSize: '0.68rem', color: '#5c5448', fontFamily: "'JetBrains Mono', monospace" }}>
                        {t}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Languages */}
        <motion.div {...fade(0.5)}>
          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(240,236,228,0.07)', display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Box>
              <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c8272', mb: 1 }}>
                {isEn ? 'Spoken Languages' : 'Langues parlées'}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[
                  { lang: isEn ? 'French' : 'Français', level: isEn ? 'Native' : 'Natif' },
                  { lang: isEn ? 'English' : 'Anglais', level: isEn ? 'Fluent' : 'Courant' },
                ].map((l) => (
                  <Box key={l.lang} sx={{ px: 1.5, py: 0.8, borderRadius: '10px', border: '1px solid rgba(240,236,228,0.1)', background: '#161412' }}>
                    <Typography sx={{ fontSize: '0.82rem', color: '#f0ece4', fontFamily: "'DM Sans', sans-serif" }}>{l.lang}</Typography>
                    <Typography sx={{ fontSize: '0.68rem', color: '#8c8272' }}>{l.level}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>

      </Box>
    </InnerPageLayout>
  );
};

export default SkillsPage;
