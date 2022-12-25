<script lang="ts">
	import Container from '@components/global/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { years, albums } = data;
</script>

<Container py="xl">
	<h1 class="text-8xl md:text-9xl mb-12">Playlist</h1>
	<div class="grid gap-10">
		{#each years as year, index}
			<div class="grid gap-5">
				<div
					class="sticky top-0 text-lg tabular-nums bg-level-06/75 border-b border-level-01/20 py-3 backdrop-blur"
				>
					{year}
				</div>
				<div class="grid grid-cols-5 gap-x-4 gap-y-8">
					{#each albums[index] as album}
						<div class="grid gap-4">
							<div class="aspect-square bg-level-04 rounded shadow-xl overflow-hidden">
								<img src={`/playlist/${album.src}`} alt={album.alt} />
							</div>
							<div class="grid gap-1">
								<h3 class="font-semibold">{album.title}</h3>
								<h4>{album.artist}</h4>
								<ul class="flex font-medium text-xs mt-1.5">
									{#each album.tags as tag}
										<li
											class="border border-r-0 last-of-type:border-r border-level-01/20 px-1.5 py-0.5"
										>
											{tag}
										</li>
									{/each}
								</ul>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Container>
