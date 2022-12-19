<script lang="ts">
	import BaseButton from '@components/global/BaseButton.svelte';

	export let categories: string[];
	export let client: string;
	export let summary: string;
	export let published: boolean;
</script>

<div class="flex flex-col justify-center items-start gap-5 max-w-lg">
	<ul class="flex gap-3">
		{#each categories as category}
			<li class="font-medium text-sm border border-level-02/30 pt-px pb-0.5 px-2 rounded">
				{category}
			</li>
		{/each}
	</ul>

	<h2 class="text-4xl font-[450]">{client}</h2>
	<p class="mb-1.5">
		{summary}
	</p>
	<BaseButton disabled={!published} tabindex={-1}
		>{published ? 'View Project' : 'Coming Soon'}</BaseButton
	>
</div>
