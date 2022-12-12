<script lang="ts">
	import RangeSlider from './RangeSlider.svelte';
	import { Switch, SwitchLabel } from 'neutral-ui';
	import { formatNumber } from './utils';
	import BaseSwitch from '@components/global/BaseSwitch.svelte';

	const size = 20;
	const midpoint = size / 2;
	const initX = midpoint;
	const initY = 5;
	let offX = 4;
	let offY = 0;

	const startX = 1;
	const startY = midpoint + initY;
	const startBezX = offX;
	const startBezY = startY;
	const midX = midpoint;
	const midY = initY;
	const endX = 19;
	const endY = startY;
	const endBezX = size - offX;
	const endBezY = endY;
	let mirrored = true;
	// let pathMode = 'mirrored';

	$: hlx = initX - offX;
	$: hly = initY + offY;
	let hrx = 14;
	let hry = 5;
	$: mirrorX = mirrored ? initX + offX : hrx;
	$: mirrorY = mirrored ? initY - offY : hry;

	function formatPath(hlx: number, hly: number, hrx: number, hry: number, mode: boolean) {
		const pathStart = `M ${startX} ${startY} C  
         ${formatNumber(startBezX, true, true)} ${formatNumber(startBezY, true, true)}, 
         ${formatNumber(hlx, true, true)} ${formatNumber(hly, true, true)}, 
         ${formatNumber(midX, true, true)}, ${formatNumber(midY, true, true)}`;
		let pathEnd: string;
		if (mode) {
			pathEnd = `S ${formatNumber(endBezX, true, true)}, ${formatNumber(endBezY, true, true)},
         ${formatNumber(endX, true, true)}, ${formatNumber(endY, true, true)}`;
		} else {
			pathEnd = `C ${formatNumber(hrx, true, true)}, ${formatNumber(hry, true, true)},
         ${formatNumber(endBezX, true, true)}, ${formatNumber(endBezY, true, true)},
         ${formatNumber(endX, true, true)}, ${formatNumber(endY, true, true)}`;
		}
		return `${pathStart} ${pathEnd}`;
	}

	$: d = formatPath(hlx, hly, hrx, hry, mirrored);
</script>

<section data-theme="dark" class="dark blog:col-popout">
	<div class="flex flex-col gap-2 my-5">
		<div class="bg-surface-2 border border-foreground-2/10 p-4 rounded-2xl">
			<p class="font-mono text-center tabular-nums blog:text-foreground-3">
				<span class="code-green">d</span>="<span class="code-yellow">{d}</span>"
			</p>
		</div>
		<div class="flex flex-col sm:flex-row">
			<div class="relative grow border bg-surface-3 border-foreground-2/10 rounded-l-2xl">
				<div
					class="absolute bottom-2 left-2 font-mono text-sm text-gray-100/70 bg-gray-900/50 border border-gray-100/10 py-1 px-2 rounded-lg backdrop-blur-sm"
				>
					viewBox: 0 0 20 20
				</div>
				<svg viewBox="0 0 20 20">
					<g class="opacity-10">
						{#each Array(size - 1) as _, i}
							<line x1="0" y1={i + 1} x2="20" y2={i + 1} class="stroke-brand stroke-[0.035]" />
						{/each}
						{#each Array(size - 1) as _, i}
							<line x1={i + 1} y1="0" x2={i + 1} y2="20" class="stroke-brand stroke-[0.035]" />
						{/each}
					</g>
					<path {d} class="fill-transparent stroke-gray-300 stroke-[0.1]" />
					<circle
						cx={startX}
						cy={startY}
						r="0.55"
						class="fill-gray-300 stroke-[0.1] stroke-surface-3"
					/>
					<circle
						cx={endX}
						cy={endY}
						r="0.55"
						class="fill-gray-300 stroke-[0.1] stroke-surface-3"
					/>
					<circle
						cx={midX}
						cy={midY}
						r="0.55"
						class="fill-yellow-300 stroke-[0.1] stroke-surface-3"
					/>
					<circle cx={hlx} cy={hly} r="0.3" class="fill-yellow-300 stroke-[0.1] stroke-surface-3" />
					<line x1={hlx} y1={hly} x2={midX} y2={midY} class="stroke-yellow-300 stroke-[0.1]" />
					<circle
						cx={mirrorX}
						cy={mirrorY}
						r="0.3"
						class="fill-yellow-300 stroke-[0.1] stroke-surface-3"
						class:fill-red-500={!mirrored}
					/>
					<line
						x1={mirrorX}
						y1={mirrorY}
						x2={midX}
						y2={midY}
						class="stroke-yellow-300 stroke-[0.1]"
						class:stroke-red-500={!mirrored}
					/>
					<g class="opacity-0" class:opacity-100={!mirrored}>
						<path
							d="M 10 4.5 C 9.75 4.5, 9.5 4.68, 9.5 5 S 9.75 5.5, 10 5.5 Z"
							class="fill-yellow-300"
						/>
						<path
							d="M 10 4.5 C 10.25 4.5, 10.5 4.68, 10.5 5 S 10.25 5.5, 10 5.5 Z"
							class="fill-red-500"
						/>
					</g>
				</svg>
			</div>
			<div
				class="flex flex-col sm:w-72 bg-gray-900 border border-l-0 border-foreground-2/10 rounded-r-2xl"
			>
				<div class="flex gap-6 py-3 px-4 border-b border-gray-100/10">
					<div class="grow flex items-center gap-2">
						<BaseSwitch bind:value={mirrored} label="Mirror Handles" grow />
					</div>
				</div>
				<div class="grow flex flex-col gap-1 justify-center p-4 pb-6">
					<h5 class="font-normal text-sm text-white pb-3">Left Handle</h5>
					<RangeSlider
						bind:value={offX}
						min={0}
						max={midpoint}
						step={0.5}
						bigStep={1}
						label="X-Position"
						class="bg-yellow-300"
					>
						<div slot="icon" class="w-2 h-2 rounded-full bg-yellow-300" />
					</RangeSlider>
					<RangeSlider
						bind:value={offY}
						min={-initY}
						max={initY}
						step={0.5}
						bigStep={1}
						label="Y-Position"
						class="bg-yellow-300"
					>
						<div slot="icon" class="w-2 h-2 rounded-full bg-yellow-300" />
					</RangeSlider>
					<div class="border-b border-gray-900/20 dark:border-gray-100/20 pt-1" />
					<h5 class="font-normal text-sm text-white pt-4 pb-3">End Point</h5>
					<RangeSlider
						bind:value={hrx}
						min={midpoint}
						max={size}
						step={0.5}
						bigStep={1}
						label="X-Position"
						class={!mirrored ? 'bg-red-500' : 'bg-gray-600'}
						disabled={mirrored}
					>
						<div
							slot="icon"
							class="w-2 h-2 rounded-full bg-gray-600 active:bg-red-500"
							class:active={!mirrored}
						/>
					</RangeSlider>
					<RangeSlider
						bind:value={hry}
						min={0}
						max={midpoint}
						step={0.5}
						bigStep={1}
						label="Y-Position"
						class={!mirrored ? 'bg-red-500' : 'bg-gray-600'}
						disabled={mirrored}
					>
						<div
							slot="icon"
							class="w-2 h-2 rounded-full bg-gray-600 active:bg-red-500"
							class:active={!mirrored}
						/>
					</RangeSlider>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* .code-blue {
		color: rgb(127, 219, 202);
	} */
	.code-green {
		color: rgb(197, 228, 120);
	}
	.code-yellow {
		color: rgb(236, 196, 141);
	}
</style>
