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
	let windowWidth: number | null,
		windowHeight: number | null,
		canvasWidth: number,
		canvasHeight: number,
		gridX: number,
		raf: number;
	let amount = 10;
	let inc = 0;

	function setCanvas() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		canvas.style.width = windowWidth + 'px';
		canvas.style.height = windowHeight + 'px';
		canvas.width = windowWidth;
		canvas.height = windowHeight;
	}

	function animate() {
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// let x = 0.5 * (1 + Math.sin(inc)) * canvasWidth;
		for (let i = 0; i < amount; i++) {
			const posX = (canvasWidth / (amount - 1)) * i;
			const sinVal = Math.sin(inc + i / 2.5);
			const offsetY = sinVal * (canvasHeight / 2);
			let opacity = 1.0 - Math.abs(sinVal) / 1.5;
			let radius = (gridX / 1.5) * (1 - Math.abs(sinVal) / 2);
			ctx.fillStyle = `hsl(${220 + inc * 4} 100% 50% / ${opacity})`;
			ctx.beginPath();
			ctx.ellipse(posX, canvasHeight / 2 + offsetY, radius, radius, 0, 0, 2 * Math.PI);
			ctx.fill();
			opacity = Math.abs(sinVal) / 2 + 0.25;
			radius = (gridX / 1.5) * (Math.abs(sinVal) / 2 + 0.25);
			ctx.fillStyle = `hsl(${220 + inc * 4} 100% 50% / ${opacity - 0.125})`;
			ctx.beginPath();
			ctx.ellipse(posX, canvasHeight / 2 - offsetY, radius, radius, 0, 0, 2 * Math.PI);
			ctx.fill();
		}
		inc += 0.0375;
		raf = requestAnimationFrame(animate);
	}

	function canvas2Image() {
		let image = canvas.toDataURL('image/jpeg');
		var link = document.createElement('a');
		link.href = image;
		link.download = 'test.jpg';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	onMount(() => {
		setCanvas();
		ctx = canvas.getContext('2d');
		canvasWidth = canvas.width;
		canvasHeight = canvas.height;
		gridX = canvasWidth / amount;
		animate();
		return () => cancelAnimationFrame(raf);
	});
</script>

<Container pt="xl" class="relative bg-level-06 min-h-screen-lg">
	<canvas bind:this={canvas} class="absolute top-0 left-0" />
	<div class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur" />
	<div
		class="absolute top-0 left-0 w-full h-full mix-blend-overlay hidden invisible dark:block dark:visible"
		style:background-image="url('misc/grain-dark.png')"
	/>
	<div
		class="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-75 dark:hidden dark:invisible"
		style:background-image="url('misc/grain.png')"
	/>
	<div class="relative">
		<h1
			class="font-[450] text-5xl leading-[1.2] max-w-4xl mx-auto text-gray-400 text-foreground-2/60"
		>
			<span class="text-foreground-2">Andy Stewart</span>
			designs future-focused visual systems — often for screens, sometimes not. He is currently the Digital
			Creative Director at
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
