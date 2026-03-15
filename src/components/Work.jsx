import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const Work = ({ onShowMore, onProjectClick }) => {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="divider" style={{ marginBottom: '60px' }}></div>
        <div className="work-header">
          <span className="section-label">work.</span>
          <button type="button" className="show-more-btn" onClick={onShowMore}>Show More</button>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <button
                type="button"
                className="project-image-wrapper project-card-button"
                onClick={() => onProjectClick?.(project.slug)}
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
