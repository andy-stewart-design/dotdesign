<script lang="ts">
	import '@styles/main.css';
	import Nav from '@components/global/Nav';
	import Container from '@components/global/Container.svelte';
</script>

<Nav />
<Container>
	<slot />
</Container>
