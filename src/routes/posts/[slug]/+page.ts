import type { Page } from '@sveltejs/kit';
import type { Post, RawPostData } from 'types/posts';

export const load = async ({ params }: Page): Promise<Post> => {
	const rawPostData: RawPostData = await import(`../../../content/posts/${params.slug}/index.mdx`);

	return {
		frontmatter: rawPostData.metadata,
		content: rawPostData.default
	};
};
