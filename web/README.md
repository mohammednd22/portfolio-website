# mohammednd.com — v2

A redesigned personal site. Next.js 15 (App Router) · TypeScript · Tailwind v4 · Framer Motion.

The previous version lives next door in `../portfolio_website` and is untouched.

## Run it

```bash
cd web
npm install      # only the first time
npm run dev      # http://localhost:3000
```

Build:

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    layout.tsx       # fonts, metadata, theme
    page.tsx         # composes the sections
    globals.css      # design tokens (Tailwind v4 @theme)
  components/
    Nav.tsx          # sticky nav + scroll-spy
    Hero.tsx
    About.tsx
    Experience.tsx
    Work.tsx
    Contact.tsx
    Footer.tsx
    SideRail.tsx     # fixed left socials / right email (≥ xl)
    Reveal.tsx       # shared scroll-fade
    SectionHeading.tsx
  lib/
    content.ts       # single source of truth for all copy & data
public/
  logos/             # company logos used on the experience timeline
  projects/          # project thumbnails
  resume.pdf
  favicon.svg
```

All copy and data lives in `src/lib/content.ts` — editing that file is enough to update names, dates, bullets, projects, social links, etc.
