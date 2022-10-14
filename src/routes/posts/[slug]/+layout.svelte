<script lang="ts">
	import '@styles/prose.css';
	import '@styles/prettycode.css';
	import Container from '@components/global/Container.svelte';
</script>

<Container pxNone py="lg">
	<article class="content prose">
		<slot />
	</article>
</Container>

<style global>
	.content {
		@apply grid grid-cols-article gap-y-5;
	}

	.content > * {
		grid-column: content;
	}
</style>
