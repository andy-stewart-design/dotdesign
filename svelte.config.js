/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import highlighter from './src/lib/utils/codeHighlighter.js';
import { mdsvex } from 'mdsvex';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	extensions: ['.svelte', '.md', '.mdx'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md', '.mdx'],
			highlight: {
				highlighter
			},
			smartypants: {
				quotes: true,
				ellipses: true,
				backticks: true,
				dashes: 'oldschool'
			}
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@actions': './src/lib/actions',
			'@components': './src/lib/components',
			'@content': './src/content',
			'@icons': './src/lib/icons',
			'@posts': './src/content/posts',
			'@styles': './src/lib/styles',
			types: './src/lib/types',
			'@utils': './src/lib/utils'
		}
	}
};

export default config;
