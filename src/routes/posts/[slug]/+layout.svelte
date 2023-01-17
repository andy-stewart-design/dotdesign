<script lang="ts">
	import '@styles/prose.css';
	import '@styles/prettycode.css';
	import Container from '@components/global/Container.svelte';
</script>

<Container pxNone py="xl">
	<article class="content prose">
		<slot />
	</article>
</Container>

<style global lang="postcss">
	.content {
		@apply grid grid-cols-article gap-y-5;
	}

	.content > * {
		grid-column: content;
	}
</style>
