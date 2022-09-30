/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
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
