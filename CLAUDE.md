# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000/
npm run build    # Static export to /out
npm run lint     # ESLint
```

No test runner is configured.

## Architecture

Single-page marketing site for GEVS (QA consultancy), built with Next.js 16 static export (`output: 'export'`). Deployed to GitHub Pages via `.github/workflows/deploy.yml`.

### Routing

- `app/page.tsx` — the single page; serves the entire site at `/`
- `app/layout.tsx` — root layout with `<html lang="en">`, Inter font, and global CSS

### Content

All user-facing strings live in `lib/content/` as `as const` objects — never hardcoded in JSX:

| File | Covers |
|------|--------|
| `lib/content/i18n.ts` | Contact section strings (heading, labels, email). `Locale = 'en'` only. |
| `lib/content/hero.ts` | Hero section copy |
| `lib/content/services.ts` | Services cards |
| `lib/content/about.ts` | Team members |
| `lib/content/tech.ts` | Tech stack tools (slugs must match filenames in `public/tech-logos/`) |

### Component conventions

- All components are **Server Components** by default (no `'use client'`)
- Only `components/ui/ContactForm.tsx` is a client component (handles form state)
- `ContactSection` reads directly from `siteContent['en']` in `i18n.ts` and passes labels to `ContactForm`

### Contact form

`ContactForm` posts to [Web3Forms](https://web3forms.com) (`https://api.web3forms.com/submit`). The access key is read from `process.env.NEXT_PUBLIC_WEB3FORMS_KEY` (set in `.env.local`).

### Static assets

No `basePath` is configured — the site is served at the root of the custom domain `gevs.dev`. Use plain `<img>` tags for assets in `public/` with paths like `/tech-logos/foo.svg`. Do **not** use `next/image` (`unoptimized: true` with `output: 'export'` does not reliably resolve asset paths).

### Tech logos

SVG files in `public/tech-logos/` must be **monochrome** (no `fill` color attribute, defaulting to black). Logos sourced from [simpleicons.org](https://simpleicons.org) often include a colored `fill` attribute — strip it before saving. In `TechStackSection.tsx`, all logos use the Tailwind `grayscale` filter class so they display grey at rest and reveal color on hover. Adding a new tool: place the SVG in `public/tech-logos/<slug>.svg`, add an entry in `lib/content/tech.ts`, and verify the slug matches the filename exactly.
