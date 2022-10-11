import { fetchMarkdownMetadata } from '$lib/utils/mdx';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownMetadata();
	return json(allPosts);
};
