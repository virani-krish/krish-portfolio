import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';

const getCurrentPage = () => {
  if (window.location.pathname === '/work') {
    return 'work';
  }

  if (window.location.pathname === '/contact') {
    return 'contact';
  }

  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    setCurrentPage(getCurrentPage());
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const navigateToAbout = () => {
    if (window.location.pathname !== '/') {
      navigateTo('/');
    }

    window.setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  return (
    <>
      <Navbar
        onLogoClick={() => navigateTo('/')}
        onWorksClick={() => navigateTo('/work')}
        onAboutClick={navigateToAbout}
        onContactClick={() => navigateTo('/contact')}
      />
      {currentPage === 'work' ? (
        <WorkPage />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : (
        <>
          <Hero />
          <Work onShowMore={() => navigateTo('/work')} />
          <About onContactClick={() => navigateTo('/contact')} />
        </>
      )}
      <Footer onGetInTouch={() => navigateTo('/contact')} />
    </>
  );
}

export default App;
