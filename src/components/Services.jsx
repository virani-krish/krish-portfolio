import { motion } from 'framer-motion';

const services = [
  'API DEVELOPMENT',
  'DATABASE DESIGN',
  'NODE.JS BACKEND',
  'MICROSERVICES',
  'SYSTEM ARCHITECTURE',
  'BACKEND OPTIMIZATION',
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="divider" style={{ marginBottom: '60px' }}></div>
        <span className="section-label">services.</span>
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              className="service-item"
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
