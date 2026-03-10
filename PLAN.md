# PLAN — Making the Portfolio Human

A step-by-step implementation plan to transform this portfolio from a data-driven resume template into a personal, memorable experience. Ordered by impact — highest first.

---

## Phase 1: First Impressions (Hero + Loading)

The hero is the first thing anyone sees. This is where 90% of the emotional impact lives.

### Step 1.1 — Kill the Fake Loading Screen

**File:** `me/src/components/LoadingScreen.tsx`
**Change:** Replace the 1.5s fake loader with a quick 300ms fade-in on first paint, or remove it entirely.

What to do:
- Remove the `progress` counter and `setInterval` loop
- Replace with a simple `AnimatePresence` fade that exits after `document.readyState === 'complete'` (or a 300ms max timeout)
- Remove the "SD" shimmer logo and progress bar — they add nothing
- The goal: **zero perceived wait time**

---

### Step 1.2 — Replace the Company Logo with a Personal Photo

**Files:** `me/src/components/Hero.tsx`, `me/src/assets/`
**Change:** Swap the SimonDev Inc logo box for a real photo of Simon.

What to do:
- Add a professional or casual photo to `me/src/assets/` (e.g., `simon.jpg`)
- Replace the logo `<Box>` (the 500px square with shimmer animation) with a circular or rounded-square photo
- Keep it simple — a `border-radius: 50%` image with a subtle border, no shimmer, no pulsing glow
- Remove the `@keyframes shimmer` and the pulsing `drop-shadow` animation on the logo
- The company logo can remain in the navbar — that's fine. But the hero should show a person

**Fallback if no photo:** Use a stylized avatar/illustration. Even a Notion-style avatar is better than a corporate logo.

---

### Step 1.3 — Rewrite the Hero Copy

**Files:** `me/src/locales/en.ts`, `me/src/locales/fr.ts`, `me/src/components/Hero.tsx`
**Change:** Replace the generic title with something that tells visitors what you actually do in plain language.

Current:
```
"Hello, I'm"
"Software Engineer / AI Engineer"
"Full Stack Developer"
```

Replace with something like:
```
"Hey, I'm Simon"
"I build logistics systems, mobile apps, and AI tools"
"that help real businesses run better."
```

What to do:
- Update `hero.greeting`, `hero.title1`, `hero.title2` in both `en.ts` and `fr.ts`
- The tone should be conversational — first person, no buzzwords
- Add a short one-liner below the subtitle that gives context: where you're based, what you're focused on right now

---

### Step 1.4 — Add a Real CTA to the Hero

**File:** `me/src/components/Hero.tsx`
**Change:** The hero currently only has a LinkedIn icon button. Add a clear primary call-to-action.

What to do:
- Add a "See my work" button that smooth-scrolls to the Portfolio section
- Add a "Get in touch" button that scrolls to the new Contact section (see Phase 3)
- Keep the LinkedIn icon, but add GitHub as well
- Layout: two buttons side by side + social icons below them

---

## Phase 2: Content & Storytelling

### Step 2.1 — Rewrite the About Section with Personality

**Files:** `me/src/components/About.tsx`, `me/src/locales/en.ts`, `me/src/locales/fr.ts`
**Change:** Replace the resume-summary "About" with an actual personal introduction.

What to do:
- Split the section into two parts:
  1. **Personal intro** (2-3 paragraphs): Where you're from, what got you into coding, what excites you, what you do outside of work. Written in first person, conversational.
  2. **Key milestones** (replacing the stat cards): Instead of "600K+ Lines of Code", use meaningful achievements like "Built a logistics platform now used daily by a real company" or "Shipped 6 mobile apps in one year"
- Add a photo of you here too (different from the hero — can be more casual)
- Remove or rework the stat cards — "Lines of Code" is not a meaningful metric to anyone

Update translation keys in `en.ts` and `fr.ts` with the new copy.

---

### Step 2.2 — Create Project Hierarchy (Flagship vs. Other)

**Files:** `me/src/components/Portfolio.tsx`, `me/src/data/projectsData.ts`, `me/src/data/projectsData.fr.ts`, `me/src/types/project.ts`
**Change:** Stop treating all 19 projects equally. Highlight 3-5 flagship projects prominently.

