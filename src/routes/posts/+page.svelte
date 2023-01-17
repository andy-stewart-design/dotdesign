<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { posts } = data;
</script>

<Container pt="xl">
	<h1>My Blog</h1>

	<ul class="grid gap-4 md:grid-cols-2">
		{#each posts as post}
			<li>
				<a href={`/posts/${post.slug}`} data-sveltekit-preload-data="hover">
					<h2>
						{post.frontmatter.title}
					</h2>
					Published {post.frontmatter.date}
				</a>
			</li>
		{/each}
	</ul>
</Container>
