<script lang="ts">
	import { navigating, page } from '$app/stores';
	import Container from '@components/global/Container.svelte';
	import AndyLogo from '@components/svg/AndyLogo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import type { NavLinks } from 'types/nav';

	export let subNav: NavLinks[] | undefined = undefined;

	let from: string | null | undefined = undefined;
	let to: string | null | undefined = undefined;

	$: from = $navigating?.from?.routeId !== undefined ? $navigating?.from?.routeId : from;
	$: to = $navigating?.to?.routeId !== undefined ? $navigating?.to?.routeId : to;
</script>

<Container class="absolute top-0 left-0 flex justify-between items-center w-screen">
	<a href="/" class="relative w-10 p-0.5" class:pointer-events-none={$page.url.pathname === '/'}>
		<AndyLogo />
	</a>
	{#if subNav}
		<ul class="flex gap-8">
			{#each subNav as item}
				<li>
					<a href={item.href} class="font-medium">{item.text}</a>
				</li>
			{/each}
		</ul>
	{/if}
	<ThemeToggle />
</Container>