What to do:
- Add a `featured: boolean` field to the `Project` interface in `project.ts`
- Mark 3-5 best projects as `featured: true` in both data files
- In `Portfolio.tsx`, render featured projects first as **large cards** (full-width or half-width) with more detail, a screenshot, and a personal note
- Render remaining projects below in a compact grid (smaller cards, less detail)
- This gives visitors a clear entry point instead of a wall of 19 equal cards

---

### Step 2.3 — Add Screenshots/Visuals to Projects

**Files:** `me/src/data/projectsData.ts`, `me/src/data/projectsData.fr.ts`, `me/src/types/project.ts`, `me/src/components/Portfolio.tsx`, `me/src/pages/ProjectDetailPage.tsx`, `me/src/assets/`
**Change:** Add real screenshots or mockups to project data.

What to do:
- Add an `images: string[]` field to the `Project` interface
- Capture 1-3 screenshots per project (even just the landing page or a key screen)
- Store images in `me/src/assets/projects/` or reference external URLs
- Display the first image as a **card header image** in the portfolio grid (replace the emoji icon for featured projects)
- Display all images in a **gallery or carousel** on the `ProjectDetailPage`
- For projects without screenshots: keep the emoji icon, that's fine

---

### Step 2.4 — Restructure Project Detail Pages as Case Studies

**File:** `me/src/pages/ProjectDetailPage.tsx`
**Change:** Replace the spec-sheet layout with a storytelling structure.

Current structure:
```
Overview → Features → Technologies → Metrics
```

New structure:
```
The Problem   → What challenge was this solving?
The Solution  → How did you approach it?
What I Built  → Features + technologies (condensed)
Screenshots   → Visual proof
What I Learned → Personal reflection (1-2 sentences)
Impact        → Metrics (if meaningful)
```

What to do:
- Add `problem: string` and `lesson: string` fields to the `Project` interface
- Populate them in both data files (English + French)
- Restructure `ProjectDetailPage.tsx` to follow the new narrative flow
- Move technologies into a collapsible or secondary section — they're supporting detail, not the headline
- The features list can stay but should feel like part of the story, not a Jira ticket

---

### Step 2.5 — Fix the Skills Section (Hierarchy over Chip Soup)

**File:** `me/src/components/Skills.tsx`
**Change:** Replace the flat chip lists with a prioritized skill display.

What to do:
- Split into two tiers:
  1. **Core Stack** (5-7 technologies): The tools you're strongest in and want to be hired for. Display these prominently — larger chips, maybe with icons or brief context ("Flutter — 6 production apps")
  2. **Also experienced with** (everything else): Smaller, muted, listed below
- The work experience cards are fine — keep them but consider tightening the tech chip lists to only show the 4-5 most relevant per role instead of 10-19

---

## Phase 3: Contact & Connection

### Step 3.1 — Build a Real Contact Section

**File:** `me/src/components/Contact.tsx`, `me/src/pages/HomePage.tsx`, `me/src/locales/en.ts`, `me/src/locales/fr.ts`
**Change:** Replace the placeholder Contact component with a real section and add it to the homepage.

