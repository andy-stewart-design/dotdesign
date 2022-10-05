// @ts-nocheck
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/content/posts/*.mdx');

	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace(/^(.*[\\\/])/, '').replace('.mdx', '');

			return {
				frontmatter: metadata,
				slug: postPath
			};
		})
	);

	return allPosts;
};
