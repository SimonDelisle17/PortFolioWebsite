# Portfolio Redesign Plan — Simon Delisle
> Inspired by franckpoingt.dev — Human, Smart, Professional

---

## North Star

The current portfolio feels like a dark SaaS template with glow effects and 19 equal project cards.
The goal: make it feel like **meeting a person**, not browsing a product catalog.
Tone: conversational, confident, a little funny. Never corporate.

---

## franckpoingt.dev — Technical Reverse Engineering

Inspected live via Playwright. Here's exactly how every effect works:

### Stack
- **Tailwind CSS v4** (oklch colors, `--tw-*` CSS variables)
- **Vanilla JS** with ES modules — no React, no GSAP, no Framer Motion
- Files: `main.js`, `features.js`, `animated-shiny-text.js`
- Plain HTML with JS-driven class manipulation

### Grid Layout
```css
grid w-full
  auto-rows-[5rem]          /* mobile: rows collapse small */
  lg:auto-rows-[22rem]      /* desktop: 352px tall rows */
  grid-cols-3
  lg:grid-rows-4            /* 4 rows × 3 cols = 12 cells */
  gap-3 lg:gap-4
```
Cards use `col-span-3` (full-width) on mobile, split to `col-span-1`/`col-span-2` on desktop.
Card style: `rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]` — almost invisible shadow, no glow.

### Animation 1 — Letter-by-letter title entrance
Each character of "Franck Poingt" is its own `<span class="inline-block whitespace-pre">`.
Staggered `enter` keyframe on load:
```css
@keyframes enter {
  0% { opacity: 0; transform: translateY(var(--tw-enter-translate-y, 0)); }
  100% { opacity: 1; transform: translate3d(0,0,0); }
}
```
Each span gets `animation-delay: Xms` incrementally. Result: letters "fall in" one by one.

### Animation 2 — Shiny text sweep (subtitle)
The "Ask FranckGPT" label and subtitle use:
```css
@keyframes shiny-text {
  0%, 90%, 100% { background-position: calc(-100% - var(--shiny-width)) 0; }
  30%, 60%      { background-position: calc(100%  + var(--shiny-width)) 0; }
}
```
A gradient sweeps left→right across the text every ~3s. Pure CSS, no JS.

### Animation 3 — Marquee (scrolling project icons)
```css
@keyframes marquee {
  0%   { transform: translate(0px); }
  100% { transform: translate(calc(-100% - var(--gap))); }
}
@keyframes marquee-vertical {
  0%   { transform: translateY(0px); }
  100% { transform: translateY(calc(-100% - var(--gap))); }
}
```
Icons duplicated twice in HTML so loop appears seamless.
`--duration: 15s` CSS variable controls speed. Horizontal on desktop, vertical on mobile.

### Animation 4 — Contact card typing bubbles
Three chat bubbles with 3 animated dots each:
```html
<div class="size-1.5 rounded-full bg-white" style="opacity: 0.4; transform: translateY(-0.991px);">
```
Each dot has independently animated `opacity` + `translateY` — spring physics via JS, not CSS.
Bubbles are different colors: sky-600 (blue), green, another variant.

### Animation 5 — Page transition (the coolest one)
```css
@keyframes reveal {
  0%   { clip-path: circle(0% at var(--x,50%) var(--y,50%)); opacity: 0.7; }
  100% { clip-path: circle(150% at var(--x,50%) var(--y,50%)); opacity: 1; }
}
```
On card click, JS records mouse `(x, y)` → sets `--x` and `--y` CSS vars → new page reveals with a **circular wipe expanding from the exact click point**. No library. ~10 lines of JS.

### Animation 6 — Pull chain (dark/light toggle)
The top-right "bead string" is NOT a scroll indicator — it's a **dark mode toggle**!
- `class="fixed -top-11 right-6 z-50 pull-chain-toggle"`
- `transform-origin: center top` — hangs from the top
- Beads: `size-2 rounded-full border-2 border-gray-600 bg-gradient-to-r from-gray-500`
- Draggable via pointer events — pull down → toggles `dark` class on `<html>`
- Springs back up with `transform: none` transition

