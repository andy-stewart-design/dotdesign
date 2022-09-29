<script lang="ts">
	import '@styles/reset.css';
	import '@styles/main.css';
	import Nav from '@components/global/Nav.svelte';
	import Container from '@components/global/Container.svelte';
</script>

<Nav />
<Container>
	<slot />
</Container>
