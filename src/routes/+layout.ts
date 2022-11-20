import type { LoadEvent } from '@sveltejs/kit';

export const load = ({ url: { pathname } }: LoadEvent) => {
	return { pathname };
};
