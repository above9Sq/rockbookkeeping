# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview the production build locally
npm run check        # Run all checks (astro type-check + eslint + prettier)
npm run fix          # Auto-fix ESLint and Prettier issues
```

There are no tests in this project.

## Architecture

This is a static **Astro** marketing site for Rock Bookkeeping. It deploys to Vercel.

**Page composition pattern:** Pages (in `src/pages/`) are thin compositions of widget components. For example, the homepage assembles `HomeHero → Testimonial → Services → Pricing → HomeFAQ → Contact` with no logic of its own.

**Component layers:**
- `src/components/widgets/` — large page-section components (Hero, Pricing, FAQ, Contact, etc.)
- `src/components/ui/` — generic building blocks (Headline, Button, ItemGrid, Timeline)
- `src/components/common/` — infrastructure (analytics, metadata, SEO schema)
- `src/components/blog/` — blog infrastructure (currently disabled in `config.yaml`)

**Single sources of truth:**
- `src/navigation.ts` — all header/footer links
- `src/faqs.ts` — all FAQ content
- `src/config/contact.ts` — phone and email
- `src/theme.ts` — color theme definitions
- `src/config.yaml` — site-wide config (domain, analytics ID, feature flags)

**Path alias:** `~` maps to `src/` (configured in both `tsconfig.json` and `astro.config.ts`).

**Styling:** Tailwind CSS 4 with custom theme tokens defined in `src/styles/global.css`. Color palette is also defined in `src/theme.ts` and `tailwind.config.ts`.

**Content collections:** Blog posts live in `src/data/post/` and are loaded via Astro's glob loader. The blog is disabled (`isEnabled: false` in `config.yaml`) but the infrastructure remains.

**SEO:** `src/components/common/` handles metadata, OpenGraph, and structured data (LocalBusinessSchema, FAQSchema in `src/components/seo/`).
