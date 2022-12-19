<script lang="ts">
	import { Button } from 'neutral-ui';
	import { clsx } from 'neutral-ui/utils';

	export let large = false;
	export let icon = false;
	export let label: string | undefined = undefined;
	export let disabled = false;
	export let link = false;
	export let href = '';
	export let tabindex = 0;

	let slotProps: any = { tabindex };
	if (label) slotProps = { label, ...slotProps };
</script>

{#if link}
	<a
		class={clsx(
			'text-foreground-2 font-medium bg-transparent border border-foreground-2/20 rounded-full transition-colors ease-out duration-300 enabled:can-hover:text-surface-2 enabled:can-hover:bg-foreground-2 enabled:can-hover:border-foreground-2 enabled:group-hover:text-surface-2 enabled:group-hover:bg-foreground-2 enabled:group-hover:border-foreground-2 select-none',
			!large && !icon && 'py-2 px-5',
			!large && icon && 'p-2.5',
			large && !icon && 'py-3.5 px-7',
			large && icon && 'p-3.5'
		)}
		{href}
		on:mouseover
		on:focus
		on:mouseout
		on:blur
	>
		<slot />
	</a>
{:else}
	<Button
		on:click
		class={clsx(
			'text-foreground-2 font-medium bg-transparent border border-foreground-2/20 rounded-full transition-colors ease-out duration-300 enabled:can-hover:text-surface-2 enabled:can-hover:bg-foreground-2 enabled:can-hover:border-foreground-2 enabled:group-hover:text-surface-2 enabled:group-hover:bg-foreground-2 enabled:group-hover:border-foreground-2 select-none disabled:text-foreground-2/40 disabled:border-foreground-2/10',
			!large && !icon && 'py-2 px-5',
			!large && icon && 'p-2.5',
			large && !icon && 'py-3.5 px-7',
			large && icon && 'p-3.5',
			disabled && 'pointer-events-none'
		)}
		{disabled}
		{...slotProps}
	>
		<slot />
	</Button>
{/if}
