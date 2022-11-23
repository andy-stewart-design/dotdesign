<script lang="ts">
	import { formatNumber } from './utils';

	const size = 20;

	let x1 = 4;
	let y1 = 4;
	let x2 = 16;
	let y2 = 16;
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-blue-800/20 border border-blue-500/50 p-4 rounded-lg">
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
			class="flex flex-col gap-6 justify-center sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg p-6"
		>
			<div class="flex flex-col gap-2">
				<div class="flex gap-x-2 items-center">
					<div class="w-2 h-2 rounded-full bg-red-500" />
					<label class="font-mono" for="start-x">Start X</label>
				</div>
				<input
					type="range"
					id="start-x"
					name="start-x"
					bind:value={x1}
					min="0"
					max={size}
					step="0.5"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex gap-x-2 items-center">
					<div class="w-2 h-2 rounded-full bg-red-500" />
					<label class="font-mono" for="start-y">Start Y</label>
				</div>
				<input
					type="range"
					id="start-y"
					name="start-y"
					bind:value={y1}
					min="0"
					max={size}
					step="0.5"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex gap-x-2 items-center">
					<div class="w-2 h-2 rounded-full bg-yellow-300" />
					<label class="font-mono" for="end-x">End X</label>
				</div>
				<input type="range" id="end-x" name="end-x" bind:value={x2} min="0" max={size} step="0.5" />
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex gap-x-2 items-center">
					<div class="w-2 h-2 rounded-full bg-yellow-300" />
					<label class="font-mono" for="end-y">End Y</label>
				</div>
				<input type="range" id="end-y" name="end-y" bind:value={y2} min="0" max={size} step="0.5" />
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
