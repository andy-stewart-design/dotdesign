<script lang="ts">
	import { appTheme } from '$lib/stores/theme';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import WorkCardContent from './WorkCardContent.svelte';

	export let pageBG = 'transparent';
	export let hover: string;
	export let hoverLight: string = hover;
	export let slug: string;
	export let ext = 'webp';

	export let categories: string[];
	export let client: string;
	export let summary: string;
	export let published = true;

	const url = `/work/${slug}`;
	const src = client.replaceAll(' ', '').toLocaleLowerCase();

	function setBackground() {
		$appTheme === 'DARK' ? (pageBG = hover) : (pageBG = hoverLight);
	}

	function resetBackground() {
		pageBG = 'transparent';
	}
</script>

<div class="grid md:grid-cols-2 bg-level-05 border border-level-02/10 rounded-2xl overflow-hidden">
	<div class="p-4">
		{#if $appTheme === 'DARK'}
			<img
				in:fade={{ duration: 400, delay: 200, easing: cubicOut }}
				class="aspect-square"
				src={`/work/index/${src}-dark.${ext}`}
				alt="An app for generating unique SVG squiggles"
				width="1800"
				height="1800"
			/>
		{:else}
			<img
				in:fade={{ duration: 400, delay: 200, easing: cubicOut }}
				class="aspect-square"
				src={`/work/index/${src}-light.${ext}`}
				alt="An app for generating unique SVG squiggles"
				width="1800"
				height="1800"
			/>
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
