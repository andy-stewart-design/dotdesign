<script lang="ts">
	import '@styles/main.css';
	import 'neutral-ui/base.css';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import Nav from '@components/global/Nav';
	import { fly } from 'svelte/transition';
	import { cubicIn, sineOut } from 'svelte/easing';
	import Grid from '@components/global/Grid.svelte';
	import NavPageTop from '@components/global/Nav/NavPageTop.svelte';

	interface Data {
		pathname: string;
	}

	export let data: Data;

	afterNavigate(() => disableScrollHandling());
</script>

<Nav />
<!-- <Grid /> -->
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
