<script lang="ts">
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import '@styles/main.css';
	import Nav from '@components/global/Nav';
	import { fade } from 'svelte/transition';

	interface Data {
		pathname: string;
	}

	export let data: Data;

	afterNavigate(() => disableScrollHandling());
</script>

{#key data.pathname}
	<div
		in:fade={{ duration: 300, delay: 600 }}
		out:fade={{ duration: 300 }}
		on:outroend={() => window.scrollTo(0, 0)}
	>
		<Nav />
		<slot />
	</div>
{/key}
