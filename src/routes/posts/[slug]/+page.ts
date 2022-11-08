import { error, type Page } from '@sveltejs/kit';
import type { RawPostData } from 'types/posts';

export const load = async ({ params }: Page) => {
	const fetchPost = async () => {
		try {
			const rawPostData: RawPostData = await import(
				`../../../content/posts/${params.slug}/index.mdx`
			);
			return rawPostData;
		} catch {
			throw error(404, 'The page you are looking for does not exist');
		}
	};

	return {
		post: fetchPost()
	};
};
