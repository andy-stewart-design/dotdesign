import type { PageServerLoadEvent } from './$types';
import { error } from '@sveltejs/kit';
import type { RawPostData } from 'types/posts';

export const load = async ({ params }: PageServerLoadEvent) => {
	const fetchPost = async () => {
		try {
			const rawPostData: RawPostData = await import(
				`../../../content/posts/${params.slug}/index.mdx`
			);
			const { metadata, default: post } = rawPostData;
			const { html: content } = (post as any).render();

			return { metadata, content };
		} catch {
			throw error(404, 'The page you are looking for does not exist');
		}
	};

	return {
		post: fetchPost()
	};
	// return {
	// 	post: 'hello'
	// };
};
