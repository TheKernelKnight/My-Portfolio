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

## Project assets

Each project's images live under `public/`, keyed by a project number (BookMe is project `1`):

```
public/
  thumbnails/1/thumbnail.svg     # card thumbnail, ~1200x800, 3:2 ratio
  screenshots/1/screenshot-1.svg # case-study screenshot gallery (any count)
  screenshots/1/screenshot-2.svg
  screenshots/1/screenshot-3.svg
  architecture/1/architecture.svg # architecture diagram(s)
```

These currently contain placeholder SVGs so the build never breaks on a missing
file. To add real images:

1. Drop your real files into the matching folder (jpg/png/webp are all fine).
2. Update the `src` paths in `src/sections/Projects.jsx` to point at the new
   filenames.
3. For a second project, duplicate the pattern as `thumbnails/2/`,
   `screenshots/2/`, `architecture/2/`, and add a new entry to the
   `PROJECTS` array in `Projects.jsx`.

The case study `stats` in `Projects.jsx` are placeholders (`Add %`, `Add #`) —
swap in your real numbers once you have them.

## Notes

- Reduced-motion is respected globally (`prefers-reduced-motion`).
- The navbar has a keyboard-focusable "Skip to content" link and visible focus rings throughout.
- Skill icons are original monoline SVGs, not brand logos.
- Update the featured project list in `src/sections/Projects.jsx` as new work ships.
