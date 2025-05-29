import adapter from '@sveltejs/adapter-static';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		svelte({
			preprocess: mdsvex()
		})
	],

	kit: {
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		})
	}
};

export default config;
