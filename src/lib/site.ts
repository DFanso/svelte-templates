export const SITE_URL = (import.meta.env.VITE_SITE_URL as string) || 'http://localhost:5173';
export const SITE_NAME = 'Svelte SEO Template';
export const SITE_TITLE = 'SvelteKit SEO-Friendly Starter';
export const SITE_DESCRIPTION = 'Static, fast, and SEO-focused SvelteKit template with Tailwind and shadcn.';
export const SITE_TWITTER = '@yourscreenname';
export const DEFAULT_OG_IMAGE = '/favicon.svg';

// List of static routes to include in sitemap.
// Add routes here as you create pages.
export const STATIC_ROUTES: string[] = [
  '/',
];

// Utility to resolve absolute URLs
export function withBase(pathname: string) {
  return `${SITE_URL.replace(/\/$/, '')}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
}
