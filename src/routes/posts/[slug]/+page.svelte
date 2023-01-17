<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
	const { metadata, content } = data.post;
</script>

<h1>{metadata.title}</h1>
<p>{metadata.summary}</p>
<p>Published: {metadata.date}</p>
{@html content}
<ul>
	{#each metadata.tags as tag}
		<li>{tag}</li>
	{/each}
</ul>
