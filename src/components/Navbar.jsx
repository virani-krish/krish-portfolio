import { useState } from 'react';

const Navbar = ({ onLogoClick, onWorksClick, onAboutClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = (event) => {
    if (!onLogoClick) {
      return;
    }

    event.preventDefault();
    onLogoClick();
    setMenuOpen(false);
  };

  const handleNavClick = (event, callback) => {
    if (!callback) {
      return;
    }

    event.preventDefault();
    callback();
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="container">
        <a href="/" className="navbar-logo" onClick={handleLogoClick}>KRISH</a>
        <div className="navbar-right">
          <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <a href="/work" onClick={(event) => handleNavClick(event, onWorksClick)}>Works</a>
            <a href="/#about" onClick={(event) => handleNavClick(event, onAboutClick)}>About</a>
            <a href="/contact" onClick={(event) => handleNavClick(event, onContactClick)}>Contact</a>
          </div>
          <button
            type="button"
            className="navbar-dot"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
