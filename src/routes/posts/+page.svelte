<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import type { PostMetadata } from 'types/posts';

	interface Data {
		posts: PostMetadata[];
	}

	export let data: Data;
	const { posts } = data;
</script>

<Container pt="md">
	<h1>My Blog</h1>

	<ul class="grid gap-4 md:grid-cols-2">
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
</Container>
