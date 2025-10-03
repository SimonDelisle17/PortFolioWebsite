import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Super API Ecosystem',
      category: 'backend',
      tags: ['FastAPI', 'Python', 'MySQL', 'Redis', 'Docker'],
      description: 'Enterprise-Grade Logistics & Delivery Management Platform with 300,000+ lines of code',
      icon: '🚚',
      impact: 'Complete logistics ecosystem serving multiple business units'
    },
    {
      id: 2,
      title: 'SuperApp v2.0',
      category: 'mobile',
      tags: ['Flutter', 'Dart', 'HERE Maps', 'Socket.IO'],
      description: 'Dual-Mode Mobile Platform for Delivery & Warehouse Management',
      icon: '📱',
      impact: 'Cross-platform enterprise mobile application'
    },
    {
      id: 3,
      title: 'AI Phone Assistant',
      category: 'ai',
      tags: ['OpenAI', 'Azure', 'Deepgram', 'Twilio', 'FastAPI'],
      description: 'Advanced Conversational AI with Multi-Language Support',
      icon: '🤖',
      impact: '24/7 intelligent customer support system'
    },
    {
      id: 4,
      title: 'SuperParser API',
      category: 'backend',
      tags: ['FastAPI', 'Pandas', 'SQLAlchemy', 'HMAC'],
      description: 'Mission-Critical Data Processing & Integration Engine',
      icon: '⚙️',
      impact: '99.9% uptime processing thousands of records'
    },
    {
      id: 5,
      title: 'APDQ Management System',
      category: 'fullstack',
      tags: ['FastAPI', 'Flutter', 'React', 'TypeScript'],
      description: 'Complete Towing Management Ecosystem',
      icon: '🚛',
      impact: 'Multi-platform business management solution'
    },
    {
      id: 6,
      title: 'Kubernetes DevOps',
      category: 'devops',
      tags: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker'],
      description: 'Enterprise Container Orchestration Platform',
      icon: '☸️',
      impact: 'Reduced deployment time by 80%'
    },
    {
      id: 7,
      title: 'SuperDispatch Dashboard',
      category: 'frontend',
      tags: ['React', 'Material-UI', 'Socket.IO'],
      description: 'Real-time Operations Dashboard',
      icon: '🎛️',
      impact: 'Real-time driver tracking and analytics'
    },
    {
      id: 8,
      title: 'SuperTelemetry',
      category: 'fullstack',
      tags: ['Node.js', 'Socket.IO', 'Redis', 'Leaflet'],
      description: 'GPS Tracking & Analytics Platform',
      icon: '📡',
      impact: 'Real-time fleet monitoring system'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">PORTFOLIO</h2>
          <div className="title-divider"></div>

          <div className="portfolio-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <p className="project-impact">{project.impact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
