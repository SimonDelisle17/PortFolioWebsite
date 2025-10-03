import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaReact, FaAngular, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiFlutter, SiKubernetes, SiFastapi, SiRedis, SiMysql, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <FaPython />,
      skills: [
        { name: 'Python FastAPI', level: 95, projects: 'Super API, SuperParser, SuperCron' },
        { name: 'Node.js/Express', level: 90, projects: 'SuperTelemetry, SuperDispatch' },
        { name: 'Java Spring Boot', level: 80, projects: 'Epicor-WS' },
        { name: 'REST APIs', level: 95, projects: 'All Projects' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <SiFlutter />,
      skills: [
        { name: 'Flutter/Dart', level: 95, projects: 'SuperApp v2, APDQ' },
        { name: 'HERE Maps SDK', level: 90, projects: 'SuperApp, APDQ' },
        { name: 'Native Integration', level: 85, projects: 'Camera, GPS, Barcode' },
        { name: 'State Management', level: 90, projects: 'Provider, BLoC' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'React/TypeScript', level: 90, projects: 'SuperDispatch, APDQ Portal' },
        { name: 'Angular', level: 85, projects: 'WhoBiggest, SuperTelemetry' },
        { name: 'Material-UI', level: 85, projects: 'SuperDispatch, APDQ' },
        { name: 'Responsive Design', level: 90, projects: 'All Frontend' }
      ]
    },
    {
      title: 'Database & DevOps',
      icon: <FaDocker />,
      skills: [
        { name: 'MySQL/SQLAlchemy', level: 95, projects: 'All Backend Projects' },
        { name: 'Redis', level: 85, projects: 'Super API, SuperTelemetry' },
        { name: 'Docker/Kubernetes', level: 90, projects: 'gamcar-argo-cd' },
        { name: 'CI/CD Pipelines', level: 85, projects: 'All Production' }
      ]
    },
    {
      title: 'AI & Integration',
      icon: <FaAws />,
      skills: [
        { name: 'OpenAI GPT', level: 90, projects: 'AI Phone Assistant' },
        { name: 'Azure Services', level: 85, projects: 'Voice Recognition' },
        { name: 'WebSocket/Socket.IO', level: 95, projects: '6 Real-time Projects' },
        { name: 'Cloud Services', level: 90, projects: 'AWS, Azure, GCP' }
      ]
    },
    {
      title: 'Security & Architecture',
      icon: <SiKubernetes />,
      skills: [
        { name: 'JWT/JWE Auth', level: 95, projects: 'Super API, SuperApp' },
        { name: 'Microservices', level: 90, projects: 'Super API Ecosystem' },
        { name: 'Event-Driven', level: 85, projects: 'Real-time Systems' },
        { name: 'API Security', level: 95, projects: 'All Projects' }
      ]
    }
  ];

  return (
    <section id="resume" className="skills" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">TECHNICAL EXPERTISE</h2>
          <div className="title-divider"></div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: (index * 0.1) + (skillIndex * 0.1), duration: 1 }}
                        />
                      </div>
                      <p className="skill-projects">{skill.projects}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
