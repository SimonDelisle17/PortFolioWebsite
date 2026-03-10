# Portfolio Website — Onboarding Guide

## Overview

A personal developer portfolio website for **Simon Delisle** (SimonDev Inc), showcasing 19 professional projects across backend, frontend, mobile, AI, fullstack, and devops categories. The site features a dark-themed design with cyan/yellow accents, smooth animations, bilingual support (EN/FR), and a fully responsive layout.

**Live URL:** Deployed as a static SPA to a cPanel-hosted environment.

---

## Tech Stack

| Layer              | Technology                                               |
|--------------------|----------------------------------------------------------|
| **Framework**      | React 19 + TypeScript 5.9                                |
| **Build Tool**     | Vite 7                                                   |
| **UI Library**     | Material-UI (MUI) 7 with Emotion CSS-in-JS               |
| **State**          | Redux Toolkit 2 (theme + navigation slices)              |
| **Routing**        | React Router DOM 7                                       |
| **i18n**           | i18next + react-i18next (EN/FR)                          |
| **Animations**     | Framer Motion, GSAP, Vanilla Tilt, tsParticles, Lenis    |
| **Icons**          | MUI Icons + react-icons                                  |
| **Linting**        | ESLint 9                                                 |

---

## Project Structure

```
PortFolioWebsite/
├── PORTFOLIO_UPDATE_GUIDE.md        # How to update project content
├── ONBOARDING.md                    # This file
├── README.md
└── me/                              # Main application
    ├── index.html                   # HTML entry point
    ├── package.json
    ├── vite.config.js               # Vite configuration
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── eslint.config.js
    ├── public/
    │   └── logo.png                 # Favicon
    └── src/
        ├── main.tsx                 # App bootstrap (Redux Provider + React root)
        ├── App.tsx                  # Router, theme provider, smooth scroll
        ├── i18n.ts                  # i18next setup (localStorage persistence)
        ├── index.css                # Global CSS variables, scrollbar, base styles
        │
        ├── components/              # Reusable UI components
        │   ├── Hero.tsx             # Landing section with particle background
        │   ├── Navigation.tsx       # Fixed header + mobile drawer
        │   ├── Portfolio.tsx        # Filterable project grid
        │   ├── Skills.tsx           # Work experience timeline
        │   ├── About.tsx            # Stats cards section
        │   ├── Blog.tsx             # Blog section (placeholder)
        │   ├── Contact.tsx          # Contact section
        │   ├── Footer.tsx           # Footer
        │   ├── CustomCursor.tsx     # GSAP-animated cursor overlay
        │   ├── LoadingScreen.tsx    # Animated loading overlay
        │   ├── ParticleBackground.tsx # tsParticles interactive background
        │   ├── LanguageSwitcher.tsx # EN/FR toggle
        │   └── TiltCard.tsx         # 3D tilt card wrapper (Vanilla Tilt)
        │
        ├── pages/                   # Route-level components
        │   ├── HomePage.tsx         # Composes Hero → Portfolio → Skills → About → Footer
        │   └── ProjectDetailPage.tsx# Single project detail view (/project/:id)
        │
        ├── data/                    # Static content
        │   ├── projectsData.ts      # 19 projects (English)
        │   └── projectsData.fr.ts   # 19 projects (French)
        │
        ├── store/                   # Redux state
        │   ├── store.ts             # Store config (RootState, AppDispatch exports)
        │   └── slices/
        │       ├── themeSlice.ts    # darkMode toggle
        │       └── navigationSlice.ts # activeSection tracking
        │
        ├── theme/
        │   └── theme.ts             # MUI theme (dark palette, component overrides)
        │
        ├── hooks/
        │   └── useSmoothScroll.tsx  # Lenis smooth scrolling hook
        │
        ├── locales/                 # UI translation strings
        │   ├── en.ts                # English
        │   └── fr.ts                # French
        │
        ├── types/
        │   └── project.ts           # Project & ProjectCategory interfaces
        │
        └── assets/                  # Static files (images, PDFs)
            ├── logo.png
            ├── Simon_Delisle.pdf    # Resume/CV
            └── TOW.png              # APDQ Towing project image
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** (comes with Node)

### Install & Run

```bash
cd me
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` with hot module replacement.

### Available Scripts

| Command           | Description                         |
|--------------------|-------------------------------------|
| `npm run dev`      | Start Vite dev server (HMR)        |
| `npm run build`    | Production build → `dist/`         |
| `npm run preview`  | Preview the production build        |
| `npm run lint`     | Run ESLint                          |

---

## Architecture

### App Bootstrap Chain

```
index.html
  └── main.tsx
        ├── Redux Provider (store)
        └── App.tsx
              ├── MUI ThemeProvider
              ├── CssBaseline (global reset)
              ├── LoadingScreen (overlay)
              ├── Lenis smooth scroll (useSmoothScroll hook)
              └── BrowserRouter
                    ├── ScrollToTop (reset scroll on navigate)
                    ├── Navigation (fixed header)
                    └── Routes
                          ├── /          → HomePage
                          └── /project/:id → ProjectDetailPage
