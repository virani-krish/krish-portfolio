import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about-portrait.png';
import aboutImg from '../assets/me.png';

const About = ({ onContactClick }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="divider" style={{ marginBottom: '60px' }}></div>
        <div className="about-header">
          <h2 className="section-label">about.</h2>
          <button type="button" className="show-more-btn" onClick={onContactClick}>Contact Us</button>
        </div>

        <motion.p
          className="about-text-large"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          I collaborate with businesses of all sizes, building scalable backend systems
          with modern technologies. My API and architecture work is focused on speed,
          reliability, and long-term product growth.
        </motion.p>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src={aboutImg}
              alt="Krish Virani working portrait"
              className="about-portrait"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            I'm dedicated to crafting robust, high-performance services that align with
            business goals and real user scale. From data modeling to deployment,
            I design backend foundations that stay maintainable as products evolve.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
