import type { RequestHandler } from '@sveltejs/kit';
import { STATIC_ROUTES, withBase } from '$lib/site';

const xml = (urls: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${loc.endsWith('/') ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

export const GET: RequestHandler = async () => {
  const urls = STATIC_ROUTES.map(withBase);
  return new Response(xml(urls), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};

export const prerender = true;

