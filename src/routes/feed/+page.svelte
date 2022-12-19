<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import FeedOverlay from './FeedOverlay.svelte';
	import FeedCard from './FeedCard.svelte';
	import type { ImageDataArray } from '$lib/types/feed';

	export let data: ImageDataArray;
	const { images } = data;

	let activeImage = 0;
	let activeButton: HTMLButtonElement | null = null;

	let isOverlayActive = false;
	const openOverlay = (e: Event, index: number) => {
		activeButton = e.currentTarget as HTMLButtonElement;
		activeImage = index;
		isOverlayActive = true;
		document.body.style.overflow = 'hidden';
	};
	const closeOverlay = () => {
		isOverlayActive = false;
		// activeButton?.focus();
		document.body.style.overflow = '';
	};
</script>

<Container class="grid gap-12" pt="xl">
	<h1 class="text-8xl md:text-9xl">Feed</h1>
	<div class="grid grid-cols-fit-sm xs:grid-cols-fit md:grid-cols-fit-lg lg:grid-cols-fit-xl gap-4">
		{#each images as image, index}
			<FeedCard {image} {index} on:click={(e) => openOverlay(e, index)} />
		{/each}
	</div>
</Container>

<FeedOverlay {images} {isOverlayActive} {activeImage} {closeOverlay} />
