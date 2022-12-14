<script lang="ts">
	type LineCap = 'round' | 'butt' | 'inherit';

	export let size: string | number = 24;
	export let strokeWidth: string | number = 2;
	export let lineCap: LineCap = 'butt';
	export { className as class };

	let className = '';

	const dems = Number(size);
	const offset = dems / 2.375;
	const radius = dems / 3.5;
	const foo = dems / 12;
	const endOff = dems - foo * 1.5;
</script>

<svg viewBox={`0 0 ${size} ${size}`} stroke-width={strokeWidth} class={className}>
	<circle cX={offset} cY={offset} r={radius} />
	<path
		stroke-linecap={lineCap}
		d={`M ${offset + radius - foo} ${offset + radius - foo} L ${endOff} ${endOff}`}
	/>
</svg>
