const Footer = ({ onGetInTouch }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-links">
          <a href="https://www.linkedin.com/in/krish-virani-666811313/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/virani-krish/" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.instagram.com/_krish_virani_/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <h2 className="footer-cta">
          Curious about what we can create together?
          <br />
          Let's bring something extraordinary to life!
        </h2>

        <div className="footer-actions">
          <button type="button" className="footer-touch-btn" onClick={onGetInTouch}>Get in Touch</button>
          {/* <div className="footer-availability">
            <span className="footer-availability-dot"></span>
            Available For Work
          </div> */}
        </div>

        <div className="footer-content">
          <div className="footer-left">
            <p>+91 82643 92251</p>
            <p>knvirani330@gmail.com</p>
          </div>
          <div className="footer-center"></div>
          <div className="footer-right">
            All rights reserved © 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
