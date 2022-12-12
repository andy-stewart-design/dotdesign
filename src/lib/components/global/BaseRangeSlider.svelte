<script lang="ts">
	import {
		RangeSlider,
		RangeSliderLabel,
		RangeSliderThumb,
		RangeSliderTrack,
		RangeSliderProgress
	} from 'neutral-ui';

	type Counter = 'value' | 'decimal' | 'percentage';

	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;
	export let bigStep: number;
	export let label: string;
	export let counter: Counter = 'value';

	let defaultValue = value;

	let containerProps = { min, max, step, bigStep };
</script>

<RangeSlider
	bind:value
	{...containerProps}
	class="relative flex flex-col gap-2 w-full pb-3"
	let:resetValue
	let:progress
>
	<div class="flex justify-between text-sm tabular-nums">
		<div class="flex items-center gap-2">
			<RangeSliderLabel>{label}</RangeSliderLabel>
			{#if defaultValue !== value}
				<button
					class="opacity-40 transition-opacity hover:opacity-70 duration-300"
					on:click={resetValue}>Reset</button
				>
			{/if}
		</div>
		<p class="text-sm tabular-nums">
			{#if counter === 'decimal'}
				{value.toFixed(1)}
			{:else if counter === 'percentage'}
				{`${Math.floor(progress)}%`}
			{:else}
				{value}
			{/if}
		</p>
	</div>
	<RangeSliderTrack
		class="h-2 bg-gray-200 dark:bg-gray-700 border border-black/10 dark:border-gray-100/10 rounded-full"
	>
		<RangeSliderProgress class="bg-gradient-to-r h-2 from-gray-100/40 to-gray-100 rounded-full" />
		<RangeSliderThumb
			class="bg-brand dark:bg-gray-100 border border-gray-100 w-5 h-5 rounded-full cursor-pointer focus:ring-8 focus:ring-bg-brand/60 outline-none"
		/>
	</RangeSliderTrack>
</RangeSlider>