```

### Routing

Only two routes exist:

| Path             | Component           | Description                       |
|------------------|----------------------|-----------------------------------|
| `/`              | `HomePage`          | Main single-page portfolio        |
| `/project/:id`   | `ProjectDetailPage` | Detailed view for a single project|

The homepage is divided into scroll sections, each with an `id` attribute used for smooth-scroll navigation: `home`, `portfolio`, `resume`, `about`.

### State Management (Redux)

Two slices, both lightweight:

- **`themeSlice`** — `darkMode: boolean` (defaults to `true`, toggle exists but the theme is dark-only in practice)
- **`navigationSlice`** — `activeSection: string` (tracks which section is in viewport for nav highlighting)

Access state via:
```tsx
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const activeSection = useSelector((state: RootState) => state.navigation.activeSection);
```

### Internationalization (i18n)

- Configured in `src/i18n.ts` with English as default
- Language preference persisted in `localStorage` under the key `language`
- UI strings live in `src/locales/en.ts` and `src/locales/fr.ts`
- Project data has separate files: `projectsData.ts` (EN) and `projectsData.fr.ts` (FR)

Usage in components:
```tsx
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();
// t('nav.home') → "Home" or "Accueil"
// i18n.language → "en" or "fr"
```

---

## Styling Approach

### Primary: MUI `sx` Prop

Most styling uses inline `sx` props on MUI components. This is the project's standard — avoid creating separate CSS files.

```tsx
<Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
```

### Theme (`src/theme/theme.ts`)

- Dark palette: backgrounds `#0a0f1e` / `#121829`, text white
- Primary accent: cyan `#00d4ff`
- Secondary accent: yellow `#ffc107`
- Component overrides for `MuiButton`, `MuiCard`, `MuiChip`, `MuiIconButton`

### Global CSS (`src/index.css`)

CSS custom properties for colors, custom scrollbar, Inter font, and base resets.

### Responsive Breakpoints

Uses MUI's default breakpoints — most components adapt at `xs`, `sm`, `md`:
```tsx
sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}
```

---

## Animation Libraries

This project uses **five** animation systems. Each has a specific role:

| Library            | Used For                          | Key File(s)                        |
|--------------------|------------------------------------|------------------------------------|
| **Framer Motion**  | Scroll-triggered reveals, staggers, parallax | Most components (Hero, Portfolio, Skills, About) |
| **GSAP**           | Custom cursor tracking             | `CustomCursor.tsx`                 |
| **Vanilla Tilt**   | 3D card hover effect               | `TiltCard.tsx`                     |
| **tsParticles**    | Interactive particle background    | `ParticleBackground.tsx`           |
| **Lenis**          | Smooth scroll (wheel/touch)        | `useSmoothScroll.tsx`              |

---

## Data Model

### Project Interface

Defined in `src/types/project.ts`:

```typescript
interface Project {
  id: number;
  title: string;
  category: 'backend' | 'frontend' | 'mobile' | 'ai' | 'fullstack' | 'devops';
  tags: string[];
  shortDescription: string;
  icon: string;                              // Emoji or image import
  impact: string;
  detailedDescription: string;
  features: string[];
  technologies: { [key: string]: string[] }; // e.g. { "Backend": ["Node.js", "Express"] }
  metrics: { [key: string]: string };        // e.g. { "API Uptime": "99.9%" }
  architecture: string;
  liveUrl: string | null;
}
```

### Helper Functions (in `projectsData.ts`)

```typescript
filterByCategory(category: ProjectCategory): Project[]  // Filter by category
getProjectById(id: number | string): Project | undefined // Lookup by ID
```

---

## Adding a New Project

1. Open `src/data/projectsData.ts`
2. Add a new `Project` object to the `projects` array with the next sequential `id`
3. Duplicate the entry in `src/data/projectsData.fr.ts` with French translations
4. The project will automatically appear in the Portfolio grid and be accessible at `/project/<id>`

See [PORTFOLIO_UPDATE_GUIDE.md](PORTFOLIO_UPDATE_GUIDE.md) for detailed instructions.

---

## Deployment

### Build

```bash
cd me
npm run build
```

This outputs static files to `me/dist/`.

### Deploy to cPanel / Static Host

1. Upload the contents of `dist/` to the web host's `public_html` directory:
   - `index.html`
   - `assets/` folder (JS, CSS, images)
   - `logo.png`
2. Add an `.htaccess` file for SPA routing:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This ensures all routes (like `/project/5`) are handled by the React router instead of returning 404.

---

## Key Conventions

| Convention             | Details                                                    |
|------------------------|------------------------------------------------------------|
| **Components**         | Functional components with hooks, PascalCase filenames     |
| **Styling**            | MUI `sx` prop (no separate CSS modules)                    |
| **State**              | Redux Toolkit slices for global state, local `useState` otherwise |
| **Data**               | Hardcoded TypeScript arrays — no backend API               |
| **Animations**         | Framer Motion for scroll reveals, GSAP for cursor only     |
| **Translations**       | `t('key.path')` for UI strings, separate data files for projects |
| **Responsive**         | Mobile-first with MUI breakpoints (`xs`, `sm`, `md`)       |
| **Theme**              | Dark mode only — cyan/yellow accent palette                |

---

## Common Tasks

### Change the accent color
Edit `src/theme/theme.ts` — update the `primary.main` value and corresponding CSS variables in `src/index.css`.

### Add a new section to the homepage
1. Create a component in `src/components/`
2. Import and place it in `src/pages/HomePage.tsx` in the desired order
3. Add a nav link in `src/components/Navigation.tsx` with the section's `id`
4. Add translation keys in `src/locales/en.ts` and `src/locales/fr.ts`

### Add a new language
1. Create a new locale file in `src/locales/` (e.g., `es.ts`)
2. Create a new project data file (e.g., `projectsData.es.ts`)
3. Register the language in `src/i18n.ts` under `resources`
4. Update `LanguageSwitcher.tsx` to include the new option

### Modify the particle background
Edit `src/components/ParticleBackground.tsx` — the tsParticles config object controls particle count, colors, interactivity, and movement.
