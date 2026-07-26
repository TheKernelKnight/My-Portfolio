# Bentlemsani Mo. Amine — Developer Portfolio

A dark, minimal, premium single-page portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack
- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Navbar, Blob, SkillCard, ProjectCard, CopyEmailButton, Footer, icons
  sections/     Hero, About, Skills, Projects, Contact
  hooks/        useActiveSection, useMouseParallax
  styles/       index.css (Tailwind + design tokens)
  App.jsx
  main.jsx
```

## Design tokens

| Token | Value |
|---|---|
| Background | `#05060A` |
| Card | `#0E1017` |
| Primary accent | `#6C63FF` |
| Secondary accent | `#4F8BFF` |
| Text | `#FFFFFF` |
| Secondary text | `#A0A7B4` |
| Border | `rgba(255,255,255,.08)` |

## Notes

- Reduced-motion is respected globally (`prefers-reduced-motion`).
- The navbar has a keyboard-focusable "Skip to content" link and visible focus rings throughout.
- Skill icons are original monoline SVGs, not brand logos.
- Update the featured project list in `src/sections/Projects.jsx` as new work ships.
