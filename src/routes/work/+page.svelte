<script lang="ts">
	// TODO change implementation of top nav to accept subnav links
	// TODO new page transition type for moving between sections??
	// TODO add all clients module

	import Container from '@components/global/Container.svelte';
	import NavPageTop from '@components/global/Nav/NavPageTop.svelte';
	import WorkCard from '@components/work/WorkCard.svelte';
	import CarbonDirect from '@components/work/cardimages/CarbonDirect.svelte';
	import Squiggler from '@components/work/cardimages/Squiggler.svelte';
	import Wildtype from '@components/work/cardimages/Wildtype.svelte';
	import Vulcan from '@components/work/cardimages/Vulcan.svelte';
	import type { NavLinks } from 'types/nav';
	import Footer from '@components/global/Footer.svelte';

	let pageBG = 'transparent';

	const subNav: NavLinks[] = [
		{
			text: 'Projects',
			href: '/work'
		},
		{
			text: 'Feed',
			href: '/feed'
		}
	];

	const projects = [
		{
			categories: ['Visual Identity', 'Digital'],
			client: 'Carbon Direct',
			summary: 'A brand identity and digital presence for a science-first carbon management firm.',
			slug: 'carbon-direct',
			// component: CarbonDirect,
			hover: '#008055',
			hoverLight: '#39D085',
			published: false
		},
		{
			categories: ['Digital', 'Animation'],
			client: 'Squiggler App',
			summary:
				'A generative design tool made to help you quickly create random, unique SVG waves and squiggles.',
			slug: 'squiggler-app',
			// component: Squiggler,
			hover: '#2868f8',
			published: false
		},
		{
			categories: ['Digital', 'Development'],
			client: 'Wildtype',
			summary:
				'A marketing site for an agtech company working to create the cleanest and most sustainable seafood on the planet.',
			slug: 'wildtype',
			// component: Wildtype,
			hover: '#f96d60',
			published: false
		},
		{
			categories: ['Visual Identity', 'Digital'],
			client: 'Vulcan Real Estate',
			summary: `A new brand and website for one of Seattle's most influential real estate developers.`,
			slug: 'vulcan-real-estate',
			// component: Vulcan,
			hover: '#006666',
			hoverLight: '#16D8D8',
			ext: 'svg',
			published: false
		}
	];
</script>

<NavPageTop />
<main class="bg-level-06">
	<div style:background={pageBG} class="transition-colors duration-500 ease-out-cubic">
		<Container class="grid gap-12" py="xl">
			<h1 class="text-8xl md:text-9xl">Projects</h1>
			<section class="grid gap-8">
				<!-- Carbon Direct -->
				{#each projects as project}
					<WorkCard {...project} bind:pageBG />
				{/each}
			</section>
		</Container>
		<Container pb="xl">
			<div class="flex flex-col items-center gap-6">
				<h3 class="text-7xl text-center">Want More Pixels?</h3>
				<a href="/feed" class="medium">Check the feed →</a>
			</div>
		</Container>
	</div>
</main>
<Footer />
