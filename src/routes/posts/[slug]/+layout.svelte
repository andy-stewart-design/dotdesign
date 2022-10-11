<script lang="ts">
	import '@styles/prose.css';
	import '@styles/prism.css';
	import Container from '@components/global/Container.svelte';
</script>

<article class="content prose">
	<slot />
</article>

<style global>
	.content {
		--gap: 1rem;
		--content: min(50ch, 100% - var(--gap) * 2);
		--popout: minmax(0, 2rem);
		--feature: minmax(0, 5rem);
		--full: minmax(var(--gap), 1fr);

		@apply grid gap-y-5;
		grid-template-columns:
			[full-start] var(--full)
			[feature-start] var(--feature)
			[popout-start] var(--popout)
			[content-start] var(--content) [content-end]
			var(--popout) [popout-end]
			var(--feature) [feature-end]
			var(--full) [full-end];
	}
	.content > * {
		grid-column: content;
	}

	.popout,
	pre[class^='language-'] {
		grid-column: popout;
	}
	.feature {
		grid-column: feature;
	}
	.full {
		grid-column: full;
	}
</style>
