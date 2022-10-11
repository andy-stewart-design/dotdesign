<script lang="ts">
	import type { FeedImageData } from '$lib/types/feed';
	import Image from '@components/global/Image.svelte';
	import Video from '@components/Video.svelte';
	export let image: FeedImageData;
	export let index: number;
</script>

<button
	on:click
	class="bg-gray-200 dark:bg-black rounded-lg overflow-hidden select-none focus:outline-none focus-visible:outline-blue-500"
	name={image.slug}
>
	{#if image.filetype === 'image'}
		<Image
			src={image.slug}
			class="aspect-square"
			loading={index < 4 ? 'eager' : 'lazy'}
			width="1080"
			height="1080"
			alt={image.alt}
		/>
	{:else}
		<Video class="aspect-square" src={image.slug} width="1080" height="1080" />
	{/if}
</button>
