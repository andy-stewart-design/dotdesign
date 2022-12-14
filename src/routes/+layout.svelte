<script lang="ts">
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import '@styles/main.css';
	import 'neutral-ui/base.css';
	import Nav from '@components/global/Nav';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut, cubicIn, sineOut } from 'svelte/easing';
	import NavPageTop from '@components/global/Nav/NavPageTop.svelte';

	interface Data {
		pathname: string;
	}

	export let data: Data;

	afterNavigate(() => disableScrollHandling());
</script>

<!-- <div
	class="absolute top-0 left-0 w-screen h-screen bg-gradient-to-br from-orange-400 to-red-600 opacity-80"
/> -->
<Nav />
<div class="grid">
	{#key data.pathname}
		<div
			in:fly={{ duration: 300, delay: 600, y: 40, opacity: 0, easing: sineOut }}
			out:fly={{ duration: 300, y: -40, opacity: 0, easing: cubicIn }}
			on:outroend={() => window.scrollTo(0, 0)}
			class="relative row-span-full	col-span-full"
		>
			<NavPageTop />
			<slot />
		</div>
	{/key}
</div>
