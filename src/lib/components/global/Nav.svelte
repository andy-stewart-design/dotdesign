<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AndyLogo from '@components/svg/AndyLogo.svelte';
	import Hamburger from '@components/svg/Hamburger.svelte';
	import Container from '@components/global/Container.svelte';

	let isNavActive = false;
</script>

<nav class="w-screen">
	<Container class="flex justify-between items-center w-full">
		<div class="relative w-10 p-1">
			<AndyLogo />
		</div>
		<ul class="flex gap-3">
			<li>
				<a href="/" sveltekit:prefetch>Home</a>
			</li>
			<li>
				<a href="/posts" sveltekit:prefetch>Posts</a>
			</li>
			<li>
				<a href="/about" sveltekit:prefetch>About</a>
			</li>
		</ul>
		<button
			class="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg"
			on:click={() => (isNavActive = !isNavActive)}
		>
			<Hamburger />
		</button>
	</Container>
</nav>
<div class="h-40">
	{#if isNavActive}
		<div
			transition:fade={{ duration: 400, easing: cubicOut }}
			class="flex flex-col gap-3 justify-center items-center w-full h-full bg-gray-700"
		>
			{#each { length: 3 } as _, i}
				<div class="overflow-hidden">
					<p in:fly={{ y: 40, delay: 200 + i * 100, duration: 400, easing: cubicOut }}>Testing</p>
				</div>
			{/each}
		</div>
	{/if}
</div>
