<script lang="ts">
	import { setSrc } from '@utils/cloudinary';

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

	let classname: string = '';

	let defaultSize: number;
	if (typeof sizes !== 'number' && sizes.length) defaultSize = sizes.slice(-1)[0];

	let svgSrc: string;
	if (svg) svgSrc = `https://res.cloudinary.com/andystewartdesign/image/upload/f_svg/${src}`;
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
