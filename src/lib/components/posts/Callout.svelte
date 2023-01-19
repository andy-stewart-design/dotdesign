<script>
	export let subhead = 'By the way';
	export let icon = '!';
</script>

<div class="relative flex mt-2">
	<div
		class="absolute top-0 left-0.5 flex justify-center items-center w-8 h-8 -translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500 border-2 border-level-06 z-10"
	>
		<span class="font-bold text-lg text-level-06">{icon}</span>
	</div>
	<div class="flex bg-level-05 border border-level-01/15 rounded-lg overflow-hidden">
		<div class="relative w-1 shrink-0 bg-blue-500" />
		<div class="grid gap-4 py-5 px-6">
			<div class="font-medium text-sm">{subhead}</div>
			<p class="text-lg blog:text-level-01 dark:blog:text-level-01">
				<slot />
			</p>
		</div>
	</div>
</div>
