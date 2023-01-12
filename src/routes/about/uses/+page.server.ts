import type { PageServerLoadEvent } from './$types';

export const load = async ({ fetch }: PageServerLoadEvent) => {
	return { msg: 'Hello from the server!' };
};
