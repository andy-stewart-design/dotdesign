<script lang="ts">
	type LineCap = 'round' | 'butt' | 'inherit';
	type LineJoin = 'round' | 'inherit' | 'miter' | 'bevel';

	export let size: string | number = 24;
	export let strokeWidth: string | number = 2;
	export let lineCap: LineCap = 'butt';
	export let corners: LineJoin = 'round';
	export { className as class };

	let className = '';

	const dems = Number(size);
	const mid = dems / 2;
	const offset = 2;
	const startOff = offset;
	const endOff = dems - offset;
	const midOff = mid - 2;
</script>

<svg viewBox={`0 0 ${size} ${size}`} stroke-width={strokeWidth} class={className}>
	<path
		stroke-linecap={lineCap}
		stroke-linejoin={corners}
		d={`M ${startOff} ${mid} L ${endOff} ${mid} 
          M ${startOff + midOff} ${mid + midOff} L ${startOff} ${mid} 
          L ${startOff + midOff} ${mid - midOff}`}
	/>
</svg>
