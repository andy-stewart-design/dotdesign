<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut, quadIn } from 'svelte/easing';
	import Container from '@components/global/Container.svelte';
	import { focusTrap } from '@actions/focusTrap';
	import IconButton from '@components/global/buttons/IconButton.svelte';
	import type { FeedImageData } from '$lib/types/feed';
	import Image from '@components/global/Image.svelte';
	import Video from '@components/Video.svelte';

	import BaseButton from '@components/global/BaseButton.svelte';
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import Close from '$lib/icons/Close.svelte';

	export let images: FeedImageData[];
	export let isOverlayActive: boolean;
	export let activeImage: number;
	export let closeOverlay: () => void;

	const incActiveImage = () => {
		if (activeImage >= images.length - 1) activeImage = 0;
		else activeImage += 1;
	};
	const decActiveImage = () => {
		if (activeImage <= 0) activeImage = images.length - 1;
		else activeImage -= 1;
	};
</script>

{#if isOverlayActive}
	<div
		in:fade={{ duration: 400, easing: cubicOut }}
		out:fade={{ duration: 400, easing: cubicOut, delay: 300 }}
		class="fixed top-0 left-0 flex flex-col w-screen h-screen bg-white/60 dark:bg-black/60 backdrop-blur-lg z-50"
		use:focusTrap={{
			escapeCallback: closeOverlay,
			arrowLeftCallback: incActiveImage,
			arrowRightCallback: decActiveImage
		}}
	>
		<Container class="flex justify-between">
			<div class="flex gap-x-2">
				<!-- <IconButton icon="arrow-left" on:click={decActiveImage} alt="Previous image" /> -->
				<!-- <IconButton icon="arrow-right" on:click={incActiveImage} alt="Next image" /> -->
				<BaseButton on:click={decActiveImage} icon large label="Close">
					<ArrowLeft size="20" strokeWidth="2" class="stroke-current fill-none w-5 h-5" />
				</BaseButton>
				<BaseButton on:click={incActiveImage} icon large label="Close">
					<ArrowRight size="20" strokeWidth="2" class="stroke-current fill-none w-5 h-5" />
				</BaseButton>
			</div>
			<BaseButton on:click={closeOverlay} icon large label="Close">
				<Close size="20" strokeWidth="2" class="stroke-current fill-none w-5 h-5" />
			</BaseButton>
		</Container>
		<Container class="relative grow">
			<div
				class="relative w-full h-full"
				in:scale={{ start: 1.2, duration: 600, delay: 300, easing: cubicOut }}
				out:scale={{ start: 1.2, duration: 300, easing: quadIn }}
			>
				{#key activeImage}
					<div
						class="absolute top-0 left-0 w-full h-full object-contain z-10"
						transition:fade|local={{ duration: 300, easing: cubicOut }}
					>
						{#if images[activeImage].filetype === 'image'}
							<Image
								src={images[activeImage].slug}
								class="absolute top-0 left-0 w-full h-full object-contain z-10"
								width=""
								height=""
								alt={images[activeImage].alt}
							/>
						{:else}
							<Video
								class="absolute top-0 left-0 w-full h-full object-contain z-10"
								src={images[activeImage].slug}
								width="1080"
								height="1080"
								autoplay
								muted
								loop
								playsinline
							/>
						{/if}
					</div>
				{/key}
			</div>
		</Container>
		<Container class="flex justify-center gap-x-4" pb="md">
			<p>{images[activeImage].client}</p>
			<p>{images[activeImage].project}</p>
			<p>{images[activeImage].year}</p>
		</Container>
	</div>
{/if}
