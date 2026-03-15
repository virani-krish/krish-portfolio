import { useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/me-color.png';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = 'knvirani330@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="hero">
      <div className="container">
        {/* Top area: Name + Profile Image */}
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="hero-title">
            KRISH<br />VIRANI
          </h1>
          <div className="hero-profile-wrapper">
            <img src={profileImg} alt="Krish Virani" className="hero-profile" />
          </div>
        </motion.div>

        {/* Bottom row: Email + Intro (pushed to bottom of viewport) */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <button type="button" className="hero-email" onClick={handleCopyEmail} aria-label="Copy email address">
            <svg className="hero-email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <rect x="4" y="4" width="11" height="11" rx="2" />
            </svg>
            <span>{email}</span>
            {copied ? <span className="hero-email-status">Copied</span> : null}
          </button>
          <p className="hero-intro">
            Hello, I'm Krish Virani, a backend developer specializing in scalable API design,
            secure server-side architecture, and reliable systems for modern web products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
