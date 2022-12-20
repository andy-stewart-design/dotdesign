<script lang="ts">
	import { appTheme } from '$lib/stores/theme';
	import type { SvelteComponent } from 'svelte';
	import WorkCardContent from './WorkCardContent.svelte';

	export let pageBG = 'transparent';
	export let hover: string;
	export let hoverLight: string = hover;
	export let slug: string;
	export let component: typeof SvelteComponent | undefined = undefined;

	export let categories: string[];
	export let client: string;
	export let summary: string;
	export let published = true;

	let active = false;
	const url = `/work/${slug}`;

	function setBackground() {
		$appTheme === 'DARK' ? (pageBG = hover) : (pageBG = hoverLight);
		active = true;
	}

	function resetBackground() {
		pageBG = 'transparent';
		active = false;
	}
</script>

<div
	class="grid md:grid-cols-2 bg-level-05 border border-level-02/10 rounded-2xl overflow-hidden transition-colors duration-500 ease-out-cubic active:bg-opacity-80 dark:active:bg-opacity-90"
	class:active
>
	<div class="p-4 grid">
		{#if component}
			<svelte:component this={component} />
		{/if}
	</div>
	<div class="flex flex-col justify-center p-8 pt-4 md:p-12">
		{#if published}
			<a
				class="group flex justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-level-05"
				href={url}
				on:mouseover={setBackground}
				on:focus={setBackground}
				on:mouseout={resetBackground}
				on:blur={resetBackground}
			>
				<WorkCardContent {categories} {client} {summary} {published} />
			</a>
		{:else}
			<div
				class="group flex justify-center items-start gap-5 cursor-default"
				href={url}
				on:mouseover={setBackground}
				on:focus={setBackground}
				on:mouseout={resetBackground}
				on:blur={resetBackground}
			>
				<WorkCardContent {categories} {client} {summary} {published} />
			</div>
		{/if}
	</div>
</div>
