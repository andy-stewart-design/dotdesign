<script lang="ts">
	import { base } from '$app/paths';
	import { appTheme } from '$lib/stores/theme';
	import Container from '@components/global/Container.svelte';
	import Image from '@components/global/Image.svelte';
	import Video from '@components/Video.svelte';
	import CdLogoAfter from './CDLogoAfter.svelte';
	import CdLogoBefore from './CDLogoBefore.svelte';
</script>

<section>
	<Container pt="lg" pb="none" class="relative">
		<div class="relative w-full rounded-3xl overflow-hidden">
			<Video
				src="/work/carbon-direct/CarbonDirect-LogoAnimation-Loop-opt.mp4"
				autoplay
				muted
				loop
				playsinline
			/>
		</div>
	</Container>
</section>
<section>
	<Container py="lg" class="relative">
		<div class="relative grid gap-6 max-w-3xl">
			<h1 class="relative font-medium text-7xl">Carbon Direct</h1>
			<h2 class="relative font-medium text-3xl">Standing On the Shoulders of Science</h2>
			<p>
				Carbon Direct is a purpose-driven carbon management firm dedicated to putting climate
				science into action. No longer a scrappy startup, they needed a brand that better
				communicated the scale and capabilities of their company and that matched their approach to
				business — intelligent, dynamic, and distinctive.
			</p>
			<p>
				Their new logo stays true to their founding story—focusing first and foremost on the
				necessity of carbon removal in our fight against climate change—but tells it in a way that
				is simple, memorable, and functional. A light and bright color palette reflects the energy
				and optimism Carbon Direct brings to their work. Messaging across the identity is succinct
				and action-oriented, distilling complex ideas into simple, straightforward language.
			</p>
		</div>
	</Container>
</section>
<section>
	<Container py="lg" class="relative grid grid-cols-2 gap-12">
		<div class="grid gap-2 px-12">
			<p class="font-medium text-sm text-center opacity-60">Before</p>
			<CdLogoBefore />
		</div>
		<div class="grid gap-2 px-12">
			<p class="font-medium text-sm text-center opacity-60">After</p>
			<CdLogoAfter />
		</div>
	</Container>
	<Container py="lg" class="relative">
		<Video
			src="/work/carbon-direct/CarbonDirect-LogoAnimation-Loop-opt.mp4"
			autoplay
			muted
			loop
			playsinline
		/>
	</Container>
	<!-- https://res.cloudinary.com/andystewartdesign/image/upload/v1672704097/work/carbon-direct/CarbonDirect-BusinessCards-Crop_f5flqi.jpg -->
	<Container pt="none" pb="lg" class="relative grid grid-cols-2 gap-12 items-center">
		<Image
			src="v1672704097/work/carbon-direct/CarbonDirect-BusinessCards-Crop_f5flqi.jpg"
			cloud
			sizes={[480, 800, 1000, 1400]}
			alt="Carbon Direct business cards"
			loading="lazy"
			width="1000px"
			height="1000px"
		/>
		<Image
			src="v1672704096/work/carbon-direct/CarbonDirect-Shirt-Crop_wskeos.jpg"
			cloud
			sizes={[480, 800, 1000, 1400]}
			alt="A shirt design for Carbon Direct that says 'Reduce, Remove, Reuse'"
			loading="lazy"
			width="1000px"
			height="1000px"
		/>
	</Container>
	<Container pt="none" pb="lg" class="relative">
		<Image
			src="v1672759179/work/carbon-direct/CarbonDirect-Icons_vhgjvx.svg"
			cloud
			svg
			alt="Carbon Direct icon set"
			loading="lazy"
			width="2000px"
			height="1000px"
		/>
	</Container>
	<Container pt="none" pb="lg" class="relative grid grid-cols-2 gap-12 items-center">
		<Image
			src="v1672758579/work/carbon-direct/CarbonDirect-Colors_selpnw.svg"
			cloud
			svg
			alt="Carbon Direct color palette"
			loading="lazy"
			width="1000px"
			height="1000px"
		/>
		<Image
			src="v1672693111/work/carbon-direct/aerial-rice-fields_q9shh8.jpg"
			cloud
			sizes={[480, 640]}
			alt="Aerial view of a rice field"
			loading="lazy"
			width="1000px"
			height="1400px"
		/>
	</Container>
	<Container pt="none" pb="lg" class="relative grid grid-cols-2 gap-12 items-center">
		<Image
			src="v1672692945/work/carbon-direct/armand-khoury-BFlD8qNL2UI-unsplash-crop_m8qcfs.jpg"
			cloud
			sizes={[480, 640]}
			alt="Aerial view of a rice field"
			loading="lazy"
			width="1000px"
			height="1400px"
		/>
		<img
			src={`/work/carbon-direct/CarbonDirect-Type-${$appTheme}.png`}
			alt="Carbon Direct typography guidelines"
			loading="lazy"
		/>
	</Container>
	<Container pt="none" pb="lg" class="relative">
		<Video
			src="https://res.cloudinary.com/andystewartdesign/video/upload/f_auto,q_auto/v1672759670/work/carbon-direct/CarbonDirect-Home-Scroll_xjra7n.mp4"
			autoplay
			muted
			loop
			playsinline
		/>
	</Container>
</section>
