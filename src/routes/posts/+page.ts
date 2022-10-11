import type { LoadEvent } from '@sveltejs/kit';
import type { PostMetadata } from 'types/posts';

export const load = async ({ fetch }: LoadEvent) => {
	const response = await fetch(`/api/posts`);
	const posts: PostMetadata = await response.json();

	return {
		posts
	};
};
