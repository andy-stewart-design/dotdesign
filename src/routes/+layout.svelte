<script lang="ts">
	import '@styles/main.css';
	import Nav from '@components/global/Nav';
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

<Nav />
<slot />
