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
  └── LayoutPageWrapper (components/ui/layouts/PageWrapper)
      └── LayoutDefault (layouts/Base: Header + Main + Footer)
          └── Page component
```

Pages use file-based routing in `src/pages/` and export a `frontmatter` object for metadata (title, description, noindex, draft, etc.). The `frontmatter` prop is **required** throughout the component tree. The `rootDir` property sets the relative path back to root (`'./'` for root pages, `'../'` for one level deep, etc.) and is used to construct all internal URLs.

### Key Directories (under `static-site-generator/src/`)

- `pages/` — File-based routes; each page exports `frontmatter` + default component
- `layouts/Base/` — LayoutDefault (Header/Footer shell)
- `components/common/` — Header, Footer
- `components/ui/layouts/` — PageWrapper, Section, Inner (structural wrappers)
- `components/pages/` — Page-specific components
- `config/routes.ts` — Route definitions with metadata; URL functions take `{ rootDir }` param
- `config/siteInfo.json` — Site-wide metadata (title, URL, Twitter)
- `types/` — Shared TypeScript type definitions
- `assets/css/style.css` — Main CSS entry using CSS Layers
- `assets/post-css/global/` — CSS custom properties (color, font, layout, z-index, breakpoints)
- `stories/` — Storybook stories mirroring component structure

### CSS Architecture

Uses **PostCSS** (not Sass) with CSS Layers for specificity control:

```
@layer reset → lib → base → component-ui-low → component-ui-middle →
       component-ui-high → component-common → component-page → util
```

Responsive mixins defined in `postcss.config.mjs`:
- `@mixin getMediaQueryXs` / `Sm` / `Md` / `Lg` / `Xl` / `Xxl` — min-width breakpoints
- `@mixin getMediaQueryReverse*` — max-width (less than) breakpoints
- `@mixin getMediaQueryBetween*` — range breakpoints
- `@mixin getContainerQuery*` / `getContainerQueryReverse*` — container query variants
- `@mixin getFontSize(px)` — converts to rem
- `@mixin getClampPx(property, min, max)` / `getClampRem(...)` — fluid scaling
- `@mixin getLineClamp(lines)` — text truncation

CSS uses **logical properties** (`inline-size`, `block-size`, `margin-inline`, `padding-block`, etc.) instead of physical properties. Design tokens are defined as CSS custom properties in `assets/post-css/global/` and referenced via `var()`.

Breakpoints: xs=360, sm=576, md=768, lg=992, xl=1200, xxl=1400

### Path Alias

`~/` resolves to `src/` (configured in tsconfig.json and minista.config.ts).

### Storybook

Storybook uses a separate Vite config (`vite-storybook.config.ts`) with `@storybook/react-vite`. Stories live in `src/stories/` mirroring the component directory structure, and use path aliases (`~/`) for imports.

## Code Conventions

- **Components**: Functional arrow functions, PascalCase class names
- **Styling**: CSS with PostCSS, logical properties, PascalCase class names (enforced by StyleLint `^[A-Z]+([a-zA-Z0-9\-_]+)*$`), alphabetical property order
- **Formatting**: Single quotes, no semicolons, 2-space indent, trailing commas (Prettier)
- **Imports**: Alphabetical order with newlines between groups (eslint-plugin-import-x)
- **ESLint**: Flat config format (`eslint.config.js`), TypeScript-aware with `typescript-eslint`
- **Node**: >= 22.0.0 (managed via Volta at 22.20.0)

## CI

Push to any branch triggers GitHub Actions (`push.yml`): format check → stylelint → eslint → typecheck → build.

## Git Workflow

- Branch prefixes: `feature/*`, `bugfix/*`, `hotfix/*`
- PRs from `feature/*` auto-labeled `enhancement`; `bugfix/*`/`hotfix/*` labeled `bug`
- Push to `develop` creates a release PR to `main`
- Push to `main` auto-generates a release tag (`v{YYYY.MM.DD}-{count}`)
