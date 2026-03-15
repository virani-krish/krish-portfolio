import jobPortalImg from '../assets/images/project-job-portal.png';
import movieBookingImg from '../assets/images/project-movie-booking.png';
import mernImg from '../assets/images/project-mern.png';
import restApiImg from '../assets/images/project-rest-api.png';
// import policySync from '../assets/images/project-policy-sync.png';
import policySync from '../assets/images/image.png';

export const projects = [
  {
    slug: 'policy-tracker',
    title: 'Policy Tracker',
    image: policySync,
    summary: 'Policy Sync is a policy management platform that helps financial advisors and insurance agents manage client policies, track renewal dates, and automate reminders. The system centralizes policy data and reduces missed renewals through scheduled notifications and an organized dashboard.',
    description:
      'Policy Sync is a policy management platform designed for financial advisors and insurance agents to organize and track client policies efficiently. The system allows users to manage policy records, monitor renewal dates, and automate reminder notifications to ensure policies are renewed on time. It includes features such as policy CRUD operations, client management, renewal tracking, and automated email reminders using scheduled cron jobs. The platform improves operational efficiency by centralizing policy data and reducing the risk of missed renewals.',
    role: 'Full-Stack Developer',
    timeline: '2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'CRON', 'Nodemailer'],
    features: [
      'Client and policy management dashboard',
      'Policy renewal date tracking and alerts',
      'Automated email reminders using scheduled cron jobs',
      'Search and filter policies by client name, company, or renewal date',
      'Secure authentication for user access',
      'Centralized database for managing all policy information'
    ],
    githubUrl: 'https://github.com/virani-krish/policy-sync',
    liveUrl: 'https://policysync.onrender.com/',
  },
  // {
  //   slug: 'movie-ticket-booking-system',
  //   title: 'Movie Ticket Booking System',
  //   image: movieBookingImg,
  //   summary: 'A real-time seat booking app with show schedules, secure checkout, and booking history.',
  //   description:
  //     'This project focuses on smooth booking flows under concurrency. It includes seat selection logic, show management, and transactional booking operations to reduce booking conflicts and improve reliability.',
  //   role: 'Backend-Focused Full-Stack Developer',
  //   timeline: '2025',
  //   stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
  //   features: [
  //     'Interactive seat map with occupied seat locking',
  //     'Showtime and theater management modules',
  //     'Secure payment integration for ticket checkout',
  //     'Booking history with downloadable e-ticket data',
  //   ],
  //   githubUrl: 'https://github.com/',
  //   liveUrl: 'https://example.com',
  // },
  // {
  //   slug: 'mern-portfolio-website',
  //   title: 'MERN Portfolio Website',
  //   image: mernImg,
  //   summary: 'A personal portfolio with dynamic project management and contact workflow.',
  //   description:
  //     'This portfolio was designed as both a personal brand site and a content-managed showcase. It includes maintainable component structure, API-backed data updates, and a focused UX optimized for project storytelling.',
  //   role: 'Frontend & API Developer',
  //   timeline: '2024',
  //   stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion'],
  //   features: [
  //     'Responsive UI with animation-led section transitions',
  //     'Admin-ready structure for updating showcased projects',
  //     'Contact form workflow with backend validation',
  //     'Performance-conscious image and content rendering',
  //   ],
  //   githubUrl: 'https://github.com/',
  //   liveUrl: 'https://example.com',
  // },
  // {
  //   slug: 'rest-api-authentication-system',
  //   title: 'REST API Authentication System',
  //   image: restApiImg,
  //   summary: 'A secure authentication service with token lifecycle management and access control.',
  //   description:
  //     'This API system demonstrates production-style authentication patterns using short-lived access tokens and refresh token rotation. It is structured around reusable middleware and clear separation of concerns for maintainability.',
  //   role: 'Backend Developer',
  //   timeline: '2024',
  //   stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
  //   features: [
  //     'Access and refresh token flow with rotation strategy',
  //     'Password hashing and credential validation middleware',
  //     'Protected route middleware with granular role checks',
  //     'Structured error handling and API response conventions',
  //   ],
  //   githubUrl: 'https://github.com/',
  //   liveUrl: 'https://example.com',
  // },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);