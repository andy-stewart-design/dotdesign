<script lang="ts">
	import Container from './Container.svelte';

	let isNavActive = false;
</script>

<nav class="nav">
	<Container>
		<div class="nav-container">
			<ul class="links-container" class:active={isNavActive}>
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
			<button class="nav-trigger" on:click={() => (isNavActive = !isNavActive)}>O</button>
		</div>
	</Container>
</nav>

<style lang="postcss" scoped>
	nav.nav {
		position: fixed;
		display: flex;
		width: 100vw;
		/* background-color: blue; */
	}

	div.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		/* background-color: coral; */
	}

	ul.links-container {
		visibility: hidden;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-003);
		width: 100vw;
		height: 100vh;
		background-color: rgba(var(--black-rgb), 0.8);
		backdrop-filter: blur(10px);
		opacity: 0;
		transition: opacity 0.375s cubic-bezier(0.33, 1, 0.68, 1),
			visibility 0.375s cubic-bezier(0.33, 1, 0.68, 1);

		&.active {
			visibility: visible;
			opacity: 1;
		}
	}

	button.nav-trigger {
		position: relative;
		padding: var(--space-002);
		background: var(--gray-900);
	}
</style>
