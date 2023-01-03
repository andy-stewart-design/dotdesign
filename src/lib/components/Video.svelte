<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let width = '1920';
	export let height = '1080';
	export let autoplay = false;
	export let muted = false;
	export let loop = false;
	export let playsinline = false;

	let ref: HTMLVideoElement;

	// const onLoad = () => {
	// 	ref.style.opacity = '1';
	// 	ref.removeEventListener('canplay', onLoad);
	// };

	// onMount(() => {
	// 	ref.style.opacity = '0';
	// 	ref.addEventListener('canplay', onLoad);
	// });
</script>

<video
	bind:this={ref}
	class={`transition-opacity duration-500 ease-out-cubic ${$$props.class}`}
	{autoplay}
	{muted}
	{loop}
	{playsinline}
	{width}
	{height}
>
	<source {src} type="video/mp4" />
	Sorry, your browser doesn't support embedded videos.
</video>
