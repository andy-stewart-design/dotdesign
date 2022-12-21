<script lang="ts">
	import Container from './Container.svelte';

	const year = new Date().getFullYear();
</script>

<!-- <Container pt="lg" class="w-screen h-56 overflow-hidden">
	<p class="text-[400px] text-center leading-[.7] -mt-12">©{year}</p>
</Container> -->
<footer class="sticky bottom-0 bg-level-05 h-[50vh] -z-10">
	<Container class="flex flex-col justify-center h-full" pb="sm">
		<div class="grow flex items-center">
			<p class="grow text-5xl text-center">Thanks for stopping by</p>
		</div>
		<div class="flex justify-between pb-3">
			<p>©{new Date().getFullYear()}</p>
			<p>Contact</p>
		</div>
	</Container>
</footer>
