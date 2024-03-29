import type { PageLoadEvent } from './$types';
import { error } from '@sveltejs/kit';
import type { RawPostData } from 'types/posts';

export const prerender = 'auto';

export const load = async ({ params }: PageLoadEvent) => {
	const fetchPost = async () => {
		try {
			const rawPostData: RawPostData = await import(
				`../../../content/posts/${params.slug}/index.mdx`
			);
			const { metadata, default: content } = rawPostData;

			return { metadata, content };
		} catch {
			throw error(404, 'The page you are looking for does not exist');
		}
	};

	return {
		post: fetchPost()
	};
};
