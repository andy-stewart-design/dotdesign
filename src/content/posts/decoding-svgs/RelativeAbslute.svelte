<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { formatNumber } from './utils';
	import { Button } from 'neutral-ui';
	import BaseSwitch from '@components/global/BaseSwitch.svelte';

	const width = 24;
	const height = 10;
	const duration = 800;

	let absolute = true;
	let isOriginalPosition = true;

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
		if (isOriginalPosition) isOriginalPosition = false;
	}

	function resetPosition() {
		x1.set(reset.x1);
		y1.set(reset.y1);
		x2.set(reset.x2);
		y2.set(reset.y2);
		absolute = true;
		isOriginalPosition = true;
	}

	$: textX1 = formatNumber(Math.floor($x1), true);
	$: textY1 = formatNumber(Math.floor($y1), true);
	$: textX2 = formatNumber(Math.floor($x2), true);
	$: textY2 = formatNumber(Math.floor($y2), true);
	$: textX3 = formatNumber(Math.floor($x2 - $x1), true);
	$: textY3 = formatNumber(Math.floor($y2 - $y1), true);
</script>

<div data-theme="dark" class="dark blog:col-popout">
	<div class="bg-surface-3 border border-foreground-2/10 rounded-2xl overflow-hidden">
		<div class="bg-surface-2 py-2 px-4">
			<h5 class="text-sm">
				<span class="font-bold text-brand/50 mr-1.5">→</span> Relative v. Absolute Positioning
			</h5>
		</div>
		<svg class="border-t border-b border-foreground-2/10" viewBox="0 0 24 10">
			<g class="opacity-10">
				{#each Array(height - 1) as _, i}
					<line x1="0" y1={i + 1} x2={width} y2={i + 1} class="stroke-brand stroke-[0.035]" />
				{/each}
				{#each Array(width - 1) as _, i}
					<line x1={i + 1} y1="0" x2={i + 1} y2={height} class="stroke-brand stroke-[0.035]" />
				{/each}
			</g>
			<line x1={$x1} y1={$y1} x2={$x2} y2={$y2} class="stroke-red-500 stroke-[0.5] opacity-70" />
			<line
				x1={0}
				y1={0}
				x2={$x1}
				y2={$y1}
				class="stroke-blue-600 dark:stroke-yellow-300 stroke-[0.05]"
				stroke-dasharray="0.25"
			/>
			<line
				x1={!absolute ? $x1 : 0}
				y1={!absolute ? $y1 : 0}
				x2={$x2}
				y2={$y2}
				class="stroke-blue-600 dark:stroke-yellow-300 stroke-[0.05]"
				stroke-dasharray="0.25"
			/>
			<circle cx={$x1} cy={$y1} r="0.5" class="fill-red-500 stroke-surface-2 stroke-[0.05]" />
			<rect
				x={$x1 + 0.75}
				y={$y1 - 0.5}
				width="2.1"
				height="1"
				rx="0.1"
				class="fill-red-500/80 dark:fill-red-500/40 stroke-red-500 stroke-[0.02]"
			/>
			<text x={$x1 + 1} y={$y1 + 0.175} class="text-[.5px] fill-white tabular-nums">
				{`${textX1} , ${textY1}`}
			</text>
			<circle cx={$x2} cy={$y2} r="0.5" class="fill-red-500 stroke-surface-2 stroke-[0.05]" />
			<rect
				x={$x2 + 0.75}
				y={$y2 - 0.5}
				width={!absolute ? 2.6 : 2.1}
				height="1"
				rx="0.1"
				class="fill-red-500/80 dark:fill-red-500/40 stroke-red-500 stroke-[0.02]"
			/>
			<text x={$x2 + 1} y={$y2 + 0.175} class="text-[.5px] fill-white tabular-nums">
				{absolute ? `${textX2} , ${textY2}` : `${textX3} , ${textY3}`}
			</text>
		</svg>
		<div class="flex justify-between gap-6 bg-surface-2 py-3 px-4">
			<div class="flex items-center gap-2">
				<BaseSwitch bind:value={absolute} label="Absolute Positioning" labelPosition="end" />
			</div>
			<div class="flex gap-2">
				<Button
					on:click={updatePosition}
					class="bg-transparent border-1.5 border-foreground-2/20 py-1 px-3 rounded-full transition-colors ease-out duration-200 can-hover:text-surface-2 can-hover:bg-foreground-1 can-hover:border-foreground-1 select-none"
				>
					Randomize Positions
				</Button>
				<Button
					on:click={resetPosition}
					class="bg-transparent border-1.5 border-foreground-2/20 p-1.5 rounded-full transition-colors ease-out duration-200 enabled:can-hover:text-surface-2 enabled:can-hover:bg-foreground-1 enabled:can-hover:border-foreground-1 select-none disabled:text-foreground-2/30"
					label="Reset anchor point positions"
					disabled={isOriginalPosition && absolute}
				>
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
				</Button>
			</div>
		</div>
	</div>
</div>
