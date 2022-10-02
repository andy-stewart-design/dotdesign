<script lang="ts">
	import { navigating, page } from '$app/stores';
	import AndyLogo from '@components/svg/AndyLogo.svelte';
	import NavTrigger from './NavTrigger.svelte';
	import Container from '@components/global/Container.svelte';
	import { inView, type ObserverEventDetails } from '@actions/inview';
	import type { NavLinks } from '$lib/types/nav';
	import NavOverlay from './NavOverlay.svelte';

	let innerWidth: number;
	const links: NavLinks[] = [
		{ href: '/', text: 'Home' },
		{ href: '/posts', text: 'Posts' },
		{ href: '/about', text: 'About' }
	];

	let navContainer: HTMLElement;

	let isNavActive = false;
	$: if ($navigating) isNavActive = false;
	const triggerNav = () => (isNavActive = !isNavActive);

	let ioDetails: ObserverEventDetails = { intersectionRatio: 1 };
	const onChange = ({ detail }: { detail: ObserverEventDetails }) => {
		ioDetails = detail;
	};
</script>

<svelte:window bind:innerWidth />

<div
	class="absolute top-0 left-0 w-screen h-96 -z-50 invisible"
	use:inView={{ threshold: [0, 0.25, 1] }}
	on:change={onChange}
/>
<nav bind:this={navContainer} class="w-screen">
	<Container class="flex justify-between items-center w-full">
		<a
			href="/"
			class="relative w-10 p-0.5 hover:cursor-crosshair"
			class:pointer-events-none={isNavActive || $page.url.pathname === '/'}
			aria-disabled={isNavActive}
		>
			<AndyLogo />
		</a>
		<NavOverlay {navContainer} {links} {isNavActive} {triggerNav} page={$page.url.pathname} />
		<ul class="hidden md:flex gap-4">
			{#each links as link}
				<li>
					<a
						class="hidden md:block"
						class:invisible={isNavActive}
						class:pointer-events-none={$page.url.pathname === link.href}
						aria-disabled={isNavActive || innerWidth < 768}
						href={link.href}
						data-sveltekit-prefetch>{link.text}</a
					>
				</li>
			{/each}
		</ul>
		<div class="w-10">
			<div
				class="relative md:fixed md:top-4 md:right-8 md:-translate-y-16 md:transition-transform md:duration-500 md:ease-out"
				class:is-scrollin-sm={innerWidth < 768 && ioDetails.intersectionRatio < 0.95}
				class:is-scrollin-md={innerWidth >= 768 && !ioDetails.intersectionRatio}
			>
				<NavTrigger
					class="relative"
					callback={triggerNav}
					disabled={innerWidth >= 768 && !!ioDetails.intersectionRatio}
				/>
			</div>
		</div>
	</Container>
</nav>

<style>
	.is-scrollin-sm {
		@apply fixed top-4 right-2;
		animation: slide-in 800ms cubic-bezier(0.25, 1, 0.5, 1);
	}

	.is-scrollin-md {
		@apply translate-y-0;
	}

	@keyframes slide-in {
		from {
			transform: translateY(-80px);
		}
		from {
			to: translateY(0px);
		}
	}
</style>
