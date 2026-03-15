import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import NotFoundPage from './components/NotFoundPage';
import { getProjectBySlug } from './data/projects';

const getCurrentPage = () => {
  const projectPathMatch = window.location.pathname.match(/^\/work\/([^/]+)$/);

  if (projectPathMatch) {
    return {
      page: 'project',
      slug: decodeURIComponent(projectPathMatch[1]),
    };
  }

  if (window.location.pathname === '/work') {
    return { page: 'work' };
  }

  if (window.location.pathname === '/contact') {
    return { page: 'contact' };
  }

  if (window.location.pathname === '/') {
    return { page: 'home' };
  }

  return { page: 'not-found' };
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

  const navigateToProject = (slug) => {
    navigateTo(`/work/${encodeURIComponent(slug)}`);
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

  const activeProject =
    currentPage.page === 'project' ? getProjectBySlug(currentPage.slug) : null;

  return (
    <>
      <Navbar
        onLogoClick={() => navigateTo('/')}
        onWorksClick={() => navigateTo('/work')}
        onAboutClick={navigateToAbout}
        onContactClick={() => navigateTo('/contact')}
      />
      {currentPage.page === 'work' ? (
        <WorkPage onProjectClick={navigateToProject} />
      ) : currentPage.page === 'contact' ? (
        <ContactPage />
      ) : currentPage.page === 'project' && activeProject ? (
        <ProjectDetailsPage
          project={activeProject}
          onBackToWork={() => navigateTo('/work')}
        />
      ) : currentPage.page === 'not-found' || currentPage.page === 'project' ? (
        <NotFoundPage
          onGoHome={() => navigateTo('/')}
          onGoWork={() => navigateTo('/work')}
        />
      ) : (
        <>
          <Hero />
          <Work
            onShowMore={() => navigateTo('/work')}
            onProjectClick={navigateToProject}
          />
          <About onContactClick={() => navigateTo('/contact')} />
        </>
      )}
      <Footer onGetInTouch={() => navigateTo('/contact')} />
    </>
  );
}

export default App;
