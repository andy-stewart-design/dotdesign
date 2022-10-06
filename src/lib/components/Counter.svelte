<script lang="ts">
	import { fade } from 'svelte/transition';

	let count = 0;
</script>

<button transition:fade|local on:click={() => count++}>Clicked {count} times!</button>
