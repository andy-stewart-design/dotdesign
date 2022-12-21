<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import NavPageTop from '@components/global/Nav/NavPageTop.svelte';
	import FeedOverlay from './FeedOverlay.svelte';
	import FeedCard from './FeedCard.svelte';
	import type { ImageDataArray } from '$lib/types/feed';
	import type { NavLinks } from 'types/nav';
	import Footer from '@components/global/Footer.svelte';

	const subNav: NavLinks[] = [
		{
			text: 'Projects',
			href: '/work'
		},
		{
			text: 'Feed',
			href: '/feed'
		}
	];

	export let data: ImageDataArray;
	const { images } = data;

	let activeImage = 0;

	let isOverlayActive = false;
	const openOverlay = (e: Event, index: number) => {
		activeImage = index;
		isOverlayActive = true;
		document.body.style.overflow = 'hidden';
	};
	const closeOverlay = () => {
		isOverlayActive = false;
		document.body.style.overflow = '';
	};
</script>

<Container class="grid gap-12 bg-level-06" py="xl">
	<h1 class="text-8xl md:text-9xl">Feed</h1>
	<div class="grid grid-cols-fit-sm xs:grid-cols-fit md:grid-cols-fit-lg lg:grid-cols-fit-xl gap-4">
		{#each images as image, index}
			<FeedCard {image} {index} on:click={(e) => openOverlay(e, index)} />
		{/each}
	</div>
</Container>
<Footer />

<FeedOverlay {images} {isOverlayActive} {activeImage} {closeOverlay} />
