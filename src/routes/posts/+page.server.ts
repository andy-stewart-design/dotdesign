import type { PageServerLoadEvent } from './$types';
import type { PostMetadata } from 'types/posts';

export const load = async ({ fetch }: PageServerLoadEvent) => {
	const response = await fetch(`/api/posts`);
	const posts: PostMetadata = await response.json();

	return {
		posts
	};
};
