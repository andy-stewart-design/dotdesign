import type { PostMetadata, RawPostData } from '$lib/types/posts';

export const fetchMarkdownMetadata = async () => {
	const allPostFiles = import.meta.glob('/src/content/posts/**/index.mdx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPostsMetadata: PostMetadata[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as RawPostData;
			const postPath = path.replace('/src/content/posts/', '').replace('/index.mdx', '');

			return {
				frontmatter: metadata,
				slug: postPath
			};
		})
	);

	return allPostsMetadata;
};
