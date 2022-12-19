<script lang="ts">
	import { onMount } from 'svelte';
	import { appTheme, type ThemeOptions } from '$lib/stores/theme';

	export let disabled = false;
	let theme: ThemeOptions;

	const setTheme = () => {
		theme === 'DARK' ? (theme = 'LIGHT') : (theme = 'DARK');
		document.firstElementChild?.setAttribute('data-theme', theme.toLocaleLowerCase());
		if (theme === 'DARK') {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
		localStorage.setItem('theme-preference', theme.toLocaleLowerCase());
		$appTheme = theme;
	};

	onMount(() => {
		const storedThemePreference = localStorage.getItem('theme-preference');
		if (storedThemePreference === null) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK' : 'LIGHT';
			$appTheme = theme;
		} else {
			const themePreference: ThemeOptions = storedThemePreference === 'dark' ? 'DARK' : 'LIGHT';
			theme = themePreference;
			$appTheme = theme;
		}
	});
</script>

<button
	class={`opacity-0 transition-opacity duration-500 ease-out p-3 ${$$props.class}`}
	class:loaded={!!theme}
	on:click={setTheme}
	{disabled}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		role="img"
		class="w-5"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 20 20"
	>
		<path
			fill="currentColor"
			d="M10 1c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 16V3c3.86 0 7 3.14 7 7s-3.14 7-7 7z"
		/>
	</svg>
</button>

<style scoped>
	.loaded {
		@apply opacity-100;
	}
</style>
