<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	interface Data {
		title: string;
		date: string;
		content: typeof SvelteComponent;
	}

	export let data: Data;
</script>

<article>
	<h1 class="heading-01">{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
