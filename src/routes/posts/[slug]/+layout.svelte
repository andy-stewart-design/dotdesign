<script lang="ts">
	import '@styles/prose.css';
	// import '@styles/prism.css';
	import '@styles/prettycode.css';
	import Container from '@components/global/Container.svelte';
</script>

<article class="content prose">
	<slot />
</article>

<style global>
	.content {
		@apply grid grid-cols-article gap-y-5;
	}

	.content > * {
		grid-column: content;
	}
</style>
