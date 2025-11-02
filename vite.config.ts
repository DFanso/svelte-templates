import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		imagetools(),
        SvelteKitPWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            includeAssets: ['favicon.svg', 'robots.txt'],
            workbox: {
                globPatterns: []
            },
            manifest: {
                name: 'SvelteKit Static SEO Template',
                short_name: 'Svelte SEO',
                description: 'Static, fast, and SEO‑focused SvelteKit template with Tailwind and shadcn.',
                display: 'standalone',
                start_url: '/',
                scope: '/',
                background_color: '#ffffff',
                theme_color: '#0ea5e9',
                icons: [
                    {
                        src: '/favicon.svg',
                        sizes: 'any',
                        type: 'image/svg+xml',
                        purpose: 'any maskable'
                    }
                ]
            },
            devOptions: {
                enabled: true
            }
        }),
		sveltekit()
	],
	resolve: {
		alias: {
		  $lib: path.resolve("./src/lib"),
		},
	  },
});
