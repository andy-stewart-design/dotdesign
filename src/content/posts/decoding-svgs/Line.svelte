<script lang="ts">
	import RangeSlider from './RangeSlider.svelte';
	import { formatNumber } from './utils';

	const size = 20;

	let x1 = 4;
	let y1 = 4;
	let x2 = 16;
	let y2 = 16;
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-gray-900 border border-gray-100/10 p-4 rounded-lg">
		<p class="font-mono text-center tabular-nums">
			<span class="code-blue">&lt;</span>line
			<span class="code-green">x1</span>="<span class="code-yellow">
				{formatNumber(x1, true, true)}
			</span>"
			<span class="code-green">y1</span>="<span class="code-yellow">
				{formatNumber(y1, true, true)}
			</span>"
			<span class="code-green">x2</span>="<span class="code-yellow">
				{formatNumber(x2, true, true)}
			</span>"
			<span class="code-green">y2</span>="<span class="code-yellow">
				{formatNumber(y2, true, true)}
			</span>"
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
				<line
					{x1}
					y1="0"
					x2={x1}
					y2="20"
					class="stroke-red-500 stroke-[0.05]"
					stroke-dasharray="0.25"
				/>
				<line
					x1="0"
					{y1}
					x2="20"
					y2={y1}
					class="stroke-red-500 stroke-[0.05]"
					stroke-dasharray="0.25"
				/>
				<line
					x1={x2}
					y1="0"
					{x2}
					y2="20"
					class="stroke-yellow-300 stroke-[0.05]"
					stroke-dasharray="0.25"
				/>
				<line
					x1="0"
					y1={y2}
					x2="20"
					{y2}
					class="stroke-yellow-300 stroke-[0.05]"
					stroke-dasharray="0.25"
				/>
				<line {x1} {y1} {x2} {y2} class="stroke-gray-300 stroke-[0.1]" />
				<circle cx={x1} cy={y1} r="0.5" class="fill-red-500 stroke-[0.1] stroke-black" />
				<circle cx={x2} cy={y2} r="0.5" class="fill-yellow-300 stroke-[0.1] stroke-black" />
			</svg>
		</div>
		<div
			class="flex flex-col gap-2 justify-center sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg p-4"
		>
			<p class="blog:text-sm blog:text-white uppercase tracking-widest pb-2">Start Point</p>
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
			<div class="border-t border-gray-900/20 dark:border-gray-100/20" />
			<p class="blog:text-sm blog:text-white uppercase tracking-widest pt-3 pb-2">End Point</p>
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
