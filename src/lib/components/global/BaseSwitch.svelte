<script lang="ts">
	import { Switch, SwitchLabel, SwitchThumb } from 'neutral-ui';
	import { clsx } from '@utils/clsx';

	type LabelPositions = 'start' | 'end';

	export let value: boolean;
	export let label: string;
	export let labelPosition: LabelPositions = 'start';
	export let grow: boolean = false;
</script>

{#if labelPosition === 'end'}
	<Switch
		bind:value
		class="relative flex shrink-0 bg-brand cursor-pointer p-0.5 pr-[1.375rem] rounded-full duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
	>
		<SwitchThumb
			class={clsx(
				'w-5 h-5 bg-surface-2 rounded-full transition-transform active:translate-x-full',
				value && 'active'
			)}
		/>
		<SwitchLabel class="cursor-pointer" slot="end">
			<span class="select-none transition-opacity duration-200 ease-out" class:opacity-50={!value}>
				{label}
			</span>
		</SwitchLabel>
	</Switch>
{:else if labelPosition === 'start'}
	<Switch
		bind:value
		class="relative flex shrink-0 bg-brand cursor-pointer p-0.5 pr-[1.375rem] rounded-full duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/50 focus-visible:ring-opacity-75"
	>
		<SwitchLabel class={clsx('cursor-pointer', grow && 'grow')} slot="start">
			<span class="select-none transition-colors" class:opacity-50={!value}>
				{label}
			</span>
		</SwitchLabel>
		<SwitchThumb
			class={clsx(
				'w-5 h-5 bg-surface-3 rounded-full transition-transform active:translate-x-full',
				value && 'active'
			)}
		/>
	</Switch>
{/if}
