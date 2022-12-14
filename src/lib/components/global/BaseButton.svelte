<script lang="ts">
	import { Button } from 'neutral-ui';
	import { clsx } from 'neutral-ui/utils';

	export let large = false;
	export let icon = false;
	export let label: string | undefined = undefined;
	export let disabled = false;

	let slotProps = {};
	if (label) slotProps = { label, ...slotProps };
</script>

<Button
	on:click
	class={clsx(
		'text-foreground-2 font-medium bg-transparent border border-foreground-2/20 rounded-full transition-colors ease-out duration-300 can-hover:text-surface-2 can-hover:bg-foreground-2 can-hover:border-foreground-2 select-none',
		!large && !icon && 'py-2 px-5',
		!large && icon && 'p-2.5',
		large && !icon && 'py-3.5 px-7',
		large && icon && 'p-3.5'
	)}
	{disabled}
	{...slotProps}
>
	<slot />
</Button>
