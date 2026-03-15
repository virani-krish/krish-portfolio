import jobPortalImg from '../assets/images/project-job-portal.png';
import movieBookingImg from '../assets/images/project-movie-booking.png';
import mernImg from '../assets/images/project-mern.png';
import restApiImg from '../assets/images/project-rest-api.png';

export const projects = [
  {
    slug: 'job-portal-website',
    title: 'Job Portal Website',
    image: jobPortalImg,
    summary: 'A job discovery platform that supports role search, application tracking, and recruiter workflows.',
    description:
      'This platform streamlines the job hunt with an intuitive search flow, profile management, and recruiter-friendly posting tools. The architecture is split into modular services to keep the experience responsive while supporting future feature growth.',
    role: 'Full-Stack Developer',
    timeline: '2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: [
      'Role-based authentication for candidates and recruiters',
      'Advanced job filtering by location, role, and experience',
      'Application status tracking dashboard for candidates',
      'Recruiter panel to create and manage job listings',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'movie-ticket-booking-system',
    title: 'Movie Ticket Booking System',
    image: movieBookingImg,
    summary: 'A real-time seat booking app with show schedules, secure checkout, and booking history.',
    description:
      'This project focuses on smooth booking flows under concurrency. It includes seat selection logic, show management, and transactional booking operations to reduce booking conflicts and improve reliability.',
    role: 'Backend-Focused Full-Stack Developer',
    timeline: '2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    features: [
      'Interactive seat map with occupied seat locking',
      'Showtime and theater management modules',
      'Secure payment integration for ticket checkout',
      'Booking history with downloadable e-ticket data',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'mern-portfolio-website',
    title: 'MERN Portfolio Website',
    image: mernImg,
    summary: 'A personal portfolio with dynamic project management and contact workflow.',
    description:
      'This portfolio was designed as both a personal brand site and a content-managed showcase. It includes maintainable component structure, API-backed data updates, and a focused UX optimized for project storytelling.',
    role: 'Frontend & API Developer',
    timeline: '2024',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion'],
    features: [
      'Responsive UI with animation-led section transitions',
      'Admin-ready structure for updating showcased projects',
      'Contact form workflow with backend validation',
      'Performance-conscious image and content rendering',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'rest-api-authentication-system',
    title: 'REST API Authentication System',
    image: restApiImg,
    summary: 'A secure authentication service with token lifecycle management and access control.',
    description:
      'This API system demonstrates production-style authentication patterns using short-lived access tokens and refresh token rotation. It is structured around reusable middleware and clear separation of concerns for maintainability.',
    role: 'Backend Developer',
    timeline: '2024',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
    features: [
      'Access and refresh token flow with rotation strategy',
      'Password hashing and credential validation middleware',
      'Protected route middleware with granular role checks',
      'Structured error handling and API response conventions',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);