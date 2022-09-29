<script lang="ts">
	import Container from './Container.svelte';
</script>

<nav>
	<Container>
		<ul>
			<li>
				<a href="/" sveltekit:prefetch>Home</a>
				<a href="/posts" sveltekit:prefetch>Posts</a>
				<a href="/about" sveltekit:prefetch>About</a>
			</li>
		</ul>
	</Container>
</nav>
