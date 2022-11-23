<script lang="ts">
	import {
		NumberInput,
		NumberLabel,
		NumberDecrement,
		NumberIncrement,
		NumberDescription,
		NumberError,
		Switch,
		SwitchLabel
	} from 'neutral-ui';
	type PointPositionType = 'relative' | 'absolute';
	type PointsArray = string[][];
	interface PointsData {
		[key: string]: PointsArray;
	}

	const size = 20;
	const minPoints = 3;
	const maxPoints = 7;
	let points = 5;
	// let pathMode: PointPositionType = 'absolute';
	let absolute = true;

	const shapes: PointsData = {
		absolute: [
			['10 2', '19 18', '1 18'],
			['10 2', '18 10', '10 18', '2 10'],
			['10 2', '18 8', '15 17', '5 17', '2 8'],
			['10 2', '17 6', '17 14', '10 18', '3 14', '3 6'],
			['10 2', '16.5 5.5', '18 12.5', '13.5 18', '6.5 18', '2 12.5', '3.5 5.5']
		],
		relative: [
			['10 2', '9 16', '-18 0'],
			['10 2', '8 8', '-8 8', '-8 -8'],
			['10 2', '8 6', '-3 9', '-10 0', '-3 -9'],
			['10 2', '7 4', '0 8', '-7 4', '-7 -4', '0 -8'],
			['10 2', '6.5 3.5', '1.5 7', '-4.5 5.5', '-7 0', '-4.5 -5.5', '1.5 -7']
		]
	};

	function getActiveShape(shapes: PointsData, pathMode: boolean): PointsArray {
		if (!pathMode) return shapes.relative;
		else return shapes.absolute;
	}

	function setPath(points: number, shapes: PointsData, pathMode: boolean): string {
		let lineCommand: string;
		let activeShape;
		if (!pathMode) {
			lineCommand = 'l';
			activeShape = shapes.relative[points - minPoints];
		} else {
			lineCommand = 'L';
			activeShape = shapes.absolute[points - minPoints];
		}
		let path = [`M ${activeShape[0]}`];
		for (let i = 1; i < activeShape.length; i++) {
			path.push(`${lineCommand} ${activeShape[i]}`);
			if (i + 1 === activeShape.length) path.push('Z');
		}
		return path.join(' ');
	}

	$: activeShape = getActiveShape(shapes, absolute);
	$: d = setPath(points, shapes, absolute);
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
				<path {d} class="stroke-gray-300 fill-gray-800/60 stroke-[0.1]" />
				{#each shapes.absolute[points - minPoints] as point, index}
					{@const pointArray = point.split(' ')}
					<circle
						cX={pointArray[0]}
						cY={pointArray[1]}
						r="0.5"
						class="stroke-gray-900 stroke-[0.1px]"
						fill={`hsl(${index * (360 / points)}, 80%, 60%)`}
					/>
				{/each}
			</svg>
		</div>
		<div class="flex flex-col sm:w-72 bg-gray-900 border border-gray-100/10 rounded-lg">
			<div class="flex gap-6 py-3 px-4 border-b border-gray-100/10">
				<div class="flex items-center gap-2">
					<Switch
						bind:value={absolute}
						class="relative flex shrink-0 bg-gray-800 cursor-pointer p-0.5 pr-[1.375rem] rounded-full border border-gray-100/10 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
					>
						<div
							class="w-5 h-5 bg-blue-600 rounded-full transition-transform"
							class:translate-x-full={absolute}
							aria-hidden="true"
						/>
						<SwitchLabel slot="end">
							<span class="text-sm select-none">{absolute ? 'Absolute' : 'Relative'}</span>
						</SwitchLabel>
					</Switch>
				</div>
			</div>
			<div class="grow flex flex-col gap-6 justify-start p-4 pt-6">
				<div class="flex flex-col gap-2">
					<NumberInput
						bind:value={points}
						min={minPoints}
						max={maxPoints}
						bigStep={1}
						class="bg-gray-800/50 border border-gray-100/10 py-2 px-3 rounded"
					>
						<NumberLabel class="text-sm" slot="label">Number of Points</NumberLabel>
						<div class="absolute top-0 right-1 flex items-center h-full">
							<NumberDecrement class="py-0.5 pt-px px-3 select-none border-r border-gray-100/10">
								-
							</NumberDecrement>
							<NumberIncrement class="py-0.5 pt-px px-3 select-none">+</NumberIncrement>
						</div>
						<NumberDescription slot="description" class="text-xs opacity-60">
							Select a number between 3 and 8
						</NumberDescription>
						<NumberError slot="error" class="text-xs text-red-500">You goofed!</NumberError>
					</NumberInput>
				</div>
				<div class="grid gap-1">
					{#each activeShape[points - minPoints] as point, index}
						{@const pointArray = point.split(' ')}
						<div
							class="grid grid-cols-3 gap-x-2 tabular-nums slashed-zero pb-1 border-b border-gray-100/10"
						>
							<div class="flex gap-2 items-center">
								<div
									class="w-2 h-2 rounded-full"
									style:background={`hsl(${index * (360 / points)}, 80%, 60%)`}
								/>
								0{index + 1}
							</div>
							<div>
								<span class="opacity-50">x:</span>
								{pointArray[0]}
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
