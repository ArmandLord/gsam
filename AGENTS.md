<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# boda-gsap

Minimal Next.js 16 + GSAP + Tailwind CSS v4 project.

## Commands

```bash
pnpm dev        # dev server (localhost:3000)
pnpm build      # production build
pnpm start      # start production server
pnpm lint       # eslint (flat config, eslint.config.mjs)
```

No test runner, no typecheck script (`tsc --noEmit` must be run explicitly if needed).

## Package manager

**pnpm** only. Do not use npm or yarn.

## Framework & tooling quirks

- **Next.js 16 breaking changes**: see migration guide at `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md` and read the relevant section before any codegen or config changes.
- **App Router only** (no `pages/` directory).
- **Tailwind CSS v4**: uses `@import "tailwindcss"` (not `@tailwind` directives) and `@theme` for custom tokens.
- **ESLint flat config** — do NOT create `.eslintrc.*`. Run `pnpm lint` (not `next lint`).
- **`@/*`** maps to project root (via `tsconfig.json` paths).

## GSAP

- GSAP animations **must** go inside `'use client'` components, wrapped in `useEffect` (or a React ref + `useLayoutEffect`). Calling `gsap.to()` at the top level of a Server Component will crash during SSR.
- Do **not** import GSAP plugins without also registering them via `gsap.registerPlugin()`.

## File structure

```
app/
  layout.tsx    # root layout (server component)
  page.tsx      # home page — currently has top-level gsap.to() bug
  globals.css   # Tailwind v4 entrypoint + theme vars
next.config.ts  # minimal, no special config
```
