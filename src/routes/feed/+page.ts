import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ fetch }: LoadEvent) => {
	const fetchImages = async () => {
		try {
			const res = await fetch(`/api/feed`);
			return await res.json();
		} catch (err) {
			console.error(err);
		}
	};

	return {
		images: fetchImages()
	};
};
