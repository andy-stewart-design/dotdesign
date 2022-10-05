<script lang="ts">
	import Hamburger from '@components/svg/Hamburger.svelte';
	export let callback = () => {};
	export let disabled = false;
</script>

<button class={`p-3 ${$$props.class}`} on:click={callback} {disabled}>
	<Hamburger />
</button>
