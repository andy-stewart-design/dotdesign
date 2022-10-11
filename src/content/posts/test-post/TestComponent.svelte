<script lang="ts">
	let isTrue = false;
</script>

<div>
	<button on:click={() => (isTrue = !isTrue)}>{isTrue}</button>
</div>
