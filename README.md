# Adarsh Yadav — Developer Portfolio

A personal portfolio website built to showcase my professional experience, technical skills, and development projects. Built with React.js, Three.js, and Tailwind CSS — featuring interactive 3D elements, smooth animations, and a clean responsive layout.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.149-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 👨‍💻 About Me

I'm **Adarsh Yadav**, a Full Stack Developer currently working at **Good Enough Energy**, where I build real-time energy monitoring dashboards, MQTT-based IoT communication pipelines, and BESS (Battery Energy Storage System) visualization tools.

My core stack includes **React.js, Node.js, Python, PostgreSQL**, and real-time technologies like **MQTT/HiveMQ Cloud** and **WebSockets**.

- 🔗 GitHub: [github.com/AdarshYadav-dev](https://github.com/AdarshYadav-dev)
- 💼 LinkedIn: [linkedin.com/in/adarsh-yadav-dev](https://www.linkedin.com/in/adarsh-yadav-dev/)
- 📧 Email: adarsh98215@gmail.com

---

## 🧩 Portfolio Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with a 3D desktop PC model rendered in Three.js |
| **About** | Personal overview, professional summary, and service cards with hover tilt effect |
| **Experience** | Vertical timeline of my professional work history |
| **Tech Stack** | 3D rotating skill balls for each technology I work with |
| **Projects** | Project cards with tilt effect, tech tags, and GitHub links |
| **Contact** | Direct contact options — Email, Phone, WhatsApp, GitHub, LinkedIn — alongside a 3D Earth model |

---

## ⚙️ Tech Stack

This portfolio is built entirely with the following technologies:

**Frontend**
- [React.js 18](https://reactjs.org/) — UI framework
- [Vite 4](https://vitejs.dev/) — Build tool and dev server
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Page animations and transitions
- [React Router DOM](https://reactrouter.com/) — Client-side routing

**3D / Graphics**
- [Three.js](https://threejs.org/) — 3D rendering engine
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) — Helpers for React Three Fiber
- [Maath](https://github.com/pmndrs/maath) — Math utilities for 3D scenes

**UI Components**
- [React Tilt](https://www.npmjs.com/package/react-tilt) — Tilt hover effect on cards
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component) — Experience timeline

---

## ✨ Features

- **3D Hero Section** — Interactive desktop PC 3D model rendered with Three.js; rotates on orbit controls
- **Animated Sections** — All sections animate into view using Framer Motion's `whileInView` with stagger effects
- **3D Tech Balls** — Each technology in the skills section is rendered as an interactive 3D ball with the tech icon mapped as a texture
- **Tilt Effect Cards** — About and Projects cards respond to mouse movement with a smooth 3D tilt
- **Vertical Timeline** — Work experience displayed as a clean animated vertical timeline
- **3D Starfield Background** — Procedurally generated star particles rendered with Three.js
- **3D Earth Model** — Interactive globe rendered in the Contact section
- **Direct Contact Links** — Email, Phone, WhatsApp, GitHub, and LinkedIn — no form, no backend required
- **Smooth Scroll Navigation** — Navbar links scroll smoothly to each section anchor
- **Correct Scroll Restoration** — Page always loads from the top, regardless of previous scroll position
- **Fully Responsive** — Works on mobile, tablet, and desktop screens

---

## 🗂️ Project Structure

```
project_3D_developer_portfolio/
├── public/
│   ├── desktop_pc/          # 3D GLTF model for the hero section
│   ├── planet/              # 3D GLTF model for the contact section (Earth)
│   └── logo.svg
├── src/
│   ├── assets/
│   │   ├── company/         # Company logos for the experience section
│   │   ├── tech/            # Technology icons for the skills section
│   │   └── index.js         # Centralized asset exports
│   ├── components/
│   │   ├── canvas/          # Three.js canvas components (Computers, Earth, Ball, Stars)
│   │   ├── About.jsx
│   │   ├── Contact.jsx      # "Let's Connect" section with direct contact cards
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx  # Prevents browser scroll restoration on load
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   └── index.js
│   ├── constants/
│   │   └── index.js         # All portfolio data (nav links, experience, projects, skills)
│   ├── hoc/
│   │   └── SectionWrapper.jsx  # HOC that adds scroll anchor + Framer Motion wrapper
│   ├── utils/
│   │   └── motion.js        # Reusable Framer Motion animation variants
│   ├── App.jsx
│   ├── index.css            # Global styles + Tailwind directives
│   ├── main.jsx             # App entry point; scroll restoration disabled here
│   └── styles.js            # Shared Tailwind class strings
├── .env                     # No env vars required (contact uses direct links)
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/AdarshYadav-dev/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio

# Install dependencies
npm install --legacy-peer-deps
```

> **Note:** `--legacy-peer-deps` is required because `react-tilt` declares peer dependencies for React 15/16, but this project uses React 18. The flag resolves this without affecting functionality.

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🌍 Environment Variables

**No environment variables are required** to run this portfolio.

The contact section uses direct browser-native protocol handlers:
- `mailto:` — opens the system email client
- `tel:` — opens the phone dialer on mobile devices
- `https://wa.me/` — opens WhatsApp chat
- Standard `https://` links for GitHub and LinkedIn

There is no form, no email API, and no backend integration needed.

---

## 📦 Deployment

This is a standard Vite + React SPA. It can be deployed to any static hosting platform:

| Platform | Command |
|---|---|
| [Vercel](https://vercel.com/) | Connect your GitHub repo — Vercel auto-detects Vite |
| [Netlify](https://netlify.com/) | Build command: `npm run build`, publish dir: `dist` |
| [GitHub Pages](https://pages.github.com/) | Use `vite-plugin-gh-pages` or deploy `dist/` manually |

> **Important for single-page apps:** Configure your hosting platform to redirect all routes to `index.html` to prevent 404s on direct URL access.

---

## 🏢 Professional Experience

### Good Enough Energy — Full Stack Engineer *(Aug 2026 – Present)*
Building real-time energy monitoring and control systems:
- React.js dashboards for live BESS (Battery Energy Storage System) monitoring
- MQTT communication pipelines via HiveMQ Cloud for IoT device integration
- Node.js and Python backend services with REST APIs
- PostgreSQL database design and management
- SLD (Single Line Diagram) visualization and emulator interfaces
- WebSocket-based real-time data streaming

### Magebytes Pvt Ltd — Software Engineer *(Sept 2025 – July 2026)*
- Production feature development with React.js and Next.js
- REST API integration and component performance optimization
- Application state management with React Hooks and Context API

### First-Meridian Business Services Limited — Software Development Engineer *(Dec 2024 – May 2025)*
- RESTful API design and development with Express.js
- Third-party API integration for real-time data workflows
- API testing and validation with Postman

---

## 🎓 Education

**Diploma in Computer Applications (DCA)** — 2018

---

## 👤 Author

**Adarsh Yadav** — Full Stack Developer

- GitHub: [@AdarshYadav-dev](https://github.com/AdarshYadav-dev)
- LinkedIn: [adarsh-y-7aa9a1276](https://www.linkedin.com/in/adarsh-y-7aa9a1276/)
- Email: adarsh98215@gmail.com

---

*Built with React.js, Three.js, Tailwind CSS, and Framer Motion.*
