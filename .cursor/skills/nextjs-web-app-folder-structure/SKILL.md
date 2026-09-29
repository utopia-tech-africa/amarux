---
name: nextjs-web-app-folder-structure
description: >-
  Documents Next.js App Router web app folder structure, kebab-case naming,
  barrel exports, and assets conventions. Use when scaffolding a Next.js
  marketing/web app, organizing routes and components, adding page sections,
  setting up assets/SVG barrels, or when the user asks to follow this folder
  structure / naming / exports pattern.
---

# Next.js Web App Folder Structure

Apply these conventions when creating or restructuring a Next.js App Router web app.

## Top-level layout

```
apps/web/   (or project root for a single app)
├── app/           # App Router: pages, API, admin, shared home sections
├── assets/        # Bundled SVG/PNG + barrels
├── components/    # Shared chrome + shadcn ui/
├── constants/     # Small static config
├── hooks/         # Shared hooks (use-*.ts)
├── i18n/          # next-intl routing / navigation (if localized)
├── lib/           # Domain logic (not presentational)
├── messages/      # Locale JSON (en.json, fr.json, es.json, …)
├── public/        # Static files served as-is (videos, large media)
└── …
```

Path alias: `@/*` → app root (`tsconfig` paths).

Do **not** invent a top-level `features/` folder for this pattern.

## Naming

| Kind | Convention | Example |
|------|------------|---------|
| Folders | kebab-case | `leadership-institute/`, `finfest-hero/` |
| Files | kebab-case | `home-hero.tsx`, `asc-whats-covered.tsx` |
| Components | PascalCase exports | `HomeHero`, `FinfestHero` |
| Routes | kebab-case | `/billion-dollar-challenge` |
| Message namespaces | camelCase | `accessScholarships`, `finfest.hero` |
| Hooks | `use-*.ts` | `use-in-view-video.ts` |
| Feature prefixes (optional) | short prefix on files | `asc-*`, `bdc-*`, `campaigns-*`, `finfest-*` |

Never PascalCase folders or files.

## Barrel exports

### Marketing / locale pages (canonical)

```
app/[locale]/<route>/
  page.tsx
  components/
    index.ts                 # re-export every section
    <section>/
      index.ts               # export * from "./<section>"
      <section>.tsx
```

Rules:

1. New section → create folder + file + local `index.ts`
2. Re-export from parent `components/index.ts`
3. Page imports from `./components` (not deep paths when barreled)
4. Shared multi-file chrome (`header/`, `footer/`) → feature-level `index.ts`
5. shadcn `components/ui/*` → import file path directly (`@/components/ui/button`)
6. Most `lib/` modules → `@/lib/<file>`; use a domain barrel only when intentional (e.g. `lib/sanity`)

### Home / cross-page marketing blocks

Reusable home sections live in `app/components/<section>/` with the same barrel pattern. The home `page.tsx` imports from there.

## Assets

```
assets/
├── index.ts       # export * from "./img"; export * from "./svg";
├── img/
│   ├── index.ts   # raster / social icons
│   └── *.png
├── svg/
│   ├── index.ts   # curated named PascalCase exports
│   ├── *.svg      # static SVG imports
│   └── *.tsx      # React SVG components (logos, patterns)
└── gif/           # rarely barreled; prefer public/ for large media
```

Rules:

- Decorative patterns / logos → `assets/svg/<kebab-name>.tsx` or `.svg`
- Export as **PascalCase** from `assets/svg/index.ts`
- Prefer `import { X } from "@/assets"` or `@/assets/svg`
- Large videos / posters → `public/` (not assets barrels)
- Always add new shared SVGs to the barrel; avoid permanent direct-path-only imports for shared assets

## Page composition checklist

When adding a marketing page or section:

1. Create route under `app/[locale]/<kebab-route>/` (omit `[locale]` if app is not localized)
2. Colocate sections in `components/<kebab-section>/`
3. Add section `index.ts` + parent `components/index.ts` re-export
4. Compose sections in `page.tsx` (metadata + stacked sections)
5. Add matching camelCase keys in **all** locale message files
6. Use `@/components/ui/*` for primitives; layout helpers for **horizontal padding/gutters only** — do **not** wrap sections in a site-wide `max-width` / centered page shell. Full-bleed sections span the viewport; gutters handle inset. Per-block text measure (`max-w-*` on a paragraph/headline) is fine when matching the design.
7. Put truly shared chrome in `components/`; page-only UI under the route

## Anti-patterns

- Importing unused monorepo starter packages (e.g. `@repo/ui`) when local shadcn `components/ui` exists
- Top-level `features/` mirroring routes
- PascalCase file/folder names
- Leaving new shared SVGs out of `assets/svg/index.ts`
- Deep-importing every section when a parent barrel should exist
- Site-wide `max-w-*` / `max-w-screen-*` / `--page-max` on section containers or a global `Container`

## Quick scaffold example

New page `/example-page` with a hero section:

```
app/[locale]/example-page/
  page.tsx
  components/
    index.ts
    example-hero/
      index.ts
      example-hero.tsx
```

`components/index.ts`:
```ts
export * from "./example-hero";
```

`example-hero/index.ts`:
```ts
export * from "./example-hero";
```

`page.tsx`:
```ts
import { ExampleHero } from "./components";

export default function ExamplePage() {
  return (
    <div className="space-y-20">
      <ExampleHero />
    </div>
  );
}
```
