<script lang="ts">
	type PointPositionType = 'relative' | 'absolute';
	type PointsArray = string[][];
	interface PointsData {
		[key: string]: PointsArray;
	}

	const size = 20;
	let points = 5;
	let pathMode: PointPositionType = 'relative';

	const shapes: PointsData = {
		absolute: [
			['10 2', '19 18', '1 18'],
			['10 2', '18 10', '10 18', '2 10'],
			['10 2', '18 8', '15 17', '5 17', '2 8', '10 2'],
			['10 2', '17 6', '17 14', '10 18', '3 14', '3 6', '10 2']
		],
		relative: [
			['10 2', '9 16', '-18 0'],
			['10 2', '8 8', '-8 8', '-8 -8'],
			['10 2', '8 6', '-3 9', '-10 0', '-3 -9', '8 -6'],
			['10 2', '7 4', '0 8', '-7 4', '-7 -4', '0 -8', '7 -4']
		]
	};

	function getActiveShape(shapes: PointsData, pathMode: PointPositionType): PointsArray {
		if (pathMode === 'relative') return shapes.relative;
		else return shapes.absolute;
	}

	function setPath(points: number, shapes: PointsData, pathMode: PointPositionType): string {
		let lineCommand: string;
		let activeShape;
		if (pathMode === 'relative') {
			lineCommand = 'l';
			activeShape = shapes.relative[points - 3];
		} else {
			lineCommand = 'L';
			activeShape = shapes.absolute[points - 3];
		}
		let path = [`M ${activeShape[0]}`];
		for (let i = 1; i < activeShape.length; i++) {
			path.push(`${lineCommand} ${activeShape[i]}`);
			if (i + 1 === activeShape.length) path.push('Z');
		}
		return path.join(' ');
	}

	$: activeShape = getActiveShape(shapes, pathMode);
	$: d = setPath(points, shapes, pathMode);
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
				<path {d} class="stroke-blue-600 fill-blue-600/50 stroke-[0.2]" />
			</svg>
		</div>
		<div
			class="flex flex-col gap-6 justify-start sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg p-6"
		>
			<div class="flex">
				<button
					class="grow bg-blue-600 bg-opacity-10 border border-r-0 border-gray-100/10 py-1.5 px-2"
					class:bg-opacity-100={pathMode === 'relative'}
					on:click={() => (pathMode = 'relative')}>Relative</button
				>
				<button
					class="grow bg-blue-600 bg-opacity-10 border border-gray-100/10 py-1.5 px-2"
					class:bg-opacity-100={pathMode === 'absolute'}
					on:click={() => (pathMode = 'absolute')}>Absolute</button
				>
			</div>
			<div class="flex flex-col gap-2">
				<label class="font-mono" for="start-x">Number of Points</label>
				<input
					type="range"
					id="start-x"
					name="start-x"
					bind:value={points}
					min="3"
					max="6"
					step="1"
				/>
			</div>
			<div class="grid gap-1">
				{#each activeShape[points - 3] as point, index}
					{@const pointArray = point.split(' ')}
					<div
						class="grid grid-cols-3 gap-x-2 tabular-nums slashed-zero pb-1 border-b border-gray-100/10"
					>
						<div>0{index}</div>
						<div>
							<span class="opacity-50">x:</span>
							{pointArray[0]},
						</div>
						<div>
							<span class="opacity-50">y:</span>
							{pointArray[1]}
						</div>
					</div>
				{/each}
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
