<script lang="ts">
	import RangeSlider from './RangeSlider.svelte';
	import { Switch, SwitchLabel } from 'neutral-ui';
	import { formatNumber } from './utils';
	import BaseSwitch from '@components/global/BaseSwitch.svelte';

	const size = 20;
	const start = 2;
	const end = 18;
	let absolute = true;
	let showHandles = true;

	let x1 = 10;
	let y1 = 2;
	let x2 = 10;
	let y2 = 18;

	function formatPath(x1: number, y1: number, x2: number, y2: number, mode: boolean) {
		if (mode) {
			return `M 02.0 02.0 C  
   ${formatNumber(x1, true, true)} 
   ${formatNumber(y1, true, true)}, 
   ${formatNumber(x2, true, true)} 
   ${formatNumber(y2, true, true)}, 
   ${end}, ${end}`;
		} else {
			return `m 2 2 c 
   ${formatNumber(x1 - start, true, true)} 
   ${formatNumber(y1 - start, true, true)}, 
   ${formatNumber(x2 - start, true, true)} 
   ${formatNumber(y2 - start, true, true)}, 
   ${end - start}, ${end - start}`;
		}
	}

	$: d = formatPath(x1, y1, x2, y2, absolute);
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-gray-900 border border-gray-100/10 p-4 rounded-lg">
		<p class="font-mono text-center tabular-nums">
			<span class="code-blue">&lt;</span>path
			<span class="code-green">d</span>="<span class="code-yellow">{d}</span>"
			<span class="code-blue">/&gt;</span>
		</p>
	</div>
	<div class="flex flex-col sm:flex-row gap-2">
		<div class="relative grow border border-gray-100/10 rounded-lg">
			<div
				class="absolute bottom-2 left-2 font-mono text-sm text-gray-100/70 bg-gray-900/50 border border-gray-100/10 py-1 px-2 rounded-sm backdrop-blur-sm"
			>
				viewBox: 0 0 20 20
			</div>
			<svg viewBox="0 0 20 20">
				<g class="opacity-10">
					{#each Array(size - 1) as _, i}
						<line x1="0" y1={i + 1} x2="20" y2={i + 1} class="stroke-gray-100 stroke-[0.05]" />
					{/each}
					{#each Array(size - 1) as _, i}
						<line x1={i + 1} y1="0" x2={i + 1} y2="20" class="stroke-gray-100 stroke-[0.05]" />
					{/each}
				</g>
				<path {d} class="fill-transparent stroke-gray-300 stroke-[0.1]" />
				<line
					x1={start}
					y1={start}
					x2={x1}
					y2={y1}
					class="stroke-black stroke-[0.3]"
					class:hidden={!showHandles}
				/>
				<line
					x1={start}
					y1={start}
					x2={x1}
					y2={y1}
					class="stroke-red-500 stroke-[0.1]"
					class:hidden={!showHandles}
				/>
				<circle
					cx={x1}
					cy={y1}
					r="0.3"
					class="fill-red-500 stroke-[0.1] stroke-black"
					class:hidden={!showHandles}
				/>
				<circle cx={start} cy={start} r="0.5" class="fill-red-500 stroke-[0.1] stroke-black" />
				<line
					x1={x2}
					y1={y2}
					x2={end}
					y2={end}
					class="stroke-black stroke-[0.3]"
					class:hidden={!showHandles}
				/>
				<line
					x1={x2}
					y1={y2}
					x2={end}
					y2={end}
					class="stroke-yellow-300 stroke-[0.1]"
					class:hidden={!showHandles}
				/>
				<circle cx={end} cy={end} r="0.5" class="fill-yellow-300 stroke-[0.1] stroke-black" />
				<circle
					cx={x2}
					cy={y2}
					r="0.3"
					class="fill-yellow-300 stroke-[0.1] stroke-black"
					class:hidden={!showHandles}
				/>
			</svg>
		</div>
		<div class="flex flex-col sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg">
			<div class="flex flex-col gap-3 py-3 px-4 border-b border-gray-100/10">
				<div class="flex">
					<BaseSwitch bind:value={absolute} label="Absolute Positioning" grow />
				</div>
				<div class="flex">
					<BaseSwitch bind:value={showHandles} label="Show Handles" grow />
				</div>
			</div>
			<div class="grow flex flex-col gap-1 justify-center p-4 pb-6">
				<h5 class="font-normal text-sm text-white pb-3">Start Point</h5>
				<RangeSlider
					bind:value={x1}
					min={0}
					max={size}
					step={0.5}
					bigStep={1}
					label="X-Position"
					class="bg-red-500"
				>
					<div slot="icon" class="w-2 h-2 rounded-full bg-red-500" />
				</RangeSlider>
				<RangeSlider
					bind:value={y1}
					min={0}
					max={size}
					step={0.5}
					bigStep={1}
					label="Y-Position"
					class="bg-red-500"
				>
					<div slot="icon" class="w-2 h-2 rounded-full bg-red-500" />
				</RangeSlider>
				<div class="border-b border-gray-900/20 dark:border-gray-100/20 pt-1" />
				<h5 class="font-normal text-sm text-white pt-4 pb-3">End Point</h5>
				<RangeSlider
					bind:value={x2}
					min={0}
					max={size}
					step={0.5}
					bigStep={1}
					label="X-Position"
					class="bg-yellow-300"
				>
					<div slot="icon" class="w-2 h-2 rounded-full bg-yellow-300" />
				</RangeSlider>
				<RangeSlider
					bind:value={y2}
					min={0}
					max={size}
					step={0.5}
					bigStep={1}
					label="Y-Position"
					class="bg-yellow-300"
				>
					<div slot="icon" class="w-2 h-2 rounded-full bg-yellow-300" />
				</RangeSlider>
			</div>
		</div>
	</div>
</section>

<style>
	.code-blue {
		color: rgb(127, 219, 202);
	}
	.code-green {
		color: rgb(197, 228, 120);
	}
	.code-yellow {
		color: rgb(236, 196, 141);
	}
</style>
