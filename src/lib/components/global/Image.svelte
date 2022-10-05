<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let width = '1080';
	export let height = '1080';
	export let loading = 'eager';

	let img: HTMLImageElement;
	let hasEventListener = false;

	function unloadImage() {
		if (hasEventListener) img.removeEventListener('load', loadImage);
	}

	function loadImage() {
		img.style.opacity = '1';
		unloadImage();
	}

	onMount(() => {
		img.style.opacity = '0';
		if (img.complete) {
			loadImage();
		} else {
			hasEventListener = true;
			img.addEventListener('load', loadImage);
		}
		return () => unloadImage();
	});
</script>

<img
	bind:this={img}
	{src}
	class={`transition-opacity duration-500 ease-out-cubic ${$$props.class}`}
	{loading}
	{width}
	{height}
	{alt}
/>
