import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="divider" style={{ marginBottom: '60px' }}></div>
        <span className="section-label">shoot a request.</span>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="contact-left">
            <h3>Got a project<br />in mind? Let's<br />talk.</h3>
            <a href="mailto:knvirani330@gmail.com" className="contact-email">
              knvirani330@gmail.com
            </a>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="send-btn">
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
