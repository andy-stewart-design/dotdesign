<script lang="ts">
	import BaseRangeSlider from './RangeSlider.svelte';
	import { formatNumber } from './utils';

	const size = 20;

	let cx = 10;
	let cy = 10;
	let r = 4;
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-gray-900 border border-gray-100/10 p-4 rounded-lg">
		<p class="font-mono text-center tabular-nums">
			<span class="code-blue">&lt;</span>circle <span class="code-green">cx</span>
			="<span class="code-yellow">{formatNumber(cx, true, true)}</span>"
			<span class="code-green">cy</span>="<span class="code-yellow"
				>{formatNumber(cy, true, true)}</span
			>"
			<span class="code-green">r</span>="<span class="code-yellow">
				{formatNumber(r, false, true)}
			</span>"
			<span class="code-blue">/&gt;</span>
		</p>
	</div>
	<div class="flex flex-col sm:flex-row gap-0 border border-gray-100/10 rounded-lg overflow-hidden">
		<div class="relative grow">
			<div
				class="absolute bottom-2 left-2 font-mono text-sm text-gray-100/70 bg-gray-900/50 border border-gray-100/10 py-1 px-2 rounded-sm backdrop-blur-sm"
			>
				viewBox: 0 0 20 20
			</div>
			<svg viewBox="0 0 20 20">
				<g class="opacity-10">
					{#each Array(size - 1) as arr, i}
						<line x1="0" y1={i + 1} x2="20" y2={i + 1} class="stroke-gray-100 stroke-[0.05]" />
					{/each}
					{#each Array(size - 1) as arr, i}
						<line x1={i + 1} y1="0" x2={i + 1} y2="20" class="stroke-gray-100 stroke-[0.05]" />
					{/each}
				</g>
				<line
					x1={cx}
					y1="0"
					x2={cx}
					y2="20"
					class="stroke-yellow-300 stroke-[0.05]"
					stroke-dasharray="0.25"
				/>
				<line
					x1="0"
					y1={cy}
					x2="20"
					y2={cy}
					class="stroke-red-500 stroke-[0.05]"
					stroke-dasharray="0.25"
				/>
				<circle {cx} {cy} {r} class="fill-black stroke-gray-300 stroke-[0.1]" />
				<circle {cx} {cy} r="0.325" class="fill-teal-400" />
				<circle cx={cx + r} {cy} r="0.325" class="fill-teal-400 stroke-black stroke-[0.1]" />
				<line x1={cx} y1={cy} x2={cx + r} y2={cy} class="stroke-teal-400 stroke-[0.1]" />
			</svg>
		</div>
		<div
			class="flex flex-col gap-2 justify-center sm:w-72 bg-black border-l border-gray-100/10 p-4"
		>
			<BaseRangeSlider
				bind:value={cx}
				min={0}
				max={size}
				step={0.5}
				bigStep={1}
				label="X-Position"
				class="bg-yellow-300"
			>
				<div slot="icon" class="w-2 h-2 rounded-full bg-yellow-300" />
			</BaseRangeSlider>
			<BaseRangeSlider
				bind:value={cy}
				min={0}
				max={size}
				step={0.5}
				bigStep={1}
				label="Y-Position"
				class="bg-red-500"
			>
				<div slot="icon" class="w-2 h-2 rounded-full bg-red-500" />
			</BaseRangeSlider>
			<BaseRangeSlider
				bind:value={r}
				min={1}
				max={7}
				step={0.5}
				bigStep={1}
				label="Radius"
				class="bg-teal-400"
			>
				<div slot="icon" class="w-2 h-2 rounded-full bg-teal-400" />
			</BaseRangeSlider>
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
