<script lang="ts">
	type LineCap = 'round' | 'butt' | 'inherit';

	export let size: string | number = 24;
	export let strokeWidth: string | number = 2;
	export let lineCap: LineCap = 'butt';
	export { className as class };

	let className = '';

	const dems = Number(size);
	const offset = 3;
	const endOff = dems - offset;
</script>

<svg viewBox={`0 0 ${size} ${size}`} stroke-width={strokeWidth} class={className}>
	<path
		stroke-linecap={lineCap}
		d={`M ${offset} ${offset} L ${endOff} ${endOff} 
          M ${offset} ${endOff} L ${endOff} ${offset}`}
	/>
</svg>
