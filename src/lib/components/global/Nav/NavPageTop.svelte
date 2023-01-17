<script lang="ts">
	import { page } from '$app/stores';
	import Container from '@components/global/Container.svelte';
	import AndyLogo from '@components/svg/AndyLogo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import type { NavLinks } from 'types/nav';

	export let subNav: NavLinks[] | undefined = undefined;
</script>

<Container class="absolute top-0 left-0 flex justify-between items-center w-screen z-50">
	<a href="/" class="relative w-12 p-1" class:pointer-events-none={$page.url.pathname === '/'}>
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
