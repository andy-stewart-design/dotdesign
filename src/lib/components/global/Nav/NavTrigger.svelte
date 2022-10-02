<script lang="ts">
	import Hamburger from '@components/svg/Hamburger.svelte';
	export let callback = () => {};
	export let disabled = false;
</script>

<button
	class={`flex justify-center items-center w-11 h-11 bg-gray-900/70 border border-gray-100/10 rounded-full ${$$props.class}`}
	on:click={callback}
	{disabled}
>
	<Hamburger />
</button>
