<script lang="ts">
	import type { NavLinks } from '$lib/types/nav';
	import { focusTrap } from '@actions/focusTrap';
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	export let isNavActive = false;
	export let triggerNav: () => void;
	export let navContainer: HTMLElement;
	export let links: NavLinks[];
	export let page: string;
</script>

{#if isNavActive}
	<div
		in:fade={{ duration: 500, easing: quintOut }}
		out:fade={{ duration: 800, easing: quintOut }}
		class="fixed top-0 left-0 flex flex-col gap-4 justify-center items-center w-screen h-screen bg-white/60 dark:bg-black/60 backdrop-blur z-50"
		use:focusTrap={{ targetNode: navContainer, escapeCallback: triggerNav }}
	>
		{#each links as link, i}
			<div class="overflow-hidden">
				<div in:fly={{ y: 40, delay: 200 + i * 100, duration: 400, easing: quintOut }}>
					<a
						class="text-xl"
						class:pointer-events-none={page === link.href}
						aria-disabled={page === link.href}
						href={link.href}
						data-sveltekit-prefetch
					>
						{link.text}
					</a>
				</div>
			</div>
		{/each}
	</div>
{/if}
