import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ABOUT ME</h2>
          <div className="title-divider"></div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="about-subtitle">Hi There! I'm Simon Delisle</h3>
              <p className="about-description">
                <strong>Enterprise Software Architect</strong> with proven expertise in building large-scale,
                mission-critical systems. I have delivered a <strong>complete logistics ecosystem</strong> serving
                multiple business units with <strong>real-time operations</strong>, <strong>AI integration</strong>,
                and <strong>mobile-first solutions</strong>.
              </p>
              <p className="about-description">
                With over <strong>500,000+ lines of production code</strong> across 16 enterprise systems,
                I've demonstrated mastery across the entire technology stack from <strong>Flutter mobile
                applications</strong> to <strong>enterprise ERP integrations</strong>.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>500,000+</h4>
                  <p>Lines of Code</p>
                </div>
                <div className="stat-item">
                  <h4>16+</h4>
                  <p>Production Systems</p>
                </div>
                <div className="stat-item">
                  <h4>8+</h4>
                  <p>Languages Mastered</p>
                </div>
                <div className="stat-item">
                  <h4>20+</h4>
                  <p>Frameworks Deployed</p>
                </div>
              </div>

              <div className="about-highlights">
                <h4>Core Competencies:</h4>
                <ul>
                  <li>🏭 <strong>Enterprise Architecture</strong> - Microservices, Event-Driven Systems, API Design</li>
                  <li>📱 <strong>Mobile Development</strong> - Cross-platform Flutter with native hardware integration</li>
                  <li>🤖 <strong>AI Integration</strong> - Voice recognition, NLP, automated workflows</li>
                  <li>🌐 <strong>Full-Stack Web Development</strong> - React, Angular, Node.js, Python FastAPI</li>
                  <li>☸️ <strong>DevOps & Infrastructure</strong> - Kubernetes, Docker, ArgoCD, CI/CD Automation</li>
                  <li>🔐 <strong>Security Architecture</strong> - JWE encryption, multi-layer authentication</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
