<script lang="ts">
	import type { RawPostData } from 'types/posts';
	interface Data {
		post: RawPostData;
	}

	export let data: Data;
	const { post } = data;
	const { metadata: frontmatter, default: content } = post;
</script>

<h1>{frontmatter.title}</h1>
<p>{frontmatter.summary}</p>
<p>Published: {frontmatter.date}</p>
<svelte:component this={content} />
<ul>
	{#each frontmatter.tags as tag}
		<li>{tag}</li>
	{/each}
</ul>
