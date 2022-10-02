<script lang="ts">
	import Hamburger from '@components/svg/Hamburger.svelte';
	export let callback = () => {};
	export let disabled = false;
</script>

<button
	class={`flex justify-center items-center w-10 h-10 bg-gray-800 rounded-full ${$$props.class}`}
	on:click={callback}
	{disabled}
>
	<Hamburger />
</button>
