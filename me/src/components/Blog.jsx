import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Enterprise-Scale Microservices with FastAPI',
      date: 'January 2025',
      category: 'Backend',
      excerpt: 'Lessons learned from building a 300,000+ line logistics platform with Python FastAPI, including architecture decisions and performance optimizations.',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Cross-Platform Mobile Development with Flutter',
      date: 'December 2024',
      category: 'Mobile',
      excerpt: 'Deep dive into building production-ready Flutter applications with native hardware integration for delivery and warehouse management.',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'AI-Powered Voice Assistants: Architecture & Implementation',
      date: 'November 2024',
      category: 'AI/ML',
      excerpt: 'Complete guide to building multi-language phone assistants using OpenAI, Azure Cognitive Services, and Deepgram for real-time voice processing.',
      readTime: '12 min read'
    },
    {
      id: 4,
      title: 'Kubernetes GitOps with ArgoCD',
      date: 'October 2024',
      category: 'DevOps',
      excerpt: 'How we reduced deployment time by 80% using Kubernetes, Helm charts, and ArgoCD for automated application deployments.',
      readTime: '7 min read'
    }
  ];

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">BLOG & INSIGHTS</h2>
          <div className="title-divider"></div>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="blog-category">{post.category}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <a href="#" className="blog-link">Read More →</a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
