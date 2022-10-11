<script lang="ts">
	import type { Post } from 'types/posts';

	export let data: Post;
	const { frontmatter, content } = data;
</script>

<h1>{frontmatter.title}</h1>
<p>Published: {frontmatter.date}</p>
<svelte:component this={content} />
<ul>
	{#each frontmatter.tags as tag}
		<li>{tag}</li>
	{/each}
</ul>
