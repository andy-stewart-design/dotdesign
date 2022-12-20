<script lang="ts">
	import { appTheme } from '$lib/stores/theme';
</script>

<svg viewBox="0 0 1800 1800">
	{#if $appTheme === 'DARK'}
		<path d="M250 250L900 900V1550L250 900V250Z" fill="url(#paint0_linear_108_358)" />
		<path d="M900 900L1550 250H900V900Z" fill="url(#paint1_linear_108_358)" />
		<defs>
			<linearGradient
				id="paint0_linear_108_358"
				x1="250"
				y1="250"
				x2="1776.4"
				y2="1177.36"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#16D8D8" />
				<stop offset="1" stop-color="#E5DAC2" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_108_358"
				x1="250"
				y1="250"
				x2="1776.4"
				y2="1177.36"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#16D8D8" />
				<stop offset="1" stop-color="#E5DAC2" />
			</linearGradient>
		</defs>
	{:else}
		<path d="M250 250L900 900V1550L250 900V250Z" fill="#0A1717" />
		<path d="M900 900L1550 250H900V900Z" fill="#0A1717" />
	{/if}
</svg>