### Animation 7 — Avatar eye-tracking
The About card avatar has a pupil element that follows the mouse cursor:
```html
<div class="absolute size-5 bg-white rounded-full border-2 border-gray-800">
  <div class="dark:size-1 size-5 dark:bg-black bg-gray-800 rounded-full"
       style="left: 50%; transform: translate(Xpx, Ypx)">
```
JS calculates angle from avatar center to cursor → moves pupil within bounds.

### Animation 8 — Work Experience card
Has a partial photo (`/finalincon.png`) with `clip-path: inset(55% 0px 0px)` (bottom crop)
and another instance with `clip-path: inset(0px 0px 42%)` (top crop).
Creates the illusion of a person sitting at a desk, visible from the waist up on the card.

### AskFranckGPT
- `<textarea placeholder="What would you like to know?">`
- Mic button (`<input type="file" class="hidden">` for voice/attachment)
- Submit button
- Suggested questions as pill buttons above the textarea
- Positioned fixed at bottom of every page
- The "Ask FranckGPT" label itself has the `shiny-text` animation

---

---

## Phase 1 — Content Update (all 19 projects)

Update `projectsData.ts` + `projectsData.fr.ts` for every project.
Priority: HIGH projects first, then MED, then LOW.
For HIGH/MED: add real tech versions, real metrics, `problem` + `lesson`.

