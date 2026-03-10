# Portfolio Update Guide

How to safely update the portfolio without breaking anything.

---

## Project Structure

```
me/
├── src/
│   ├── data/
│   │   └── projectsData.ts      ← All project entries live here
│   ├── types/
│   │   └── project.ts           ← Project type definition
│   ├── components/
│   │   ├── Portfolio.tsx         ← Project grid with category filtering
│   │   ├── Hero.tsx              ← Home page hero section
│   │   └── Navigation.tsx        ← Header/navbar with logo
│   ├── pages/
│   │   ├── HomePage.tsx          ← Main landing page
│   │   └── ProjectDetailPage.tsx ← Individual project detail view
│   └── assets/
│       ├── logo.png              ← SimonDev Inc logo
│       └── TOW.png               ← APDQ Towing project image
├── public/
│   └── logo.png                  ← Favicon
├── index.html                    ← Entry point (favicon, title)
└── vite.config.js                ← Build config (base path, output)
```

---

## How to Add a New Project

### 1. Edit `me/src/data/projectsData.ts`

Add a new object to the `projectsData` array with a unique `id`:

```ts
{
  id: 20, // Next available ID
  title: 'Project Name',
  category: 'backend', // One of: backend | frontend | mobile | ai | fullstack | devops
  tags: ['Tech1', 'Tech2'],
  shortDescription: 'One-line summary',
  icon: '🔥', // Emoji OR imported image path (e.g., TOWImage)
  impact: 'Key business impact statement',
  detailedDescription: 'Full paragraph description.',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  technologies: {
    groupName: ['Tech1', 'Tech2'],
  },
  metrics: {
    key: 'value',
  },
  architecture: 'Architecture description',
  liveUrl: null // or 'https://...'
}
```

### 2. If Using a Custom Image as Icon

1. Place the image in `me/src/assets/`
2. Import it at the top of `projectsData.ts`:
   ```ts
   import MyImage from '../assets/my-image.png';
   ```
3. Use it as the `icon` value:
   ```ts
   icon: MyImage,
   ```

### 3. Adding a New Category

If you need a new category beyond the existing ones:

1. Update `me/src/types/project.ts`:
   ```ts
   export type ProjectCategory = 'all' | 'backend' | 'frontend' | 'mobile' | 'ai' | 'fullstack' | 'devops' | 'new-category';
   ```
2. Update the category interface in the `Project` type too
3. Add the filter button in `me/src/components/Portfolio.tsx`

---

## Rules to Avoid Breaking Things

1. **Always use a unique `id`** - Check the highest existing ID and increment
2. **Category must be valid** - Only use: `backend`, `frontend`, `mobile`, `ai`, `fullstack`, `devops`
3. **Icon format** - Use emoji string (`'🔥'`) or imported image. Portfolio component checks for `.png`, `.jpg`, `.svg` extensions to render images vs text
4. **Don't remove the `TOWImage` import** unless you remove the APDQ project (id: 8)
5. **Test locally before deploying** - Run `npm run dev` and check all categories + project detail pages
6. **Keep tags short** - They display as chips in the UI

---

## How to Update an Existing Project

1. Find the project by `id` in `projectsData.ts`
2. Modify the fields you need
3. **Don't change the `id`** - URLs may reference it
4. Test the project detail page at `/project/{id}`

---

## Build & Deploy to cPanel

```bash
cd me
npm run build
```

Upload the contents of `me/dist/` to `public_html`:
- `index.html`
- `assets/` folder (JS, CSS, images)
- `logo.png` (favicon)

**Important**: Add `.htaccess` in `public_html` for client-side routing:
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Current Project Registry (19 projects)

| ID | Title | Category | Repo Folder |
|----|-------|----------|-------------|
| 1 | Super API Ecosystem | backend | `super-api` |
| 2 | SuperApp Mobile Platform | mobile | `super-app-v2` |
| 3 | SuperBuyer Platform | fullstack | `superbuyerv2` |
| 4 | Epicor Integration Services | backend | `epicor-services` |
| 5 | SuperVin Scanner | mobile | `SuperVin` |
| 6 | AI Phone Assistant | ai | `Ai` |
| 7 | SuperParser API | backend | `super-parser` |
| 8 | APDQ Towing Management | fullstack | `apdq` |
| 9 | Kubernetes Infrastructure | devops | `gamcar-argo-cd` |
| 10 | SuperDispatch Dashboard | frontend | `super-dispatch` |
| 11 | SuperTelemetry | fullstack | `super-telemetry` |
| 12 | SuperCron Automation | backend | `super-cron` |
| 13 | SuperODBC Data Bridge | backend | `super-odbc` |
| 14 | SuperInventaire | mobile | `Flutter Apps/SuperInventaire` |
| 15 | SuperTransfer | mobile | `Flutter Apps/SuperTransfer` |
| 16 | Close to the Pin | fullstack | `perso/CloseToThePin` |
| 17 | Course Management Platform | fullstack | `course` |
| 18 | PaSUPER Frontend | frontend | `Projet-B2C-B2B` |
| 19 | PaSUPER E-Commerce Backend | backend | `pasuper-backend` |

---

## New Features / Changelog

### 2026-03-09
- Added SimonDev Inc logo to header and hero section
- Updated favicon and page title to "SimonDev Inc"
- Enriched SuperInventaire (id: 14) with Zebra DataWedge details, 9 screens, returns/IR features
- Enriched SuperTransfer (id: 15) with multi-transfer, proxy store, run tracking details
- Added Close to the Pin (id: 16) - personal Flutter + Node.js golf app
- Added Course Management Platform (id: 17) - Next.js 15 + Strapi 5 LMS
- Added PaSUPER E-Commerce Platform (id: 18) - Angular SSR e-commerce with 613 TS files
- Added PaSUPER E-Commerce Backend (id: 19) - Strapi + Elasticsearch + Epicor ERP backend

---

## Translation Keys

If you add a project that needs translated content, update:
- `me/src/i18n/locales/en.json`
- `me/src/i18n/locales/fr.json`

Currently, project data is hardcoded in English in `projectsData.ts` and not translated.
