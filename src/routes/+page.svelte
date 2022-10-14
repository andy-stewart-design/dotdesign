<script lang="ts">
	import Counter from '@components/Counter.svelte';
	import ExperimentalButton from '@components/global/buttons/ExperimentalButton.svelte';
	import Container from '@components/global/Container.svelte';
	import Hamburger from '@components/svg/Hamburger.svelte';

	const foo = 'Hello World This is a Long Headline';
	let count = 0;
	let show = true;

	const handleClick = (e: Event) => {
		const btn = e.currentTarget as HTMLButtonElement;
		const svg = btn.querySelector('svg');
		svg && navigator.clipboard.writeText(svg.outerHTML);
	};
</script>

<Container pt="md">
	<h1>{foo}</h1>
	<ExperimentalButton on:click={() => (show = !show)}>{show}</ExperimentalButton>
	<ExperimentalButton on:click={() => count++}>Test {count}</ExperimentalButton>

	{#if show}
		{#key count}
			<Counter />
		{/key}
	{/if}

	<div class="py-8">
		<button on:click={(e) => handleClick(e)}>
			<Hamburger />
		</button>
	</div>
</Container>

<div class="w-full h-screen" />
<div class="w-full h-screen" />
