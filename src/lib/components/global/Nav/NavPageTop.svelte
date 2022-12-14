<script lang="ts">
	import { navigating, page } from '$app/stores';
	import Container from '@components/global/Container.svelte';
	import AndyLogo from '@components/svg/AndyLogo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<Container class="absolute top-0 left-0 flex justify-between items-center w-screen">
	<a href="/" class="relative w-10 p-0.5" class:pointer-events-none={$page.url.pathname === '/'}>
		<AndyLogo />
	</a>
	<ThemeToggle />
</Container>
