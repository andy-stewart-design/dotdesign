<script lang="ts">
	import { onMount } from 'svelte';

	type ImageLoading = 'eager' | 'lazy';

	export let cloud = false;
	export let svg = false;
	export let src: string;
	export let sizes: number | number[] = 1200;
	export let alt: string;
	export let width = '1080';
	export let height = '1080';
	export let loading: ImageLoading = 'eager';
	export { classname as class };

	let classname: string;

	let defaultSize: number;
	if (typeof sizes !== 'number' && sizes.length) defaultSize = sizes.slice(-1)[0];

	let svgSrc: string;
	if (svg) svgSrc = `https://res.cloudinary.com/andystewartdesign/image/upload/f_svg/${src}`;

	function setSrc(slug: string, sizes: number | number[]) {
		console.log(sizes);

		const baseURL = 'https://res.cloudinary.com/andystewartdesign/image/upload';
		if (typeof sizes !== 'number') {
			const URLs = sizes.map((width) => `${baseURL}/w_${width}/f_auto,q_auto/${slug} ${width}w`);
			return URLs.join(', ');
		} else {
			return `${baseURL}/w_${sizes}/f_auto,q_auto/${slug}`;
		}
	}

	// let img: HTMLImageElement;
	// let hasEventListener = false;

	// function unloadImage() {
	// 	if (hasEventListener) img.removeEventListener('load', loadImage);
	// }

	// function loadImage() {
	// 	img.style.opacity = '1';
	// 	unloadImage();
	// }

	// onMount(() => {
	// 	img.style.opacity = '0';
	// 	if (img.complete) {
	// 		loadImage();
	// 	} else {
	// 		hasEventListener = true;
	// 		img.addEventListener('load', loadImage);
	// 	}
	// 	return () => unloadImage();
	// });
</script>

{#if cloud}
	{#if svg}
		<img src={svgSrc} class={classname} {width} {height} {alt} {loading} />
	{:else if typeof sizes !== 'number'}
		<img
			src={setSrc(src, defaultSize)}
			srcset={setSrc(src, sizes)}
			class={classname}
			{width}
			{height}
			{alt}
			{loading}
		/>
	{:else}
		<img src={setSrc(src, sizes)} class={classname} {width} {height} {alt} {loading} />
	{/if}
{:else}
	<img {src} class={classname} {width} {height} {alt} {loading} />
{/if}
