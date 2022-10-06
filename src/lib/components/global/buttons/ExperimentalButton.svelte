<script lang="ts">
	const touchStart = (e: Event) => {
		const color = getComputedStyle(document.documentElement).getPropertyValue('--tw-ring-color');
		const btn = e.currentTarget as HTMLButtonElement;
		btn.style.background = color;
	};
	const touchEnd = (e: Event) => {
		const btn = e.currentTarget as HTMLButtonElement;
		btn.style.background = '';
	};
</script>

<button
	on:pointerup={() => console.log('fired')}
	on:touchstart={touchStart}
	on:touchend={touchEnd}
	on:click
	class="p-3 border bg-gray-100/50 dark:bg-black/50 border-gray-900/10 dark:border-gray-100/10 rounded-full select-none touch-none focus:outline-none focus-visible:outline-blue-500 supports-hover:hover:bg-blue-600/60 transition-colors ease-out"
>
	<slot />
</button>
