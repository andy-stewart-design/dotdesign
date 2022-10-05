import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ fetch }: LoadEvent) => {
	const response = await fetch(`/api/feed`);
	const images = await response.json();

	return {
		images
	};
};
