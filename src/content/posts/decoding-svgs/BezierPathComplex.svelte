<script lang="ts">
	import { formatNumber } from './utils';

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
	let pathMode = 'mirrored';

	$: hlx = initX - offX;
	$: hly = initY + offY;
	let hrx = 14;
	let hry = 5;
	$: mirrorX = pathMode === 'mirrored' ? initX + offX : hrx;
	$: mirrorY = pathMode === 'mirrored' ? initY - offY : hry;

	function formatPath(hlx: number, hly: number, hrx: number, hry: number, mode: string) {
		const pathStart = `M ${startX} ${startY} C  
         ${formatNumber(startBezX, true, true)} ${formatNumber(startBezY, true, true)}, 
         ${formatNumber(hlx, true, true)} ${formatNumber(hly, true, true)}, 
         ${formatNumber(midX, true, true)}, ${formatNumber(midY, true, true)}`;
		let pathEnd: string;
		if (mode === 'mirrored') {
			pathEnd = `S ${formatNumber(endBezX, true, true)}, ${formatNumber(endBezY, true, true)},
         ${formatNumber(endX, true, true)}, ${formatNumber(endY, true, true)}`;
		} else {
			pathEnd = `C ${formatNumber(hrx, true, true)}, ${formatNumber(hry, true, true)},
         ${formatNumber(endBezX, true, true)}, ${formatNumber(endBezY, true, true)},
         ${formatNumber(endX, true, true)}, ${formatNumber(endY, true, true)}`;
		}
		return `${pathStart} ${pathEnd}`;
	}

	$: d = formatPath(hlx, hly, hrx, hry, pathMode);
</script>

<section class="blog:col-popout flex flex-col gap-2 my-5">
	<div class="bg-blue-800/20 border border-blue-500/50 p-4 rounded-lg">
		<p class="font-mono text-center tabular-nums">
			<span class="code-green">d</span>="<span class="code-yellow">{d}</span>"
		</p>
	</div>
	<div class="flex flex-col sm:flex-row gap-2">
		<div class="independent grow border border-gray-100/10 rounded-lg">
			<div
				class="mirrored bottom-2 left-2 font-mono text-sm text-gray-100/70 bg-gray-900/50 border border-gray-100/10 py-1 px-2 rounded-sm backdrop-blur-sm"
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
				<circle cx={startX} cy={startY} r="0.5" class="fill-gray-300 stroke-[0.1] stroke-black" />
				<circle cx={endX} cy={endY} r="0.5" class="fill-gray-300 stroke-[0.1] stroke-black" />
				<circle cx={midX} cy={midY} r="0.5" class="fill-yellow-300 stroke-[0.1] stroke-black" />
				<circle cx={hlx} cy={hly} r="0.3" class="fill-yellow-300 stroke-[0.1] stroke-black" />
				<line x1={hlx} y1={hly} x2={midX} y2={midY} class="stroke-yellow-300 stroke-[0.1]" />
				<circle
					cx={mirrorX}
					cy={mirrorY}
					r="0.3"
					class="fill-yellow-300 stroke-[0.1] stroke-black"
				/>
				<line
					x1={mirrorX}
					y1={mirrorY}
					x2={midX}
					y2={midY}
					class="stroke-yellow-300 stroke-[0.1]"
				/>
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
						class:!bg-opacity-100={pathMode === 'mirrored'}
						on:click={() => (pathMode = 'mirrored')}>Mirrored</button
					>
					<button
						class="grow bg-blue-600 bg-opacity-20 border border-blue-500/50 py-1.5 px-2 rounded-r-md"
						class:!bg-opacity-100={pathMode === 'independent'}
						on:click={() => (pathMode = 'independent')}>Independent</button
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
					bind:value={offX}
					min="0"
					max={midpoint}
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
					bind:value={offY}
					min={-initY}
					max={initY}
					step="0.5"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex gap-x-2 items-center">
					<div class="w-2 h-2 rounded-full bg-yellow-300" />
					<label class="font-mono" for="end-x">End X</label>
				</div>
				<input
					type="range"
					id="end-x"
					name="end-x"
					bind:value={hrx}
					min={midpoint}
					max={size}
					step="0.5"
					disabled={pathMode === 'mirrored'}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex gap-x-2 items-center">
					<div class="w-2 h-2 rounded-full bg-yellow-300" />
					<label class="font-mono" for="end-y">End Y</label>
				</div>
				<input
					type="range"
					id="end-y"
					name="end-y"
					bind:value={hry}
					min={0}
					max={midpoint}
					step="0.5"
					disabled={pathMode === 'mirrored'}
				/>
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
