<script lang="ts">
	import { page } from '$app/stores';
	import type { NavLinks } from '$lib/types/nav';

	// let innerWidth: number;
	const links: NavLinks[] = [
		{ href: '/', text: 'Home' },
		{ href: '/work', text: 'Work' },
		{ href: '/feed', text: 'Feed' },
		{ href: '/posts', text: 'Posts' },
		{ href: '/about', text: 'Info' }
	];

	// let navContainer: HTMLElement;

	// let isNavActive = false;
	// $: if ($navigating) isNavActive = false;
	// const triggerNav = () => (isNavActive = !isNavActive);

	// let ioDetails: ObserverEventDetails = { intersectionRatio: 1 };
	// const onChange = ({ detail }: { detail: ObserverEventDetails }) => {
	// 	ioDetails = detail;
	// };

	function getActivePath(path: string) {
		const slug = path.split('/').slice(0, 2).join('/');
		if (slug) return slug;
		else console.error('Could not derive th active pathname');
	}

	$: activePath = getActivePath($page.url.pathname);
</script>

<nav
	class="fixed bottom-8 left-1/2 -translate-x-1/2 p-2 bg-level-05/70 backdrop-blur-md rounded-full z-40 before:border before:border-1 before:border-level-01/10 before:absolute before:-top-px before:-left-px before:-right-px before:-bottom-px before:rounded-full"
>
	<ul class="flex gap-1">
		{#each links as link}
			<li class="group relative">
				<div
					class="absolute top-0 left-0 w-full h-full bg-level-02 border border-level-01/10 rounded-full opacity-0 transition-opacity group-hover:opacity-10 active:opacity-100 group-hover:active:opacity-100"
					class:active={activePath === link.href}
					aria-hidden="true"
				/>
				<a
					class="relative block font-medium select-none py-3 px-5 sm:px-6 transition-colors active:text-level-06"
					class:active={activePath === link.href}
					class:pointer-events-none={$page.url.pathname === link.href}
					href={link.href}
					data-sveltekit-preload-data="hover">{link.text}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<!-- <svelte:window bind:innerWidth />

<div
	class="absolute top-0 left-0 w-screen h-96 -z-50 invisible"
	use:inView={{ threshold: [0, 0.25, 1] }}
	on:change={onChange}
/>
<nav bind:this={navContainer} class="w-screen z-50">
	<Container class="flex justify-between items-center w-full">
		<a
			href="/"
			class="relative w-10 p-0.5"
			class:pointer-events-none={isNavActive || $page.url.pathname === '/'}
			aria-disabled={isNavActive}
		>
			<AndyLogo />
		</a>
		<NavOverlay {navContainer} {links} {isNavActive} {triggerNav} page={$page.url.pathname} />
		<ul class="hidden md:flex gap-8">
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
		<div class="flex justify-start w-22 md:w-auto">
			<ThemeToggle disabled={isNavActive} />
			<div
				class="relative flex bg-gray-100/0 dark:bg-black/0 outline outline-gray-100/0 dark:outline-gray-900/0 transition-all duration-300 ease-out-cubic md:fixed md:top-4 md:right-8 md:-translate-y-16 md:transition-all md:duration-200 md:ease-in-cubic z-50"
				class:has-scrolled-sm={innerWidth < 768 && ioDetails.intersectionRatio < 0.95}
				class:has-scrolled-container-md={innerWidth >= 768 && !ioDetails.intersectionRatio}
			>
				<div
					class="hidden md:block absolute top-0 left-0 w-full h-full bg-gray-100/50 dark:bg-black/50 border border-gray-900/10 dark:border-gray-100/10 rounded-full opacity-0 transition-opacity duration-200 ease-in-cubic"
					class:has-scrolled-bg-md={innerWidth >= 768 && !ioDetails.intersectionRatio}
				/>
				<NavTrigger
					class="relative"
					callback={triggerNav}
					disabled={innerWidth >= 768 && !!ioDetails.intersectionRatio}
				/>
			</div>
		</div>
	</Container>
</nav>

<style scoped>
	.has-scrolled-sm {
		@apply fixed top-4 right-2 bg-gray-100/50 g-dark:bg-black/50 outline-gray-900/10 g-dark:outline-gray-100/10 rounded-full backdrop-blur overflow-hidden;
		animation: slide-in 800ms cubic-bezier(0.25, 1, 0.5, 1);
	}

	.has-scrolled-container-md {
		@apply backdrop-blur rounded-full overflow-hidden translate-y-0 ease-out-cubic duration-500;
	}

	.has-scrolled-bg-md {
		@apply opacity-100 ease-out-cubic duration-500;
	}

	@keyframes slide-in {
		from {
			transform: translateY(-80px);
		}
		from {
			to: translateY(0px);
		}
	}
</style> -->
