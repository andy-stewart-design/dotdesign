<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import { toolData, type ToolSet } from '@content/uses/uses';
	import type { PageData } from './$types';

	export let data: PageData;

	const { categories, tools } = data;

	// const categories = Object.keys(toolData);
	// const tools: ToolSet[][] = Object.values(toolData);
</script>

<Container py="xl">
	<section class="flex flex-col gap-12">
		<div class="flex flex-col gap-4 w-full max-w-3xl mx-auto border-b border-level-01/10 pb-10">
			<h3 class="font-medium text-xs">Uses</h3>
			<h2 class="text-lg">
				Curious about how I do my work? This list is a living document of the hardware, software,
				and services I use every day. I’ll keep it updated as my workflow and equipment changes.
			</h2>
		</div>
		{#each tools as brand, index}
			<div class="flex flex-col gap-6 w-full max-w-3xl mx-auto">
				<div class="flex gap-6 font-medium text-xs slashed-zero">
					<div class="shrink-0 w-16 text-level-01 opacity-40" aria-hidden="true">0{index + 1}</div>
					<h3 class="capitalize">{categories[index]}</h3>
				</div>
				{#each brand as toolset}
					<div class="flex flex-col xs:flex-row gap-6 items-start">
						<a class="group shrink-0 w-16 text-level-01" href={toolset.link}>
							<div
								class="relative bg-level-05 p-3 rounded-xl border-b-1.5 border-level-03/20 dark:border-level-01/10 overflow-hidden transition-transform duration-500 ease-out-cubic group-hover:-translate-y-1"
							>
								{#if toolset.inlineLogo}
									{@html toolset.logo}
								{:else}
									<img src={`/uses/${toolset.logo}`} alt={`${toolset.brand} logo`} />
								{/if}
								<div
									class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-level-01 to-transparent opacity-30 dark:opacity-10 mix-blend-overlay dark:mix-blend-normal transition-opacity duration-500 ease-out-cubic group-hover:opacity-90 dark:group-hover:opacity-25"
								/>
							</div>
						</a>
						<div class="grow flex flex-col gap-6 pt-1">
							{#each toolset.tools as tool}
								<div class="flex flex-col gap-2 border-b border-level-01/10 pb-6">
									<div class="flex items-center gap-3">
										<h2 class="font-medium text-xl">{tool.name}</h2>
										<span
											class="font-medium text-xs text-level-01/50 border border-level-01/20 py-0.5 px-1 rounded"
										>
											{tool.category}
										</span>
									</div>
									<p class="opacity-75">{@html tool.descr}</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</section>
</Container>
