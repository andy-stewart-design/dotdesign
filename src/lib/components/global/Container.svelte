<script lang="ts">
	type Sizes = 'sm' | 'md' | 'lg' | 'xl';

	export let pt: Sizes = 'sm';
	export let pb: Sizes = 'sm';
</script>

<div
	class={`container ${$$props.class}`}
	class:pt-sm={pt === 'sm'}
	class:pt-lg={pt === 'lg'}
	class:pb-sm={pb === 'sm'}
>
	<slot />
</div>

<style lang="postcss" scoped>
	.container {
		padding-left: var(--space-004);
		padding-right: var(--space-004);
		width: 100%;

		@media (--sm) {
			& {
				padding-left: var(--space-008);
				padding-right: var(--space-008);
			}
		}
	}

	.pt-sm {
		padding-top: var(--space-002);
	}

	.pt-lg {
		padding-top: var(--space-020);
	}

	.pb-sm {
		padding-bottom: var(--space-002);
		padding: var(spa);
	}
</style>
