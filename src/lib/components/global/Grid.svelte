<script lang="ts">
	import Container from './Container.svelte';
</script>

<div class="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[100]">
	<Container py="none" class="grid grid-cols-12 gap-4 h-full">
		{#each Array(12) as _}
			<div class="bg-blue-700/30" />
		{/each}
	</Container>
</div>
