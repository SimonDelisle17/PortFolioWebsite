import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InnerPageLayout from '../components/InnerPageLayout';
import mePhoto from '../assets/ProfessionalMe.png';

const MILESTONES_EN = [
  { year: '2021', event: 'First developer role - Shopify e-commerce at Blue Badger' },
  { year: '2021', event: 'Built cross-platform mobile apps at FetchVision with Flutter' },
  { year: '2024', event: 'Joined PA Super as the main software engineer - built everything from scratch' },
  { year: '2024', event: 'Started shipping a high volume of personal and production projects outside work hours' },
  { year: '2025', event: 'Deployed PaSUPER AI in production - real phone calls handled by an LLM' },
  { year: '2026', event: 'Still shipping. Still learning. Coffee intake: concerning.' },
];

const MILESTONES_FR = [
  { year: '2021', event: 'Premier poste dev - e-commerce Shopify chez Blue Badger' },
  { year: '2021', event: 'Apps mobiles multiplateformes chez FetchVision avec Flutter' },
  { year: '2024', event: 'Rejoint PA Super comme ingenieur principal - tout construit from scratch' },
  { year: '2024', event: 'Debut d une grosse cadence de projets personnels et de systemes en production en dehors du travail' },
  { year: '2025', event: 'PaSUPER IA deploye en production - vrais appels telephoniques geres par un LLM' },
  { year: '2026', event: 'Toujours en prod. Toujours en train d apprendre. Consommation de cafe : alarmante.' },
];

const STATS = [
  { value: '19', label: { en: 'Projects, last 2 years', fr: 'Projets en 2 ans' } },
  { value: '5+', label: { en: 'Years in production', fr: 'Ans en production' } },
  { value: '1M+', label: { en: 'Lines of code', fr: 'Lignes de code' } },
  { value: '2', label: { en: 'Languages spoken', fr: 'Langues parlees' } },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const AboutPage = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en' || i18n.language.startsWith('en');
  const milestones = isEn ? MILESTONES_EN : MILESTONES_FR;

  return (
    <InnerPageLayout title={isEn ? 'About' : 'A propos'}>
      <Box sx={{ maxWidth: '860px', mx: 'auto', px: { xs: 2, md: 3 }, py: { xs: 4, md: 5 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 5 },
            alignItems: { md: 'flex-start' },
            mb: { xs: 5, md: 6 },
          }}
        >
          <motion.div {...fade(0.05)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0 }}>
              <Box
                sx={{
                  width: { xs: 120, md: 180 },
                  height: { xs: 120, md: 180 },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(245,200,66,0.15)',
                }}
              >
                <Box
                  component="img"
                  src={mePhoto}
                  alt="Simon Delisle"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Box>
          </motion.div>

          <Box>
            <motion.div {...fade(0.1)}>
              <Typography
                sx={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#f0ece4',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  mb: 1,
                }}
              >
                Simon Delisle
              </Typography>
            </motion.div>
            <motion.div {...fade(0.15)}>
              <Typography sx={{ fontSize: '0.85rem', color: '#8c8272', mb: 2.5, fontFamily: "'JetBrains Mono', monospace" }}>
                {isEn ? 'Full-Stack & AI Engineer - Quebec, Canada' : 'Ingenieur Full-Stack & IA - Quebec, Canada'}
              </Typography>
            </motion.div>
            <motion.div {...fade(0.2)}>
              <Typography sx={{ fontSize: '1.05rem', color: '#c8bfaf', lineHeight: 1.8, mb: 2 }}>
                {isEn
                  ? 'I build software that runs in the real world. Not demos, not prototypes - production systems used by real people, every day. I joined PA Super as their first software engineer and built a complete logistics ecosystem from zero: a delivery app for drivers, a warehouse app for workers, an AI phone assistant, and the backend that holds it all together.'
                  : "Je construis des logiciels qui tournent dans le vrai monde. Pas des demos, pas des prototypes - des systemes en production utilises par de vraies personnes, chaque jour. J ai rejoint PA Super comme premier ingenieur logiciel et j ai bati tout l ecosysteme logistique de zero : app de livraison pour les chauffeurs, app d entrepot, assistant IA telephonique, et le backend qui relie tout ca."}
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#c8bfaf', lineHeight: 1.8, mb: 2 }}>
                {isEn
                  ? 'Before that, I spent three years building Shopify stores for major brands at Blue Badger - which taught me that good UI is harder than it looks, and that performance matters more than anyone admits until the metrics go red.'
                  : "Avant ca, j ai passe trois ans a construire des boutiques Shopify pour de grandes marques chez Blue Badger - ce qui m a appris que la bonne UI est plus difficile qu elle en a l air, et que la performance compte plus que quiconque ne l admet jusqu a ce que les metriques virent au rouge."}
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#c8bfaf', lineHeight: 1.8 }}>
                {isEn
                  ? 'Outside work, I play golf badly and think about software constantly. "Claude" is my Catholic name - a Quebec tradition. The fact that it is also the name of the AI I use every day is a coincidence I have stopped trying to explain at dinner.'
                  : 'En dehors du travail, je joue mal au golf et je pense constamment a des logiciels. "Claude" est mon nom catholique - une tradition bien quebecoise. Le fait que ce soit aussi le nom de l IA que j utilise tous les jours est une coincidence que j ai arrete d expliquer a table.'}
              </Typography>
            </motion.div>
          </Box>
        </Box>

        <motion.div {...fade(0.25)}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1.5,
              mb: 6,
              p: 2.5,
              borderRadius: '16px',
              border: '1px solid rgba(240,236,228,0.07)',
              background: '#161412',
            }}
          >
            {STATS.map((s) => (
              <Box key={`${s.value}-${s.label.en}`} sx={{ textAlign: 'center', py: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: { xs: '1.6rem', md: '2.2rem' },
                    fontWeight: 700,
                    color: '#f5c842',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#8c8272', fontFamily: "'DM Sans', sans-serif" }}>
                  {isEn ? s.label.en : s.label.fr}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>

        <motion.div {...fade(0.3)}>
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#8c8272',
              mb: 2.5,
            }}
          >
            {isEn ? 'Key Milestones' : 'Jalons'}
          </Typography>

          <Box sx={{ position: 'relative', pl: 3 }}>
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 8,
                bottom: 8,
                width: '1px',
                background: 'linear-gradient(to bottom, rgba(245,200,66,0.4) 0%, rgba(245,200,66,0.05) 100%)',
              }}
            />

            {milestones.map((m, i) => (
              <motion.div
                key={`${m.year}-${m.event}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.35 + i * 0.07 }}
              >
                <Box sx={{ display: 'flex', gap: 2.5, mb: 2.5, position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: -14,
                      top: 4,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i === milestones.length - 1 ? '#f5c842' : 'rgba(245,200,66,0.4)',
                      border: '1px solid rgba(245,200,66,0.3)',
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem',
                        color: '#f5c842',
                        mb: 0.3,
                        opacity: 0.8,
                      }}
                    >
                      {m.year}
                    </Typography>
                    <Typography sx={{ fontSize: '0.88rem', color: '#c8bfaf', lineHeight: 1.6 }}>
                      {m.event}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </InnerPageLayout>
  );
};

export default AboutPage;
