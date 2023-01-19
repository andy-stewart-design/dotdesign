<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { posts } = data;
</script>

<Container py="xl">
	<secion class="grid gap-8 max-w-3xl mx-auto">
		{#each posts as post}
			<article>
				<a class="grid gap-3" href={`/posts/${post.slug}`} data-sveltekit-preload-data="hover">
					<h2 class="font-semibold text-3xl">
						{post.frontmatter.title}
					</h2>
					<p class="">{post.frontmatter.summary}</p>
					<p class="font-medium text-sm">Published {post.frontmatter.date}</p>
				</a>
			</article>
		{/each}
	</secion>
</Container>
