<script lang="ts">
	import Counter from '@components/Counter.svelte';
	import BaseSwitch from '@components/global/BaseSwitch.svelte';
	import ExperimentalButton from '@components/global/buttons/ExperimentalButton.svelte';
	import Container from '@components/global/Container.svelte';
	import Hamburger from '@components/svg/Hamburger.svelte';
	import { Button } from 'neutral-ui';

	const foo = 'Hello World This is a Long Headline';
	let count = 0;
	let show = true;

	const handleClick = (e: Event) => {
		const btn = e.currentTarget as HTMLButtonElement;
		const svg = btn.querySelector('svg');
		svg && navigator.clipboard.writeText(svg.outerHTML);
	};

	let absolute = true;
</script>

<Container pt="md">
	<h1>{foo}</h1>
	<div class="flex items-center gap-2 my-8">
		<BaseSwitch bind:value={absolute} label="Absolute Positioning" labelPosition="end" />
	</div>
	<div class="flex items-center gap-2 my-8">
		<Button
			on:click={() => console.log('working')}
			class="text-gray-800 dark:text-gray-300 bg-brand/0 border-1.5 border-gray-800/30 dark:border-gray-100/20 py-2 px-5 rounded-full transition-colors ease-out duration-300 can-hover:text-white can-hover:bg-black/90 can-hover:border-black dark:can-hover:text-black dark:can-hover:bg-white/90 dark:can-hover:border-gray-100 select-none"
		>
			Randomize Positions
		</Button>
	</div>
	<!-- <ExperimentalButton on:click={() => (show = !show)}>{show}</ExperimentalButton>
	<ExperimentalButton on:click={() => count++}>Test {count}</ExperimentalButton> -->
</Container>

<div class="w-full h-screen" />
<div class="w-full h-screen" />
