import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), imagetools(), sveltekit()],
	resolve: {
		alias: {
		  $lib: path.resolve("./src/lib"),
		},
	  },
});
