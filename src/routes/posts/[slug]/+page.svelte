<script lang="ts">
	import Image from '@components/global/Image.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { metadata, content } = data.post;
</script>

<div class="flex items-center gap-3">
	<ul class="categories">
		{#each metadata.tags as tag}
			<li class="category">
				<span class="inline-block pb-px">{tag}</span>
			</li>
		{/each}
	</ul>
	<span class="font-medium text-sm text-level-01/80">{metadata.date}</span>
</div>
<h1>{metadata.title}</h1>
<p>{metadata.summary}</p>
{#if metadata.image}
	<Image
		cloud
		src={metadata.image}
		class="aspect-auto object-cover blog:col-popout my-4 rounded-2xl"
		sizes={[480, 960, 1400]}
		alt="Carbon Direct business cards"
		loading="eager"
		width="1920"
		height="1080"
	/>
{/if}
<!-- <img class="col-popout" src={metadata.image} alt="kjenfjc" /> -->
<svelte:component this={content} />

<style scoped lang="postcss">
	.categories {
		@apply list-none p-0;
	}
	.category {
		@apply font-medium text-sm border border-level-01/15 m-0 py-0.5 px-1.5 rounded;
	}
</style>
