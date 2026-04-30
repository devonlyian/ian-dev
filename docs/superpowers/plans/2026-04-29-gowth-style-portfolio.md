# Gowth-Style Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the deleted MS-DOS portfolio with a Next.js portfolio that matches the observed page structure, routes, and interaction model of `gowth.tech`.

**Architecture:** Static portfolio data lives in `lib/portfolio-data.ts`. Pages render focused section and project components. Client-only layout helpers own animation, smooth scroll, menu, section indicator, toasts, and cursor behavior.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, GSAP, `@gsap/react`, Lenis, Sonner, Lucide React, Vitest.

---

### Task 1: Project Baseline

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`

- [ ] Add scripts for `dev`, `build`, `lint`, `test`.
- [ ] Install runtime dependencies and dev dependencies.
- [ ] Generate `package-lock.json` with `npm install`.

### Task 2: Test-First Data Contract

**Files:**
- Create: `tests/portfolio-data.test.ts`
- Create: `lib/portfolio-data.ts`
- Create: `lib/projects.ts`

- [ ] Write tests for section ids, project slug lookup, and adjacent project navigation.
- [ ] Run tests and confirm the missing implementation fails.
- [ ] Implement typed data and helpers.
- [ ] Run tests and confirm pass.

### Task 3: App Shell

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `components/layout/AppChrome.tsx`
- Create: `components/layout/SiteHeader.tsx`
- Create: `components/layout/MenuOverlay.tsx`
- Create: `components/layout/ScrollProgress.tsx`
- Create: `components/layout/SectionIndicator.tsx`
- Create: `components/layout/Preloader.tsx`
- Create: `components/layout/SmoothCursor.tsx`
- Create: `components/layout/SmoothScroll.tsx`

- [ ] Add root metadata and global CSS import.
- [ ] Add design tokens, dark mode variables, typography, section rules, and motion-safe styles.
- [ ] Add preloader, header, slide menu, scroll progress, section indicator, Lenis smooth scroll, Sonner toaster, and GSAP cursor.

### Task 4: Home Page Sections

**Files:**
- Create: `app/page.tsx`
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/About.tsx`
- Create: `components/sections/Projects.tsx`
- Create: `components/sections/Experience.tsx`
- Create: `components/sections/Services.tsx`
- Create: `components/sections/Contact.tsx`

- [ ] Render the home page in the observed order.
- [ ] Use GSAP for scoped hero entrance animation.
- [ ] Keep all text sourced from portfolio data.

### Task 5: Projects Routes

**Files:**
- Create: `app/projects/page.tsx`
- Create: `app/projects/[slug]/page.tsx`
- Create: `components/projects/ProjectArchive.tsx`
- Create: `components/projects/ProjectDetail.tsx`

- [ ] Render `/projects` archive list.
- [ ] Render static project detail routes.
- [ ] Add project metadata, not-found handling, and previous/next navigation.

### Task 6: Verification

- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start dev server.
- [ ] Use Playwright to inspect `/`, `/projects`, and one detail page.
