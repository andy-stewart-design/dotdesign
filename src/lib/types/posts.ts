import type { SvelteComponent } from 'svelte/internal';

export interface Frontmatter {
	title: string;
	date: string;
	summary: string;
	image: string;
	tags: string[];
}

export interface PostMetadata {
	frontmatter: Frontmatter;
	slug: string;
}

export interface RawPostData {
	metadata: Frontmatter;
	default: typeof SvelteComponent;
}

export interface Post {
	frontmatter: Frontmatter;
	content: typeof SvelteComponent;
}
