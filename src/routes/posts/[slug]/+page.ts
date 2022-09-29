import type { Page } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

interface Frontmatter {
	title: string;
	date: string;
}

interface Post {
	metadata: Frontmatter;
	default: typeof SvelteComponent;
}

export async function load({ params }: Page) {
	const post: Post = await import(`../../../content/posts/${params.slug}.mdx`);

	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
