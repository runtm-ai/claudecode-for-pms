# site/

The Next.js source for [claudecodeforpms.com](https://claudecodeforpms.com).

Static export. No DB. Templates are read from the parent repo at build time so
the site and the cloneable repo are always the same source of truth.

## Run locally

```bash
cd site
npm install
npm run dev          # http://localhost:3000
```

## Build for production

```bash
cd site && npm ci && npm run build   # generates site/out/
```

The `site/out/` folder is deployable to any static host. The build reads files
from the repo root (`templates/`, `pr_flow/`, `skills/`), so run the build
from the **repo root**, not from inside `site/`. See the root `README.md` for
platform-specific deploy settings (Vercel config is already committed).

## Project layout

- `src/app/`                 — App Router pages
- `src/components/`          — UI primitives
- `src/lib/practices.ts`     — practice data (slug, title, blurb, related)
- `src/lib/content.ts`       — MDX + repo-file readers
- `src/content/best-practices/*.mdx`  — practice page bodies
- `src/content/skills.json`  — skill catalog (25 entries, 6 shipped)
- `src/content/changelog/*.mdx`       — release notes

## Analytics

Google Analytics 4 with consent banner. Set
`NEXT_PUBLIC_GA4_MEASUREMENT_ID` in `.env.local`. Nothing fires until the
user accepts the banner.

## Edit any page

The footer has an "edit this page on GitHub" link that drops you straight on
the source file. PRs are welcome.
