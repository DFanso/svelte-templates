# SvelteKit Static SEO Template

Static, fast, and SEO‑friendly SvelteKit starter pre‑wired with Tailwind CSS v4, shadcn‑svelte UI primitives, sitemap generation, canonical/OG/Twitter meta tags, and image optimization.

## Features

- Static export via `@sveltejs/adapter-static` (prerender on by default)
- Canonical, Open Graph, and Twitter meta tags in the root layout
- Sitemap at `/sitemap.xml` powered by a simple route list
- Robots.txt with sitemap hint
- Image optimization via `vite-imagetools`
- Tailwind CSS v4 + shadcn‑svelte components
- TypeScript + strict mode

## Quick Start

```bash
# install deps
bun install # or: npm i / pnpm i / yarn

# dev
bun run dev

# typecheck (optional)
bun run check

# build + preview static output
bun run build
bun run preview
```

## Configure Your Site

Edit `src/lib/site.ts` to set core metadata used across pages.

- `SITE_URL` – public base URL of your site. You can also set `VITE_SITE_URL` in a `.env` file.
- `SITE_NAME`, `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_TWITTER` – defaults for meta tags.
- `STATIC_ROUTES` – list of static routes to include in the sitemap.

```ts
// src/lib/site.ts
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string) || 'https://your-domain.tld';
export const SITE_NAME = 'Svelte SEO Template';
export const SITE_TITLE = 'SvelteKit SEO-Friendly Starter';
export const SITE_DESCRIPTION = 'Static, fast, and SEO-focused SvelteKit template with Tailwind and shadcn.';
export const SITE_TWITTER = '@yourscreenname';
export const STATIC_ROUTES = ['/', '/about/'];
```

If you use `.env`, create `.env` or `.env.local`:

```env
VITE_SITE_URL=https://your-domain.tld
```

## SEO Details

- Global meta: The root layout (`src/routes/+layout.svelte`) sets canonical, title, description, OG, and Twitter tags from `site.ts`.
- Per‑page meta: Add a `<svelte:head>` block to a page or slot props to override per route as needed.
- Sitemap: Implemented at `src/routes/sitemap.xml/+server.ts`, fed by `STATIC_ROUTES` and `SITE_URL`.
- Robots: `static/robots.txt` includes a `Sitemap:` line. Update the domain as needed.
- Favicon: The project serves `/favicon.svg`. You can also add a `/favicon.ico` to silence extra browser requests.

### Example per‑page meta

```svelte
<!-- src/routes/about/+page.svelte -->
<svelte:head>
  <title>About – My Site</title>
  <meta name="description" content="About my site" />
  <link rel="canonical" href="https://your-domain.tld/about/" />
</svelte:head>

<h1>About</h1>
```

## Image Optimization

`vite-imagetools` enables responsive/optimized images with query params. Example:

```svelte
<img src={(new URL('../lib/assets/hero.jpg', import.meta.url)).href + '?w=800;1200&format=webp;jpg'} alt="Hero" />
```

See the imagetools docs for full usage.

## Commands

- `bun run dev` – start dev server
- `bun run build` – build static site
- `bun run preview` – preview production build
- `bun run check` – typecheck with `svelte-check`
- `bun run format` – format with Prettier
- `bun run lint` – Prettier check + ESLint

## Deploy

This template builds a static site to `build/` using the static adapter. Host the output on any static host (Netlify, Vercel static, S3/CloudFront, GitHub Pages, etc.).

If you add dynamic (non‑prerendered) routes later, switch adapters or configure your host accordingly.

## Notes

- Svelte 5 runes are enabled. Use `$state`, `$derived`, `$effect` instead of legacy `$:` patterns.
- Path aliases are configured via `kit.alias` in `svelte.config.js`.

## License

MIT
