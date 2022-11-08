<script lang="ts">
	import { formatNumber } from './utils';

	const size = 20;

	let cx = 10;
	let cy = 10;
	let r = 2;
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-blue-800/20 border border-blue-500/50 p-4 rounded-lg">
		<p class="font-mono text-center tabular-nums">
			<span class="code-blue">&lt;</span>circle <span class="code-green">cx</span>
			="<span class="code-yellow">{formatNumber(cx, true)}</span>"
			<span class="code-green">cy</span>="<span class="code-yellow">{formatNumber(cy, true)}</span>"
			<span class="code-green">r</span>="<span class="code-yellow">{formatNumber(r)}</span>"
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
					{#each Array(size - 1) as arr, i}
						<line x1="0" y1={i + 1} x2="20" y2={i + 1} class="stroke-gray-100 stroke-[0.05]" />
					{/each}
					{#each Array(size - 1) as arr, i}
						<line x1={i + 1} y1="0" x2={i + 1} y2="20" class="stroke-gray-100 stroke-[0.05]" />
					{/each}
				</g>
				<circle {cx} {cy} {r} class="fill-blue-600" />
			</svg>
		</div>
		<div
			class="flex flex-col gap-6 justify-center sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg p-6"
		>
			<div class="flex flex-col gap-2">
				<label class="font-mono" for="position-x">X Position</label>
				<input
					type="range"
					id="position-x"
					name="position-x"
					bind:value={cx}
					min="0"
					max={size}
					step="0.5"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class="font-mono" for="position-y">Y Position</label>
				<input
					type="range"
					id="position-y"
					name="position-y"
					bind:value={cy}
					min="0"
					max={size}
					step="0.5"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class="font-mono" for="radius">Radius</label>
				<input type="range" id="radius" name="radius" bind:value={r} min="1" max="6" step="0.5" />
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
