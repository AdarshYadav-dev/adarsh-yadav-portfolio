import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  goodenough,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Real-time Systems",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Good Enough Energy",
    icon: goodenough,
    iconBg: "#1a2e1a",
    date: "Aug 2026 - Present",
    points: [
      "Developing real-time energy monitoring dashboards using React.js with live data visualization for Battery Energy Storage Systems (BESS).",
      "Building and maintaining MQTT-based communication pipelines using HiveMQ Cloud for reliable device-to-cloud data streaming.",
      "Developing Node.js and Python backend services with RESTful APIs for energy data ingestion, processing, and analytics.",
      "Designing and managing PostgreSQL databases for structured storage of energy system metrics and event logs.",
      "Building SLD (Single Line Diagram) visualizations and emulator interfaces for monitoring live system states.",
      "Implementing WebSocket-based real-time data streaming to ensure sub-second UI updates on monitoring dashboards.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Magebytes Pvt Ltd",
    icon: web,
    iconBg: "#383E56",
    date: "Sept 2025 - July 2026",
    points: [
      "Built and shipped production features for client-facing applications using React.js and Next.js, improving UI consistency across modules.",
      "Integrated RESTful APIs and optimized component rendering, reducing unnecessary re-renders and improving page load responsiveness.",
      "Implemented routing with the Next.js App Router, including dynamic and nested routes, to support scalable multi-page applications.",
      "Managed application state using React Hooks and the Context API, simplifying data flow across components.",
      "Partnered with backend engineers on API contracts, debugging, and issue resolution to keep releases on schedule."
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "First-Meridian Business Services Limited",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - May 2025",
    points: [
      "Designed, developed, and deployed RESTful APIs using Express.js, implementing full CRUD functionality for core services.",
      "Tested and validated APIs using Postman, catching and resolving edge-case bugs prior to deployment.",
      "Integrated third-party APIs to enable dynamic, real-time data handling within application workflows."
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
