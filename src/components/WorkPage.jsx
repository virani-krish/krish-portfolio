import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const WorkPage = () => {
  return (
    <main className="work-page">
      <section className="work-page-hero">
        <div className="container">
          <div className="divider work-page-divider"></div>
          <div className="work-page-header">
            <span className="section-label">work.</span>
            <p className="work-page-copy">
              A selected collection of backend-focused and full-stack projects built with
              scalable architecture, production-minded code, and clean interfaces.
            </p>
          </div>
          <div className="work-page-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <div className="project-image-wrapper work-page-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-info">
                    <h2 className="project-title">{project.title}</h2>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;