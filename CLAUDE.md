# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static site generator built with React, TypeScript, and [Minista](https://minista.qranoko.jp/). Minista generates static HTML from React components — this is **not** a SPA. The main application lives in `static-site-generator/`.

## Commands

All commands run from `static-site-generator/`:

```bash
# Development
npm run dev              # Dev server at http://localhost:3000
npm run storybook        # Storybook at http://localhost:6006

# Build
npm run build            # Generate static site to dist/
npm run preview          # Preview production build
npm run clean            # Remove dist/

# Quality (run all at once with: npm run pre-commit)
npm run typecheck        # tsc -b
npm run lint-fix         # ESLint with auto-fix
npm run stylelint-fix    # StyleLint with auto-fix
npm run format-fix       # Prettier with auto-fix

# Docker alternative
docker compose up -d
docker compose exec node npm install
docker compose exec node npm run dev
```

## Architecture

### Page Rendering Pipeline

```
root.tsx (SEO meta, global scripts)
  └── LayoutWrapper
      └── LayoutDefault (Base layout: Header + Main + Footer)
          └── Page component
```

Pages use file-based routing in `src/pages/` and export a `frontmatter` object for metadata (title, description, noindex, draft, etc.).

### Key Directories (under `static-site-generator/src/`)

- `pages/` — File-based routes; each page exports `frontmatter` + default component
- `layouts/` — `Base/` (Header/Footer shell) and `Wrapper/` (root div)
- `components/common/` — Header, Footer
- `components/layout/` — Section, Inner (structural wrappers)
- `config/routes.ts` — Route definitions with metadata
- `config/siteInfo.json` — Site-wide metadata (title, URL, Twitter)
- `types/` — Shared TypeScript type definitions
- `assets/scss/global/` — Variables, mixins, breakpoints

### Path Alias

`~/` resolves to `src/` (configured in tsconfig.json and minista.config.ts).

## Code Conventions

- **Components**: Functional arrow functions, PascalCase class names
- **Styling**: SCSS with PascalCase class names (enforced by StyleLint), alphabetical property order
- **Formatting**: Single quotes, no semicolons, 2-space indent, trailing commas
- **Node**: >= 22.0.0 (managed via Volta at 22.20.0)

## Git Workflow

- Branch prefixes: `feature/*`, `bugfix/*`, `hotfix/*`
- PRs from `feature/*` auto-labeled `enhancement`; `bugfix/*`/`hotfix/*` labeled `bug`
- Push to `develop` creates a release PR to `main`
- Push to `main` auto-generates a release tag (`v{YYYY.MM.DD}-{count}`)
