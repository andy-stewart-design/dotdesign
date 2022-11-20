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

<svelte:head>
	<script>
		let systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		let themePreferenceStored = localStorage.getItem('theme-preference');

		if (themePreferenceStored === null) {
			let theme = systemIsDark ? 'dark' : 'light';
			document.firstElementChild.setAttribute('data-theme', theme);
			document.firstElementChild.classList.add(theme);
		} else {
			document.firstElementChild.setAttribute('data-theme', themePreferenceStored);
			document.firstElementChild.classList.add(themePreferenceStored);
		}
	</script>
</svelte:head>

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
