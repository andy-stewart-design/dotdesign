<script lang="ts">
	type LineCap = 'round' | 'butt' | 'inherit';

	export let size: string | number = 24;
	export let strokeWidth: string | number = 2;
	export let lineCap: LineCap = 'butt';
	export let spacing: string | number = Number(strokeWidth) * 3;
	export { className as class };

	let className = '';

	const dems = Number(size);
	const mid = dems / 2;
	const offset = 1;
	const startOff = offset;
	const endOff = dems - offset;
	const yOff = Number(spacing);
</script>

<svg viewBox={`0 0 ${size} ${size}`} stroke-width={strokeWidth} class={className}>
	<path stroke-linecap={lineCap} d={`M ${startOff} ${mid} L ${endOff} ${mid}`} />
	<path stroke-linecap={lineCap} d={`M ${startOff} ${mid - yOff} L ${endOff} ${mid - yOff}`} />
	<path stroke-linecap={lineCap} d={`M ${startOff} ${mid + yOff} L ${endOff} ${mid + yOff}`} />
</svg>
