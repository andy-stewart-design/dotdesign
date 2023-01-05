<script lang="ts">
	import { onMount } from 'svelte';

	export let cloud = false;
	export let lazy = false;
	export let src: string;
	export let width = '1920';
	export let height = '1080';
	export let autoplay = false;
	export let muted = false;
	export let loop = false;
	export let playsinline = false;
	export let poster: string | undefined = undefined;
	export { classname as class };

	let video: HTMLVideoElement;
	let classname: string = '';
	let cloudSrc = `https://res.cloudinary.com/andystewartdesign/video/upload/f_auto,q_auto/${src}`;
	let props: any = { width, height, autoplay, loop, playsinline };
	if (poster) props = { poster, ...props };

	onMount(() => {
		if (lazy) {
			let observer = new IntersectionObserver(
				(entries, observer) => {
					for (const entry of entries) {
						const videoEntry = entry.target as HTMLVideoElement;
						if (entry.isIntersecting) {
							for (const source of videoEntry.children) {
								const videoSource = source as HTMLSourceElement;
								const dataSource = videoSource.dataset.src;
								if (dataSource) videoSource.src = dataSource;
							}
							videoEntry.load();
							observer.unobserve(videoEntry);
						}
					}
				},
				{ rootMargin: '0px 0px 200px 0px' }
			);
			observer.observe(video);
		}
	});
</script>

{#if lazy}
	{#if cloud}
		<video bind:this={video} class={classname} {muted} {...props}>
			<source data-src={cloudSrc} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	{:else}
		<video class={classname} {autoplay} {muted} {loop} {playsinline} {width} {height}>
			<source {src} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	{/if}
{:else if cloud}
	<video bind:this={video} class={classname} {muted} {...props}>
		<source src={cloudSrc} type="video/mp4" />
		Sorry, your browser doesn't support embedded videos.
	</video>
{:else}
	<video class={classname} {muted} {...props}>
		<source {src} type="video/mp4" />
		Sorry, your browser doesn't support embedded videos.
	</video>
{/if}
