<script lang="ts">
	import Counter from '@components/Counter.svelte';
	import ExperimentalButton from '@components/global/buttons/ExperimentalButton.svelte';
	import Container from '@components/global/Container.svelte';

	const foo = 'Hello World This is a Long Headline';
	let count = 0;
	let show = true;
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
</Container>

<div class="w-full h-screen" />
<div class="w-full h-screen" />
