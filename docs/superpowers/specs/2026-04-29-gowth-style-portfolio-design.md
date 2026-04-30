# Gowth-Style Portfolio Redesign

## Goal

Build a new portfolio in the existing Next.js workspace that recreates the observed structure and interaction style of `gowth.tech`: animated landing page, section navigation, project archive, and project detail pages.

## Boundary

The implementation will clone the layout, code structure, page flow, and interaction patterns. It will not copy the original site's personal text, identity, email addresses, project claims, or raster assets. Portfolio content will live in local data files so it can be replaced quickly.

## Stack

- Next.js App Router with React and TypeScript
- Tailwind CSS with class-based dark mode and CSS variable tokens
- GSAP and `@gsap/react` for scoped client animations
- Lenis for smooth scrolling
- Sonner for lightweight contact toasts
- Lucide React for icons
- Vitest for data and routing utility coverage

## Pages

- `/`: hero, about, projects, experience, services, contact
- `/projects`: full project archive
- `/projects/[slug]`: project hero, case study, screenshot placeholders, results, previous/next navigation

## Verification

Run unit tests, lint/type checks through build, and verify the local app in Playwright at desktop and mobile widths.
