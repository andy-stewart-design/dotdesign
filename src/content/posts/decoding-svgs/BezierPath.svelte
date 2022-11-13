<script lang="ts">
	import { formatNumber } from './utils';

	const size = 20;
	const start = 2;
	const end = 18;
	let pathMode = 'absolute';

	let x1 = 10;
	let y1 = 2;
	let x2 = 10;
	let y2 = 18;

	function formatPath(x1: number, y1: number, x2: number, y2: number, mode: string) {
		if (mode === 'absolute') {
			return `M 2 2 C  
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

	$: d = formatPath(x1, y1, x2, y2, pathMode);
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-blue-800/20 border border-blue-500/50 p-4 rounded-lg">
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
				<circle cx={start} cy={start} r="0.5" class="fill-red-500 stroke-[0.1] stroke-black" />
				<circle cx={x1} cy={y1} r="0.3" class="fill-red-500 stroke-[0.1] stroke-black" />
				<line x1={start} y1={start} x2={x1} y2={y1} class="stroke-red-500 stroke-[0.1]" />
				<circle cx={end} cy={end} r="0.5" class="fill-yellow-300 stroke-[0.1] stroke-black" />
				<circle cx={x2} cy={y2} r="0.3" class="fill-yellow-300 stroke-[0.1] stroke-black" />
				<line x1={x2} y1={y2} x2={end} y2={end} class="stroke-yellow-300 stroke-[0.1]" />
			</svg>
		</div>
		<div
			class="flex flex-col gap-6 justify-center sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg p-6"
		>
			<div class="flex flex-col gap-2">
				<label class="font-mono text-sm" for="draw-mode">Drawing Mode</label>
				<div id="draw-mode" class="flex">
					<button
						class="grow bg-blue-600 bg-opacity-20 border border-r-0 border-blue-500/50 py-1.5 px-2 rounded-l-md"
						class:!bg-opacity-100={pathMode === 'absolute'}
						on:click={() => (pathMode = 'absolute')}>Absolute</button
					>
					<button
						class="grow bg-blue-600 bg-opacity-20 border border-blue-500/50 py-1.5 px-2 rounded-r-md"
						class:!bg-opacity-100={pathMode === 'relative'}
						on:click={() => (pathMode = 'relative')}>Relative</button
					>
				</div>
			</div>
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
