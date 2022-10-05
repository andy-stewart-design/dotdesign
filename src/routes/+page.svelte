<script lang="ts">
	import Counter from '@components/Counter.svelte';
	import ExperimentalButton from '@components/global/buttons/ExperimentalButton.svelte';
	import Container from '@components/global/Container.svelte';

	const foo = 'Hello World This is a Long Headline';
</script>

<Container pt="md">
	<h1>{foo}</h1>
	<ExperimentalButton>Test</ExperimentalButton>
	<Counter />
</Container>

<div class="w-full h-screen" />
<div class="w-full h-screen" />
