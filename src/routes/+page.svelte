<script lang="ts">
	import Counter from '@components/Counter.svelte';
	import ExperimentalButton from '@components/global/buttons/ExperimentalButton.svelte';
	import Container from '@components/global/Container.svelte';
	import NavPageTop from '@components/global/Nav/NavPageTop.svelte';
	import BaseButton from '@components/global/BaseButton.svelte';
	import BaseSwitch from '@components/global/BaseSwitch.svelte';
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import Hamburger from '$lib/icons/Hamburger.svelte';
	import Close from '$lib/icons/Close.svelte';
	import Search from '$lib/icons/Search.svelte';
	import CarbonDirect from '@components/work/cardimages/CarbonDirect.svelte';
	import Footer from '@components/global/Footer.svelte';
	import { onMount } from 'svelte';

	const foo = 'Hello World This is a Long Headline';
	let count = 0;
	let show = true;

	const handleClick = (e: Event) => {
		const btn = e.currentTarget as HTMLButtonElement;
		const svg = btn.querySelector('svg');
		svg && navigator.clipboard.writeText(svg.outerHTML);
	};

	let absolute = true;

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let windowWidth: number | null, windowHeight: number | null;
	let amount = 10;

	function setCanvas() {
		const scale = window.devicePixelRatio;
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		canvas.style.width = windowWidth + 'px';
		canvas.style.height = windowHeight + 'px';
		canvas.width = windowWidth * scale;
		canvas.height = windowHeight * scale;
		ctx?.scale(scale, scale);
	}

	onMount(() => {
		setCanvas();
		ctx = canvas.getContext('2d');
		const canvasWidth = canvas.width;
		const canvasHeight = canvas.height;
		let inc = 0;
		let gridX = canvasWidth / amount;

		function animate() {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// let x = 0.5 * (1 + Math.sin(inc)) * canvasWidth;
			ctx.fillStyle = 'blue';
			for (let i = 0; i < amount; i++) {
				const posX = (canvasWidth / (amount - 1)) * i;
				const offsetY = Math.sin(inc + i / 2.5) * (canvasHeight / 2);
				ctx.beginPath();
				ctx.ellipse(posX, canvasHeight / 2 + offsetY, gridX / 2, gridX / 2, 0, 0, 2 * Math.PI);
				ctx.fill();
			}
			inc += 0.05;
			requestAnimationFrame(() => animate());
		}

		animate();
	});
</script>

<Container pt="xl" class="relative bg-level-06 min-h-screen-lg">
	<canvas bind:this={canvas} class="absolute top-0 left-0" />
	<div class="relative">
		<h1
			class="font-[450] text-5xl leading-[1.2] max-w-4xl mx-auto text-gray-400 text-foreground-2/70"
		>
			<span class="text-foreground-2">Andy Stewart</span> designs future-focused visual systems —
			often for screens, sometimes not. He is currently the Digital Creative Director at
			<a href="https://turnstyle.studio/" target="_blank" rel="noreferrer" class="text-foreground-2"
				>Turnstyle</a
			>.
		</h1>
	</div>
	<!-- <h1>{foo}</h1>
	<div class="flex items-center gap-2 my-8">
		<BaseSwitch bind:value={absolute} label="Absolute Positioning" labelPosition="end" />
	</div>
	<div class="flex items-center gap-2 my-8">
		<BaseButton on:click={() => alert('working')}>Randomize Positions</BaseButton>
		<BaseButton on:click={() => alert('working')} icon label="Right Arrow">
			<ArrowRight size="20" strokeWidth="2" class="stroke-current fill-none w-5 h-5" />
		</BaseButton>
	</div>
	<div class="flex items-center gap-2 my-8">
		<BaseButton on:click={() => alert('working')} large>Randomize Positions</BaseButton>
		<BaseButton on:click={() => alert('working')} icon large label="Left Arrow">
			<ArrowLeft strokeWidth="2.5" class="stroke-current fill-none w-6 h-6" />
		</BaseButton>
		<BaseButton on:click={handleClick} icon large label="Left Arrow">
			<Hamburger strokeWidth="2.5" spacing="7" class="stroke-current fill-none w-6 h-6" />
		</BaseButton>
		<BaseButton on:click={() => alert('working')} icon large label="Left Arrow">
			<Close strokeWidth="2.5" class="stroke-current fill-none w-6 h-6" />
		</BaseButton>
		<BaseButton on:click={() => alert('working')} icon large label="Left Arrow">
			<Search strokeWidth="2.5" class="stroke-current fill-none w-6 h-6" />
		</BaseButton>
	</div> -->
	<!-- <ExperimentalButton on:click={() => (show = !show)}>{show}</ExperimentalButton>
	<ExperimentalButton on:click={() => count++}>Test {count}</ExperimentalButton> -->
</Container>
<Footer />
