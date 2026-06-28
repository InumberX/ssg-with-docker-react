# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static site generator built with React 19, TypeScript, and [Minista v4](https://minista.qranoko.jp/). Minista v4 runs as a wrapper around Vite — the config is a standard Vite config and SSG/asset features are provided as Vite plugins. It generates static HTML from React components — this is **not** a SPA. The application lives at the repository root.

## Commands

All commands run from the repository root:

```bash
# Development
npm run dev              # Dev server at http://localhost:3000
npm run storybook        # Storybook at http://localhost:6006

# Test
npm run test             # Vitest in watch mode
npm run test-run         # Vitest single run (used in CI)

# Build
npm run build            # Generate static site to dist/
npm run preview          # Preview production build
npm run clean            # Remove dist/

# Quality (run all at once with: npm run pre-commit)
npm run typecheck        # tsc -b
npm run lint-fix         # oxlint with auto-fix
npm run stylelint-fix    # StyleLint with auto-fix
npm run format-fix       # oxfmt with auto-fix
```

## Architecture

### Page Rendering Pipeline

Minista v4 generates the `<html>`/`<head>`/`<body>` shell itself and wraps every page in the global layout (`src/layouts/index.tsx`). `<head>` content is injected via `<Head>` from `minista/head`.

```
src/layouts/index.tsx (global layout: SEO meta via <Head>, global scripts, <html lang>)
  └── LayoutPageWrapper (components/ui/layouts/PageWrapper)
      └── Page component (src/pages/*)
          └── LayoutDefault (layouts/Base: Header + Main + Footer)
              └── page content
```

Pages use file-based routing in `src/pages/` and export a `metadata` object (the v4 name minista reads) for page metadata (title, description, noindex, draft, rootDir, etc.). Minista spreads each page's `metadata` (plus `url`) into the props of both the global layout and the page component. Within the component tree this object is passed around as the `metadata` prop (type `Metadata`), which Header/Footer/LayoutDefault require. The `rootDir` property sets the relative path back to root (`'./'` for root pages, `'../'` for one level deep, etc.) and is used to construct all internal URLs; the global layout reads minista's `url` prop for canonical/OG URLs.

### Key Directories (under `src/`)

- `pages/` — File-based routes; each page exports `metadata` + default component
- `layouts/index.tsx` — Global layout minista wraps every page in (SEO `<Head>`, global scripts, CSS entry)
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

`~/` resolves to `src/` (defined in tsconfig.json `paths` and applied via Vite's native `resolve.tsconfigPaths: true` in minista.config.ts and vite-storybook.config.ts).

### Storybook

Storybook uses a separate Vite config (`vite-storybook.config.ts`) with `@storybook/react-vite`. Stories live in `src/stories/` mirroring the component directory structure, and use path aliases (`~/`) for imports.

### Testing

Vitest with `jsdom` and `@testing-library/react`. Config in `vitest.config.ts` (React plugin, `globals: true`, `~/` resolved via `resolve.tsconfigPaths`); `vitest-env.ts` registers `@testing-library/jest-dom` matchers. Tests live in `src/tests/` mirroring the component directory structure as `index.test.tsx`, and import test helpers (`describe`/`test`/`expect`/`vi`) explicitly from `vitest`.

## Code Conventions

- **Components**: Functional arrow functions, PascalCase class names
- **Styling**: CSS with PostCSS, logical properties, PascalCase class names (enforced by StyleLint `^[A-Z]+([a-zA-Z0-9\-_]+)*$`), alphabetical property order
- **Formatting**: Single quotes, no semicolons, 2-space indent, trailing commas (oxfmt, configured in `.oxfmtrc.json`)
- **Imports**: Grouped with newlines between groups, sorted (oxfmt `sortImports`)
- **Lint**: oxlint (`.oxlintrc.json`), TypeScript- and React-aware (`typescript`/`react` plugins)
- **Node**: >= 24.0.0 (managed via Volta at 24.16.0)

## CI

Push to any branch triggers GitHub Actions (`push.yml`): a `lint` job (format check → stylelint → lint → typecheck) and a `test` job (`test-run`) run in parallel, then `build`.

## Git Workflow

- Branch prefixes: `feature/*`, `bugfix/*`, `hotfix/*`
- PRs from `feature/*` auto-labeled `enhancement`; `bugfix/*`/`hotfix/*` labeled `bug`
- Push to `develop` creates a release PR to `main`
- Push to `main` auto-generates a release tag (`v{YYYY.MM.DD}-{count}`)
