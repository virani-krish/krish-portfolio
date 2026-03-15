import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What backend technologies do you use?',
    answer:
      'I primarily work with Node.js, Express.js, and MongoDB for building scalable backend systems. I also have experience with PHP, MySQL, and RESTful API design patterns.',
  },
  {
    question: 'Do you build REST APIs?',
    answer:
      'Yes, building RESTful APIs is one of my core specializations. I design and develop well-documented, secure, and scalable APIs with proper authentication, rate limiting, and error handling.',
  },
  {
    question: 'Can you build scalable backend systems?',
    answer:
      'Absolutely. I focus on building systems that can handle growth — from database optimization and caching strategies to microservice architectures that distribute load efficiently.',
  },
  {
    question: 'Do you work with MERN stack?',
    answer:
      'Yes, I work with the full MERN stack (MongoDB, Express, React, Node.js). While my specialization is backend development, I can build complete full-stack applications.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="divider" style={{ marginBottom: '60px' }}></div>
        <span className="section-label">faq.</span>
        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
