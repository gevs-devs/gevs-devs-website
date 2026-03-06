# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000/it/
npm run build    # Static export to /out (production, applies basePath)
npm run lint     # ESLint
```

No test runner is configured.

## Architecture

Single-page marketing site for GEVS (QA consultancy), built with Next.js 16 static export (`output: 'export'`). Deployed to GitHub Pages via `.github/workflows/deploy.yml`.

### Routing

- `app/page.tsx` — root route; client-side meta refresh redirect to `/it`
- `app/[locale]/page.tsx` — main page, rendered for `it` and `en` via `generateStaticParams`
- `app/[locale]/layout.tsx` — passthrough only; `<html lang>` is set in the root layout due to static export constraints

### Content

All user-facing strings live in `lib/content/` as `as const` objects — never hardcoded in JSX:

| File | Covers |
|------|--------|
| `lib/content/i18n.ts` | Locale-aware strings: SEO metadata + contact form labels (`Locale = 'it' \| 'en'`) |
| `lib/content/hero.ts` | Hero section copy |
| `lib/content/services.ts` | Services cards |
| `lib/content/about.ts` | Team members |
| `lib/content/tech.ts` | Tech stack tools (slugs must match filenames in `public/tech-logos/`) |

### Component conventions

- All components are **Server Components** by default (no `'use client'`)
- Only `components/ui/ContactForm.tsx` is a client component (handles form state)
- The pattern for locale-aware sections: server component receives `locale` prop → reads from `siteContent[locale]` in `i18n.ts` → passes labels down to any client child

### Contact form

`ContactForm` posts to [Web3Forms](https://web3forms.com) (`https://api.web3forms.com/submit`). The access key is read from `process.env.NEXT_PUBLIC_WEB3FORMS_KEY` (set in `.env.local`).

### basePath / static assets

`basePath` is conditional in `next.config.ts`:
- **dev** (`NODE_ENV !== 'production'`): `basePath = ''` → site at `http://localhost:3000/it/`
- **production** (`npm run build`): `basePath = '/gevs-devs-website'` → matches the GitHub Pages repo sub-path

Use plain `<img>` tags for static assets in `public/`; they resolve correctly in both environments because of the conditional basePath. Do **not** use `next/image` here since `unoptimized: true` with `output: 'export'` does not automatically apply the basePath to `src`.
