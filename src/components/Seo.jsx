import { useEffect } from 'react';
import { projects } from '../data/projects';

const SITE_URL = 'https://krishvirani.me';
const DEFAULT_IMAGE_URL = `${SITE_URL}/image.png`;
const SITE_NAME = 'Krish Virani';
const PERSON_NAME = 'Krish Virani';

const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();

const upsertMetaTag = ({ name, property, content }) => {
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let metaTag = document.head.querySelector(selector);

  if (!metaTag) {
    metaTag = document.createElement('meta');

    if (name) {
      metaTag.setAttribute('name', name);
    }

    if (property) {
      metaTag.setAttribute('property', property);
    }

    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute('content', content);
};

const upsertCanonicalLink = (href) => {
  let canonicalLink = document.head.querySelector('link[rel="canonical"]');

  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute('href', href);
};

const upsertStructuredData = (content) => {
  let scriptTag = document.head.querySelector('#seo-structured-data');

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.setAttribute('id', 'seo-structured-data');
    scriptTag.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(content);
};

const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSON_NAME,
  url: SITE_URL,
  image: DEFAULT_IMAGE_URL,
  email: 'mailto:hello@krishvirani.me',
  jobTitle: 'Backend Developer',
  sameAs: [
    'https://github.com/virani-krish/',
    'https://www.linkedin.com/in/krish-virani-666811313/',
    'https://www.instagram.com/_krish_virani_/',
  ],
  knowsAbout: [
    'Backend development',
    'API design',
    'Node.js',
    'Express',
    'MongoDB',
    'System architecture',
  ],
});

const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${SITE_NAME} Portfolio`,
  url: SITE_URL,
  inLanguage: 'en',
});

const getCollectionSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Selected Work',
  url: absoluteUrl('/work'),
  description:
    'A selected collection of backend-focused and full-stack projects built with scalable architecture and production-minded code.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/work/${encodeURIComponent(project.slug)}`),
    })),
  },
});

const getContactPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Krish Virani',
  url: absoluteUrl('/contact'),
  description:
    'Get in touch with Krish Virani for backend development, API architecture, and full-stack collaboration.',
  mainEntity: {
    '@type': 'Person',
    name: PERSON_NAME,
    email: 'mailto:hello@krishvirani.me',
    url: SITE_URL,
  },
});

const getProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: project.title,
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web',
  description: project.summary,
  url: project.liveUrl || absoluteUrl(`/work/${encodeURIComponent(project.slug)}`),
  mainEntityOfPage: absoluteUrl(`/work/${encodeURIComponent(project.slug)}`),
  creator: {
    '@type': 'Person',
    name: PERSON_NAME,
    url: SITE_URL,
  },
  codeRepository: project.githubUrl,
  keywords: project.stack.join(', '),
  featureList: project.features,
  softwareRequirements: project.stack.join(', '),
});

const getSeoConfig = (currentPage, activeProject) => {
  if (currentPage.page === 'work') {
    return {
      title: 'Work | Krish Virani',
      description:
        'Explore selected backend and full-stack projects by Krish Virani, focused on scalable APIs, secure systems, and production-ready builds.',
      path: '/work',
      robots: 'index, follow',
      type: 'website',
      structuredData: [getWebsiteSchema(), getCollectionSchema(), getPersonSchema()],
    };
  }

  if (currentPage.page === 'contact') {
    return {
      title: 'Contact | Krish Virani',
      description:
        'Contact Krish Virani for backend development, API engineering, and full-stack product collaboration.',
      path: '/contact',
      robots: 'index, follow',
      type: 'website',
      structuredData: [getWebsiteSchema(), getContactPageSchema(), getPersonSchema()],
    };
  }

  if (currentPage.page === 'project' && activeProject) {
    return {
      title: `${activeProject.title} | Krish Virani`,
      description: activeProject.summary,
      path: `/work/${encodeURIComponent(activeProject.slug)}`,
      robots: 'index, follow',
      type: 'article',
      structuredData: [getWebsiteSchema(), getProjectSchema(activeProject), getPersonSchema()],
    };
  }

  if (currentPage.page === 'not-found' || currentPage.page === 'project') {
    return {
      title: 'Page Not Found | Krish Virani',
      description: 'The page you are looking for could not be found on the Krish Virani portfolio website.',
      path: window.location.pathname || '/',
      robots: 'noindex, nofollow',
      type: 'website',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Page Not Found',
          url: absoluteUrl(window.location.pathname || '/'),
          description: 'The requested page could not be found.',
        },
      ],
    };
  }

  return {
    title: 'Krish Virani | Backend Developer Portfolio',
    description:
      'Krish Virani is a backend developer specializing in scalable APIs, secure server-side architecture, and reliable systems for modern web products.',
    path: '/',
    robots: 'index, follow',
    type: 'website',
    structuredData: [getWebsiteSchema(), getPersonSchema()],
  };
};

const Seo = ({ currentPage, activeProject }) => {
  useEffect(() => {
    const seo = getSeoConfig(currentPage, activeProject);
    const pageUrl = absoluteUrl(seo.path);

    document.title = seo.title;
    document.documentElement.lang = 'en';

    upsertMetaTag({ name: 'description', content: seo.description });
    upsertMetaTag({ name: 'author', content: PERSON_NAME });
    upsertMetaTag({ name: 'robots', content: seo.robots });
    upsertMetaTag({ property: 'og:title', content: seo.title });
    upsertMetaTag({ property: 'og:description', content: seo.description });
    upsertMetaTag({ property: 'og:type', content: seo.type });
    upsertMetaTag({ property: 'og:url', content: pageUrl });
    upsertMetaTag({ property: 'og:image', content: DEFAULT_IMAGE_URL });
    upsertMetaTag({ property: 'og:site_name', content: `${SITE_NAME} Portfolio` });
    upsertMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMetaTag({ name: 'twitter:title', content: seo.title });
    upsertMetaTag({ name: 'twitter:description', content: seo.description });
    upsertMetaTag({ name: 'twitter:image', content: DEFAULT_IMAGE_URL });

    upsertCanonicalLink(pageUrl);
    upsertStructuredData(seo.structuredData);
  }, [activeProject, currentPage]);

  return null;
};

export default Seo;