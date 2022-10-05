<script lang="ts">
	import Button from './Button.svelte';

	type Icon = 'close' | 'arrow-left' | 'arrow-right';

	export let icon: Icon = 'close';
	export let alt: string = 'Close';

	let d: string;

	switch (icon) {
		case 'arrow-left':
			d = 'm2.3 10.7 7 7 1.4-1.4L5.4 11H18V9H5.4l5.3-5.3-1.4-1.4-7 7c-.4.4-.4 1 0 1.4z';
			break;
		case 'arrow-right':
			d = 'm17.7 9.3-7-7-1.4 1.4L14.6 9H2v2h12.6l-5.3 5.3 1.4 1.4 7-7c.4-.4.4-1 0-1.4z';
			break;
		default:
			d =
				'M11.4,10l6.7,6.7l-1.4,1.4L10,11.4l-6.7,6.7l-1.4-1.4L8.6,10L1.9,3.3l1.4-1.4L10,8.6l6.7-6.7l1.4,1.4L11.4,10z';
	}
</script>

<Button on:click>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		xml:space="preserve"
		width="20"
		height="20"
	>
		<path {d} fill="currentColor" />
	</svg>
	<span class="visually-hidden">{alt}</span>
</Button>

<style>
	.visually-hidden:not(:focus):not(:active) {
		@apply absolute h-px w-px overflow-hidden whitespace-nowrap;
		clip: rect(0 0 0 0);
		clip-path: inset(100%);
	}
</style>
