<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Switch, SwitchLabel } from 'neutral-ui';
	import { formatNumber } from './utils';

	const width = 24;
	const height = 10;
	const duration = 800;

	let absolute = true;

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
		absolute = true;
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
		<line x1={$x1} y1={$y1} x2={$x2} y2={$y2} class="stroke-red-500 stroke-[0.5] opacity-70" />
		<line
			x1={0}
			y1={0}
			x2={$x1}
			y2={$y1}
			class="stroke-gray-400 stroke-[0.05]"
			stroke-dasharray="0.25"
		/>
		<line
			x1={!absolute ? $x1 : 0}
			y1={!absolute ? $y1 : 0}
			x2={$x2}
			y2={$y2}
			class="stroke-gray-300 stroke-[0.05]"
			stroke-dasharray="0.25"
		/>
		<circle cx="0" cy="0" r="0.25" class="fill-gray-400" class:hidden={!absolute} />
		<circle cx={$x1} cy={$y1} r="0.5" class="fill-red-500 stroke-black stroke-[0.05]" />
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
		<circle cx={$x2} cy={$y2} r="0.5" class="fill-red-500 stroke-black stroke-[0.05]" />
		<rect
			x={$x2 + 0.75}
			y={$y2 - 0.5}
			width={!absolute ? 2.6 : 2.1}
			height="1"
			rx="0.1"
			class="fill-red-500/40 stroke-red-500 stroke-[0.02]"
		/>
		<text x={$x2 + 1} y={$y2 + 0.175} class="text-[.5px] fill-white tabular-nums">
			{absolute ? `${textX2} , ${textY2}` : `${textX3} , ${textY3}`}
		</text>
	</svg>
	<div class="flex justify-between gap-6 py-3 px-4 border-t border-gray-100/10">
		<div class="flex items-center gap-2">
			<Switch
				bind:value={absolute}
				class="relative flex shrink-0 bg-gray-800 cursor-pointer p-0.5 pr-[1.375rem] rounded-full border border-gray-100/10 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
			>
				<div
					class="w-5 h-5 bg-blue-600 rounded-full transition-transform"
					class:translate-x-full={absolute}
					aria-hidden="true"
				/>
				<SwitchLabel slot="end">
					<span class="select-none transition-colors" class:opacity-50={!absolute}>
						Absolute Positioning
					</span>
				</SwitchLabel>
			</Switch>
		</div>
		<div class="flex gap-2">
			<button
				on:click={updatePosition}
				class="bg-gray-900 border border-gray-100/10 py-1 px-2 rounded">Randomize Positions</button
			>
			<button on:click={resetPosition} class="bg-gray-900 border border-gray-100/10 p-1.5 rounded">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						fill-rule="evenodd"
						d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>
