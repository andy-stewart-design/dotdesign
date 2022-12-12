<script lang="ts">
	import { clsx } from '@utils/clsx';
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
	export let disabled = false;
	export { className as class };

	let className = 'bg-gray-900 dark:bg-gray-100';

	let defaultValue = value;

	let containerProps = { min, max, step, bigStep };
</script>

<RangeSlider
	bind:value
	{...containerProps}
	class="relative flex flex-col gap-2 w-full pb-3"
	{disabled}
	let:resetValue
	let:progress
>
	<div class="flex justify-between text-sm tabular-nums">
		<div class="flex items-center gap-2">
			<slot name="icon" />
			<RangeSliderLabel>{label}</RangeSliderLabel>
			{#if defaultValue !== value}
				<button
					class="opacity-40 transition-opacity hover:opacity-70 duration-300"
					on:click={resetValue}>Reset</button
				>
			{/if}
		</div>
		<p class="blog:text-sm blog:tabular-nums">
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
		class={clsx(
			'h-1 bg-gray-200 dark:bg-gray-700 border border-black/10 focus:ring-green-500 dark:border-gray-100/10 rounded-full'
		)}
	>
		<RangeSliderProgress class={`h-1 rounded-full ${className}`} />
		<RangeSliderThumb
			class={`w-4 h-4 rounded-full cursor-pointer focus:ring-8 focus:ring-gray-900/20 dark:focus:ring-gray-100/20 outline-none ${className}`}
		/>
	</RangeSliderTrack>
</RangeSlider>
