import { motion } from 'framer-motion';

const techs = [
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'JavaScript',
  'React',
  'PHP',
  'REST API',
  'JWT Authentication',
  'Git & GitHub',
];

const TechStack = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="divider" style={{ marginBottom: '60px' }}></div>
        <span className="section-label">tech stack.</span>
        <motion.div
          className="tech-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {techs.map((tech) => (
            <span className="tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
