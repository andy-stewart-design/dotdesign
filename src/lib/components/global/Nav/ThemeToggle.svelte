<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'LIGHT' | 'DARK';

	let theme: Theme;

	const setTheme = () => {
		theme === 'DARK' ? (theme = 'LIGHT') : (theme = 'DARK');
		document.firstElementChild?.setAttribute('data-theme', theme.toLocaleLowerCase());
		localStorage.setItem('theme-preference', theme.toLocaleLowerCase());
	};

	onMount(() => {
		const storedThemePreference = localStorage.getItem('theme-preference');
		console.log(storedThemePreference);
		if (storedThemePreference === null) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK' : 'LIGHT';
		} else {
			const themePreference: Theme = storedThemePreference === 'dark' ? 'DARK' : 'LIGHT';
			theme = themePreference;
		}
	});
</script>

<button
	class="w-11 h-11 bg-gray-900/70 border border-gray-100/10 rounded-full opacity-0 transition-opacity duration-500 ease-out"
	class:loaded={!!theme}
	on:click={setTheme}
/>

<style>
	.loaded {
		@apply opacity-100;
	}
</style>
