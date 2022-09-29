<div class="container">
	<slot />
</div>

<style>
	.container {
		padding: var(--space-4) var(--space-2);
	}
	@media only screen and (min-width: 768px) {
		.container {
			padding: var(--space-8) var(--space-4);
		}
	}
</style>
