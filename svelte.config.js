import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.mdx'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md', '.mdx']
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@styles': './src/lib/styles',
			'@components': './src/lib/components',
			'@utils': './src/lib/utils'
		}
	}
};

export default config;