| ID | Project | Priority | What needs updating |
|----|---------|----------|-------------------|
| 1 | Super API Ecosystem | HIGH | FastAPI 0.110, dual-DB architecture, geo microservice, 90% WebSocket reduction |
| 2 | SuperApp Mobile Platform | HIGH | Rename modes: SuperPicker (warehouse) + SuperDeliver (driver) in one codebase |
| 3 | SuperBuyer Platform | MED | NestJS 11, Angular 20 confirmed, add problem/lesson |
| 4 | Epicor Integration Services | MED | 14 AConneX + 30 PEDS endpoints = 44 total, split the two APIs in description |
| 5 | SuperVin Scanner | LOW | Almost no docs — rewrite from scratch, add ML Kit detail |
| 7 | SuperParser API | MED | 1343-line processor.py, handover-grade documentation, HMAC auth |
| 8 | APDQ Towing Management | HIGH | Three separate stacks: Flutter (Firebase), FastAPI (Celery/Redis), React+TS (i18n) |
| 9 | Kubernetes Infrastructure | MED | Helm chart generation, ArgoCD GitOps, WSL2 Windows setup, detailed DevOps guides |
| 10 | SuperDispatch Dashboard | MED | React 18 + MUI 6, multi-environment .env config |
| 11 | SuperTelemetry | MED | Redis pub/sub multi-instance, Prometheus metrics, Pino logging, graceful shutdown |
| 12 | SuperCron Automation | MED | 7 scheduled jobs, FTP/SFTP file handling, ESL vendor API, Strapi integration |
| 13 | SuperODBC Data Bridge | LOW | PM2 process manager, Parquet storage, recovery procedures |
| 14 | SuperInventaire | LOW | Already solid — add Zebra DataWedge enterprise detail |
| 15 | SuperTransfer | LOW | Already solid |
| 16 | Close to the Pin | LOW | Already solid |
| 17 | Course Management Platform | MED | Bump to Next.js 15.5, React 19.1, Strapi 5.28, Tailwind 4 |
| 18 | PaSUPER Frontend | HIGH | Angular 13 (clarify it's production, not outdated), add problem/lesson |
| 19 | PaSUPER Backend | HIGH | Add Elasticsearch detail, bee-queue job processing, PDF gen, CSV parsing |

**Assets needed from Simon:**
- `me/src/assets/me.jpg` — placeholder photo (placeholder used until real photo)
- Personal bio copy (3–5 sentences, first person)
- Email address + LinkedIn URL

---

## Phase 2 — Complete UI Rework

### 2.1 — Remove & Clean First
Before building anything new, delete the noise:

- [x] `LoadingScreen.tsx` — replaced with instant 300ms fade ✓
- [ ] `CustomCursor.tsx` — orphaned (not imported), delete file
- [ ] `ParticleBackground.tsx` — orphaned via Hero.tsx (Hero also orphaned), delete both
- [ ] `TiltCard.tsx` — orphaned, delete file
- [ ] `Blog.tsx` — orphaned (not imported), delete file
- [ ] `themeSlice.ts` — delete dead Redux slice, remove from store.ts
- [ ] Run: `npm uninstall @tsparticles/react @tsparticles/slim` (gsap/vanilla-tilt already removed)

---

### 2.2 — New Homepage: Bento Grid ✓ DONE
**SHIPPED** — `me/src/pages/HomePage.tsx` fully rewritten.

Layout implemented:
- Hero row: "Simon Claude Delisle" in Fraunces serif + typewriter subtitle (amber)
  - "Claude" has easter egg tooltip: "Named before it was cool 🤖"
- Row 2 (3 cols): About card (photo + bio) | Projects (icon grid) | Contact (chat bubbles)
- Row 3: Stack chip grid | PaSUPER AI flagship card

Widget name: **Ask SimonClaude** (NOT SimonGPT)

**Card design rules:**
- Dark background (`#0d0d0d` or `#111`) with very subtle border
- Light mode toggle optional
- Cards have gentle hover lift (no glow, no tilt, no 3D)
- Rounded corners (16–20px)
- Each card is clickable → navigates to that section page
- Starfield background: very sparse static dots (CSS only, no tsParticles)

---

### 2.3 — Scroll Indicator
The bead-on-a-string scroll indicator from franckpoingt.dev.
Simple: a vertical `<div>` line with a dot that moves with scroll position.
Pure CSS/JS — no library needed.

---

### 2.4 — Navigation
Replace the top navbar with a **vertical icon sidebar** (visible on all inner pages).
Same icons as franckpoingt.dev: Home, About, Projects, Skills, Contact.
Disappears on the homepage (the bento IS the navigation).

---

### 2.5 — Typography Overhaul
| Element | Current | New |
|---------|---------|-----|
| Name | Heavy sans-serif | Serif display (e.g. Playfair Display or DM Serif) |
| Body | Roboto-ish | Inter or DM Sans |
| Hero subtitle | "Software Engineer / AI Engineer" | Typewriter: cycles "builds logistics systems." → "ships mobile apps." → "deploys AI in production." |
| Tone | Corporate | Conversational, first person |

---

### 2.6 — About Section (full page)
When the About card is clicked, expands to a full page:
- Photo (me.jpg placeholder → real photo later)
- 3 paragraphs: origin, what I do, outside of work
- Timeline of key milestones (not a resume — milestone moments)
- One stat that matters: "19 projects shipped in production"

---

### 2.7 — Projects Section (full page)
When the Projects card is clicked:
- **Flagship card** at top (AI Voice & Chat — already implemented)
- Projects grid below, filterable by category
- Each card has: icon, name, one-line description, 3 tags
- Click → case study detail page

**Project Detail Page — Case Study format:**
```
1. The Problem    — what was broken / missing
2. The Approach   — how I thought about it
3. What I Built   — features + tech (condensed)
4. What I Learned — honest reflection
5. Impact         — metrics that mean something
```

---

### 2.8 — Skills Section (full page)
Two tiers:
1. **Core Stack** (7 max): Flutter, Python, FastAPI, Node.js, React/Angular, AI/LangChain, Kubernetes
   — displayed large with brief context ("Flutter — 6 production apps")
2. **Also experienced with**: everything else, smaller

Work experience cards: keep but trim tech chips to 4–5 per role.

---

### 2.9 — Contact Section (card on homepage + full page)
Homepage card shows:
- Animated chat bubble dots (like franckpoingt.dev)
- "Email, LinkedIn, GitHub, or just ask SimonGPT below"

Full contact page:
- Visible email (mailto: link)
- LinkedIn + GitHub buttons
- Optional: Formspree contact form
- Location: "Based in Quebec, Canada"

---

### 2.10 — Ask SimonClaude (killer feature) ✓ DONE
Pinned at the bottom of every page — just like franckpoingt.dev.
Suggested prompts:
- "Who is Simon?"
- "What has he built?"
- "What's his tech stack?"
- "Is he available for work?"
- "What's his biggest project?"

**Implementation options:**
- **Option A (Mock — fast):** Hardcoded answers in a switch/map. Looks identical to real. Ships in 1 hour.
- **Option B (Real — impressive):** Route through the PaSUPER AI backend with a Simon-specific system prompt. Demonstrates the actual AI he built. Ships in a day.

Simon decides. Recommend Option B — it's proof of work, not just decoration.

---

### 2.11 — Color & Visual Language
| Now | After |
|-----|-------|
| Cyan glow on everything | Cyan as single accent color only |
| `#0a0f1e` navy background | `#0d0d0d` near-black (warmer, less cold) |
| Every card has shimmer animation | No shimmer — cards are calm |
| 3D tilt effects | Simple translateY(-4px) on hover |
| Fake loading screen | Instant load |
| Custom cursor | System cursor |

---

## Execution Order

### DONE ✓
1. Write plan to file ✓
2. Explore franckpoingt.dev animations in depth ✓
3. Phase 1: id:6 AI project updated — remaining 18 projects still TODO
4. Phase 2.1: LoadingScreen simplified ✓ — other dead files still need deletion
5. Phase 2.2: Bento grid HomePage ✓ — Fraunces serif, amber palette, typewriter, bento cards
6. Phase 2.5: Typography ✓ — Fraunces + DM Sans + JetBrains Mono, theme.ts rewritten
9. Phase 2.10: Ask SimonClaude ✓ — mock streaming, bilingual, fixed bottom widget

### Next session
- Phase 2.1 cleanup: delete Blog.tsx, CustomCursor.tsx, ParticleBackground.tsx, TiltCard.tsx, Hero.tsx, themeSlice.ts
- Phase 2.3: Scroll indicator (optional)
- Phase 2.4: Sidebar nav on inner pages (navigation hidden on '/' already)
- Phase 2.6–2.9: Inner pages (/about, /projects, /skills, /contact) — currently navigating there 404s
- Phase 1: Update remaining 18 project entries

### Blocked on Simon
- Real photo → replace me.jpg
- Bio copy (3–5 sentences about himself)
- Decision: mock SimonGPT or real backend?

---

## Files That Will Change

| File | Change |
|------|--------|
| `me/src/pages/HomePage.tsx` | Full rewrite — bento grid |
| `me/src/components/Hero.tsx` | Delete or integrate into bento |
| `me/src/components/About.tsx` | Rewrite with photo + personality |
| `me/src/components/Portfolio.tsx` | Keep spotlight card, restyle grid |
| `me/src/components/Skills.tsx` | Two-tier hierarchy |
| `me/src/components/Contact.tsx` | Build real section |
| `me/src/components/Navigation.tsx` | Vertical icon sidebar |
| `me/src/components/Footer.tsx` | Add social links, location, year |
| `me/src/components/LoadingScreen.tsx` | Simplify to 300ms fade |
| `me/src/components/CustomCursor.tsx` | DELETE |
| `me/src/components/ParticleBackground.tsx` | DELETE |
| `me/src/components/TiltCard.tsx` | DELETE |
| `me/src/components/Blog.tsx` | DELETE |
| `me/src/store/slices/themeSlice.ts` | DELETE |
| `me/src/theme/theme.ts` | Warm up colors, add serif font |
| `me/src/locales/en.ts` + `fr.ts` | Add new copy keys |
| `me/src/data/projectsData.ts` | All 19 projects updated |
| `me/src/data/projectsData.fr.ts` | All 19 projects updated (FR) |
| NEW: `me/src/components/BentoHome.tsx` | New bento grid homepage |
| NEW: `me/src/components/AskSimonGPT.tsx` | Chat widget |
| NEW: `me/src/components/ScrollIndicator.tsx` | Bead-on-string scroll dot |
| NEW: `me/src/assets/me.jpg` | Placeholder photo |

---

## Notes
- Keep bilingual (FR/EN) throughout — every new string goes in both locale files
- Keep React Router — inner pages still navigate to `/project/:id`, `/about`, etc.
- Keep MUI — no need to swap the UI library, just restyle it
- Keep Framer Motion — use it for bento card entrance animations (subtle, not dramatic)
- Keep Lenis smooth scroll
- `me.jpg` placeholder until Simon provides real photo
