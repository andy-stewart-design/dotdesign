<script lang="ts">
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import '@styles/main.css';
	import 'neutral-ui/base.css';
	import Nav from '@components/global/Nav';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut, cubicIn } from 'svelte/easing';

	interface Data {
		pathname: string;
	}

	export let data: Data;

	afterNavigate(() => disableScrollHandling());
</script>

<!-- <div
	class="absolute top-0 left-0 w-screen h-screen bg-gradient-to-br from-orange-400 to-red-600 opacity-80"
/> -->
{#key data.pathname}
	<div
		in:fly={{ duration: 300, delay: 600, y: 40, opacity: 0, easing: cubicOut }}
		out:fly={{ duration: 300, y: -60, opacity: 0, easing: cubicIn }}
		on:outroend={() => window.scrollTo(0, 0)}
		class="relative bg-black"
	>
		<Nav />
		<slot />
	</div>
{/key}
