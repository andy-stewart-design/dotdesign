<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Switch, SwitchLabel } from 'neutral-ui';
	import { formatNumber } from './utils';

	const width = 24;
	const height = 10;
	const duration = 800;

	let relative = false;

	let x1 = tweened(4, {
		duration,
		easing: cubicOut
	});
	let y1 = tweened(8, {
		duration,
		easing: cubicOut
	});
	let x2 = tweened(16, {
		duration,
		easing: cubicOut
	});
	let y2 = tweened(3, {
		duration,
		easing: cubicOut
	});

	const reset = { x1: $x1, y1: $y1, x2: $x2, y2: $y2 };

	function updatePosition() {
		x1.set(Math.floor(Math.random() * (width - 3)) + 1);
		y1.set(Math.floor(Math.random() * (height - 2)) + 1);
		x2.set(Math.floor(Math.random() * (width - 3)) + 1);
		y2.set(Math.floor(Math.random() * (height - 2)) + 1);
	}

	function resetPosition() {
		x1.set(reset.x1);
		y1.set(reset.y1);
		x2.set(reset.x2);
		y2.set(reset.y2);
		relative = false;
	}

	$: textX1 = formatNumber(Math.floor($x1), true);
	$: textY1 = formatNumber(Math.floor($y1), true);
	$: textX2 = formatNumber(Math.floor($x2), true);
	$: textY2 = formatNumber(Math.floor($y2), true);
	$: textX3 = formatNumber(Math.floor($x2 - $x1), true);
	$: textY3 = formatNumber(Math.floor($y2 - $y1), true);
</script>

<div class="blog:col-popout border border-gray-100/10 rounded-lg">
	<svg viewBox="0 0 24 10">
		<g class="opacity-10">
			{#each Array(height - 1) as _, i}
				<line x1="0" y1={i + 1} x2={width} y2={i + 1} class="stroke-gray-100 stroke-[0.05]" />
			{/each}
			{#each Array(width - 1) as _, i}
				<line x1={i + 1} y1="0" x2={i + 1} y2={height} class="stroke-gray-100 stroke-[0.05]" />
			{/each}
		</g>
		<line
			x1={0}
			y1={0}
			x2={$x1}
			y2={$y1}
			class="stroke-gray-400 stroke-[0.05]"
			class:hidden={relative}
			stroke-dasharray="0.25"
		/>
		<line
			x1={relative ? $x1 : 0}
			y1={relative ? $y1 : 0}
			x2={$x2}
			y2={$y2}
			class="stroke-gray-300 stroke-[0.05]"
			stroke-dasharray="0.25"
		/>
		<circle cx="0" cy="0" r="0.25" class="fill-gray-400" class:hidden={relative} />
		<circle cx={$x1} cy={$y1} r="0.5" class="fill-red-500" />
		<rect
			x={$x1 + 0.75}
			y={$y1 - 0.5}
			width="2.1"
			height="1"
			rx="0.1"
			class="fill-red-500/40 stroke-red-500 stroke-[0.02]"
		/>
		<text x={$x1 + 1} y={$y1 + 0.175} class="text-[.5px] fill-white tabular-nums">
			{`${textX1} , ${textY1}`}
		</text>
		<circle cx={$x2} cy={$y2} r="0.5" class="fill-blue-500" />
		<rect
			x={$x2 + 0.75}
			y={$y2 - 0.5}
			width={relative ? 2.6 : 2.1}
			height="1"
			rx="0.1"
			class="fill-blue-500/40 stroke-blue-500 stroke-[0.02]"
		/>
		<text x={$x2 + 1} y={$y2 + 0.175} class="text-[.5px] fill-white tabular-nums">
			{!relative ? `${textX2} , ${textY2}` : `${textX3} , ${textY3}`}
		</text>
	</svg>
	<div class="flex justify-between gap-6 py-3 px-4 border-t border-gray-100/10">
		<div class="flex items-center gap-2">
			<Switch
				bind:value={relative}
				class="relative flex shrink-0 bg-gray-800 cursor-pointer p-0.5 pr-[1.375rem] rounded-full border border-gray-100/10 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
			>
				<div
					class="w-5 h-5 bg-blue-600 rounded-full transition-transform"
					class:translate-x-full={relative}
					aria-hidden="true"
				/>
				<SwitchLabel slot="label">
					<span class="select-none opacity-50 transition-colors" class:opacity-100={relative}>
						Relative Positioning
					</span>
				</SwitchLabel>
			</Switch>
		</div>
		<div class="flex gap-4">
			<button
				on:click={updatePosition}
				class="bg-gray-900 border border-gray-100/10 py-1 px-2 rounded">Randomize Position</button
			>
			<button
				on:click={resetPosition}
				class="bg-gray-900 border border-gray-100/10 py-1 px-2 rounded">Reset</button
			>
		</div>
	</div>
</div>
