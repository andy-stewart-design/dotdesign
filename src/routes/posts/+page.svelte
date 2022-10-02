<script lang="ts">
	interface Frontmatter {
		title: string;
		date: string;
	}

	interface Post {
		frontmatter: Frontmatter;
		slug: string;
	}

	interface Data {
		posts: Post[];
	}

	export let data: Data;
	const { posts } = data;
</script>

<h1>My Blog</h1>

<ul>
	{#each posts as post}
		<li>
			<a href={`/posts/${post.slug}`} data-sveltekit-prefetch>
				<h2>
					{post.frontmatter.title}
				</h2>
				Published {post.frontmatter.date}
			</a>
		</li>
	{/each}
</ul>