What to do:
- Create a proper contact section with:
  - A warm headline: "Let's work together" or "Want to chat?"
  - Your **visible email address** (clickable `mailto:` link — don't hide it behind clipboard)
  - LinkedIn and GitHub links with icons
  - Optional: a simple contact form (use Formspree or Resend for zero-backend form handling)
- Add the Contact section to `HomePage.tsx` between About and Footer
- Add a "contact" nav item in `Navigation.tsx`
- Add translation keys in both locale files

---

### Step 3.2 — Fix the "Contact Me" Button Behavior

**File:** `me/src/components/Navigation.tsx`
**Change:** Make the navbar "Contact Me" button scroll to the new Contact section instead of silently copying email.

What to do:
- Replace the `handleContactClick` clipboard logic with a `scrollIntoView` to `#contact`
- Remove the Snackbar notification
- The email is now visible in the Contact section — no need for clipboard tricks

---

### Step 3.3 — Expand the Footer

**File:** `me/src/components/Footer.tsx`
**Change:** Add social links and a personal touch.

What to do:
- Add icon links: GitHub, LinkedIn, Email
- Add a location line: "Based in Quebec, Canada" (or wherever Simon is)
- Add a small personal note: "Built with React, TypeScript & too much coffee" — anything that makes it feel like a human wrote it
- Update copyright year or make it dynamic: `new Date().getFullYear()`

---

## Phase 4: Visual & Motion Cleanup

### Step 4.1 — Remove the Custom Cursor

**Files:** `me/src/components/CustomCursor.tsx`, `me/src/App.tsx` (or wherever it's mounted)
**Change:** Delete `CustomCursor.tsx` and remove its usage.

Why:
- Adds no value
- Causes accessibility issues
- Confuses trackpad/touchscreen users
- GSAP is only used for this — removing it drops an entire dependency

After this, run `npm uninstall gsap` if no other file uses it.

---

### Step 4.2 — Remove or Drastically Reduce Particles

**Files:** `me/src/components/ParticleBackground.tsx`, `me/src/components/Hero.tsx`
**Change:** Either remove tsParticles entirely or reduce to a minimal, barely-visible effect.

Option A (recommended): Remove it entirely. The hero section works fine without floating dots.
- Delete `ParticleBackground.tsx`
- Remove the `<ParticleBackground />` from `Hero.tsx`
- Run `npm uninstall @tsparticles/react @tsparticles/slim`

Option B: Keep it but make it extremely subtle — reduce particle count to 15-20, make them nearly transparent (opacity 0.1-0.15), remove click/hover interactivity.

---

### Step 4.3 — Remove Vanilla Tilt from Cards

**Files:** `me/src/components/TiltCard.tsx`, `me/src/components/Portfolio.tsx`
**Change:** Replace TiltCard with a simple styled Card.

What to do:
- In `Portfolio.tsx`, replace `<TiltCard>` with a regular MUI `<Card>` with a subtle hover effect (the MUI theme already provides `translateY(-8px)` on hover)
- Delete `TiltCard.tsx`
- Run `npm uninstall vanilla-tilt`

The 3D tilt effect is disorienting, especially on mobile. A simple lift-on-hover is cleaner.

---

### Step 4.4 — Tone Down Animation Intensity

**Files:** All components using Framer Motion
**Change:** Reduce animation distances, durations, and delays.

Guidelines:
- Reduce `y: 50` initial offsets to `y: 20` — big slides feel dramatic; small ones feel natural
- Reduce stagger delays — currently some content waits 1+ second to appear (e.g., Skills `delay: 1.4`). Max delay should be ~0.4s
- Remove the `rotateY: 180` flip on the hero image — it's jarring
- Remove `rotateX: -90` from character animations — simple fade + slight translate is enough
- Remove `whileHover: { rotate: 5 }` from the nav logo — logos shouldn't rotate
- Keep scroll-triggered fade-ins (`useInView`) — those are fine and feel natural

---

### Step 4.5 — Add Visual Warmth to the Color Palette

**File:** `me/src/theme/theme.ts`, `me/src/index.css`
**Change:** Keep the dark theme but break the cyan monotony.

What to do:
- Use the yellow/amber secondary color (`#ffc107`) more intentionally — currently it only appears in gradients
- Consider slightly warming the background: `#0a0f1e` → `#0f1219` or similar (less blue-cold, more neutral-dark)
- Add variety to section backgrounds — not every section needs to alternate between `#0a0f1e` and `#121829`. One section could have a very subtle gradient or pattern
- Reduce the cyan glow intensity on hover — currently every card shoots out `boxShadow: '0 20px 60px rgba(0, 212, 255, 0.25)'`. Drop that to `0.1` opacity max

---

## Phase 5: Cleanup & Polish

### Step 5.1 — Remove Unused Components

**Files:** `me/src/components/Blog.tsx`, `me/src/components/Contact.tsx` (the old placeholder)
**Change:** Delete the Blog placeholder. Replace the Contact placeholder in Phase 3.

The Blog component says "Blog posts about enterprise architecture..." but has no actual posts. An empty placeholder is worse than no section at all — it signals "I started this but never followed through."

Either:
- Remove it entirely (recommended for now)
- Or build a real blog later as a separate initiative

---

### Step 5.2 — Remove the Theme Toggle (Dark Mode Slice)

**File:** `me/src/store/slices/themeSlice.ts`
**Change:** The `darkMode` toggle exists in Redux but is never exposed in the UI. Remove the dead code.

What to do:
- Delete `themeSlice.ts`
- Remove `themeReducer` from `store.ts`
- This keeps the store lean and honest — no phantom features

---

### Step 5.3 — Update Hardcoded Strings

**Files:** Multiple components
**Change:** Several strings are hardcoded in English and don't use the i18n system.

Known instances:
- `Navigation.tsx:195` — "Contact Me" button text
- `Navigation.tsx:236` — "Email copied to clipboard!" snackbar
- `Skills.tsx:227` — "Languages" section header
- `Skills.tsx:229` — "French (Native) • English (Fluent)"
- `ProjectDetailPage.tsx:299` — "Back to Portfolio" (bottom button)
- `LoadingScreen.tsx:166` — "Loading Portfolio"
- `Footer.tsx:7` — "© 2025 Simon Delisle. All rights reserved."

Move all of these into `en.ts` / `fr.ts` and use `t()` calls.

---

### Step 5.4 — Audit Dependency Tree

**File:** `me/package.json`
**Change:** After removing custom cursor, particles, and tilt cards, uninstall dead dependencies.

```bash
npm uninstall gsap vanilla-tilt @tsparticles/react @tsparticles/slim
```

This drops 4 dependencies, reduces bundle size, and simplifies the animation story to: **Framer Motion for animations, Lenis for smooth scroll.**

---

## Implementation Order (Recommended)

| Priority | Step | Impact | Effort |
|----------|------|--------|--------|
| 1 | 1.1 Kill fake loading screen | High | 15 min |
| 2 | 4.1 Remove custom cursor | Medium | 10 min |
| 3 | 4.2 Remove/reduce particles | Medium | 10 min |
| 4 | 4.3 Remove vanilla tilt | Low | 10 min |
| 5 | 1.2 Add personal photo to hero | High | 20 min |
| 6 | 1.3 Rewrite hero copy | High | 30 min |
| 7 | 1.4 Add real CTAs to hero | Medium | 20 min |
| 8 | 2.1 Rewrite About section | High | 45 min |
| 9 | 3.1 Build real Contact section | High | 45 min |
| 10 | 3.2 Fix Contact Me button | Medium | 10 min |
| 11 | 3.3 Expand Footer | Low | 15 min |
| 12 | 2.5 Fix Skills hierarchy | Medium | 30 min |
| 13 | 2.2 Create project hierarchy | High | 45 min |
| 14 | 2.3 Add project screenshots | High | 60 min+ |
| 15 | 2.4 Restructure project pages | High | 60 min |
| 16 | 4.4 Tone down animations | Medium | 30 min |
| 17 | 4.5 Warm up color palette | Low | 20 min |
| 18 | 5.1 Remove unused components | Low | 5 min |
| 19 | 5.2 Remove dead theme slice | Low | 5 min |
| 20 | 5.3 Fix hardcoded strings | Low | 20 min |
| 21 | 5.4 Audit dependencies | Low | 5 min |

---

## What This Changes

**Before:** A dark template with particles, glow effects, and corporate copy. 19 projects displayed identically. No photos. No personality. No way to contact you without a clipboard hack.

**After:** A portfolio that feels like meeting someone. A real photo. Conversational copy. 3-5 flagship projects told as stories with screenshots. A clear way to get in touch. Animations that guide instead of overwhelm. Every section answers "who is this person?" not just "what have they built?"

---

## Assets Needed from Simon

Before implementation can begin, these items are needed:

1. **A personal photo** (professional or casual — at least 800x800px)
2. **A second photo** for the About section (optional, can be more informal)
3. **Screenshots** of 3-5 flagship projects (browser screenshots, phone mockups, or screen recordings)
4. **Personal copy** — answers to:
   - Where are you from?
   - What got you into software engineering?
   - What do you do outside of work?
   - What are you focused on or excited about right now?
5. **For each flagship project** — a 2-3 sentence answer to:
   - What problem were you solving?
   - What was the hardest part?
   - What did you learn?
