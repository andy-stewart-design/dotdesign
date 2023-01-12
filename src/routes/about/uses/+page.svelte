<script lang="ts">
	import abletonLogo from '@icons/uses/abletonlive.svg?raw';
	import appleIcon from '@icons/uses/apple.svg?raw';
	import beyerdynamicIcon from '@icons/uses/beyerdynamic.svg?raw';
	import githubIcon from '@icons/uses/github.svg?raw';
	import sonosLogo from '@icons/uses/sonos.svg?raw';
	import sonyLogo from '@icons/uses/sony.svg?raw';
	import teLogo from '@icons/uses/teenageengineering.svg?raw';
	import vercelLogo from '@icons/uses/vercel.svg?raw';

	interface Tool {
		name: string;
		descr: string;
		category: string;
		link?: string;
	}

	interface ToolSet {
		brand: string;
		logo: string;
		inlineLogo?: boolean;
		link?: string;
		tools: Tool[];
	}

	const data: { [key: string]: ToolSet[] } = {
		design: [
			{
				brand: 'Figma',
				logo: 'figma.svg',
				link: 'https://www.figma.com/',
				tools: [
					{
						name: 'Figma',
						category: 'Digital Design',
						descr:
							'Like a lot of the industry, Figma has become my most used, and loved, tool for day-to-day design work—so much so that I’ve spent the better part of the past two years helping our team adopt it as our primary digital design program.'
					}
				]
			},
			{
				brand: 'Adobe',
				logo: 'adobecc.svg',
				link: 'https://www.adobe.com/creativecloud.html',
				tools: [
					{
						name: 'Adobe Creative Cloud',
						category: 'App Suite',
						descr: `I've been entrenched in Adobe’s ecosystem—primarily Illustrator, Photoshop, and After Effects with a dash of Indesign—for over a decade, but am increasingly keen to explore alternatives like <a href='https://affinity.serif.com/en-us/'>Affinity’s</a> suite of apps and the browser-based motion tool <a href='https://www.fable.app/'>Fable</a>.`
					},
					{
						name: 'Illustrator',
						category: 'Vector Drawing',
						descr: 'lorem ipsum'
					},
					{
						name: 'Photoshop',
						category: 'Photo Editing',
						descr: 'lorem ipsum'
					},
					{
						name: 'After Effects',
						category: 'Motion Design',
						descr: 'lorem ipsum'
					}
				]
			},
			{
				brand: 'Pika',
				logo: 'pika.svg',
				link: 'https://superhighfives.com/pika',
				tools: [
					{
						name: 'Pika',
						category: 'Productivity',
						descr:
							'A simple, system-wide color picker that I use for accessibility testing and color sampling.'
					}
				]
			},
			{
				brand: 'CleanShot',
				logo: 'cleanshot.png',
				link: 'https://cleanshot.com/',
				tools: [
					{
						name: 'CleanShot X',
						category: 'Productivity',
						descr:
							'The only tool that I ever want to use for taking screenshots and and screen recordings.'
					}
				]
			}
		],
		development: [
			{
				brand: 'VS Code',
				logo: 'vscode.svg',
				tools: [
					{
						name: 'VS Code',
						category: 'Editor',
						descr:
							'No surprise here. Even though I technically used Atom when learning development, the overwhelming majority of my time building websites has been spent inside of VS Code. I use Night Owl by Sarah Drasner for my theme and Jetbrains Mono for my font.'
					}
				]
			},
			{
				brand: 'Svelte',
				logo: 'svelte.svg',
				tools: [
					{
						name: 'Svelte',
						category: 'Frontend Framework',
						descr:
							'I feel competent working with Vue and React, but I feel happy and productive working with Svelte (and Sveltekit). More than almost anything else, it has changed the way I think about and approach development.'
					},
					{
						name: 'Sveltekit',
						category: 'Fullstack Framework',
						descr:
							'I feel competent working with Vue and React, but I feel happy and productive working with Svelte (and Sveltekit). More than almost anything else, it has changed the way I think about and approach development.'
					}
				]
			},
			{
				brand: 'Tailwind',
				logo: 'tailwindcss.svg',
				tools: [
					{
						name: 'Tailwind',
						category: 'CSS Framework',
						descr:
							'The speed and flexibility of working with Tailwind makes it an invaluable part of my toolkit. I also appreciate how closely it’s syntax maps to CSS. Whenever I do need to write vanilla CSS, I don’t feel like my skills have atrophied.'
					}
				]
			},
			{
				brand: 'Typescript',
				logo: 'typescript.svg',
				tools: [
					{
						name: 'Typescript',
						category: 'Javascript Superset',
						descr:
							'I was hesitant about switching to Typescript, and I have lost hours of my life troubleshooting issues, but its myriad benefits more than make up for the occasional headache. As a side effect, it has also deepened my understanding of Javascript.'
					}
				]
			},
			{
				brand: 'Vercel',
				logo: vercelLogo,
				inlineLogo: true,
				tools: [
					{
						name: 'Vercel',
						category: 'Serverless Hosting',
						descr:
							'I use Vercel to host most of my personal projects (including this site). Netlify is also a great option for serverless hosting, but the fact that Vercel actively funds the development of Svelte and Sveltekit has swayed me to their side.'
					}
				]
			},
			{
				brand: 'Arc',
				logo: 'arc.svg',
				tools: [
					{
						name: 'Arc',
						category: 'Browser',
						descr:
							'I’ve avoided void using Chrome proper for several years now. I first switched to Firefox, then Brave, and have more recently landed on Arc. Despite it’s beta status, the team at the Browser Company have put a lot of love and attention into it, and I’ve found it mostly a joy to use.'
					}
				]
			},
			{
				brand: 'Github',
				logo: githubIcon,
				inlineLogo: true,
				tools: [
					{
						name: 'Github Desktop',
						category: 'Git Interface',
						descr:
							'I’m a designer first and foremost, so I’m wont to reach for a GUI rather than interfacing with the command line directly. I switched to Github Desktop after a long period of trying and failing to integrate git into my workflow and I never looked back.'
					}
				]
			},
			{
				brand: 'Warp',
				logo: 'warp.svg',
				tools: [
					{
						name: 'Warp',
						category: 'Terminal',
						descr:
							'Despite my stated bias for visual interfaces, I do still use the command line. Warp provides a surprisingly smooth user experience with quality of life features like autocomplete and multi-cursor editing. It feels like what the terminal should have always been.'
					}
				]
			}
		],
		hardware: [
			{
				brand: 'Apple',
				logo: appleIcon,
				inlineLogo: true,
				link: 'https://www.apple.com/',
				tools: [
					{
						name: 'Apple Macbook Pro (2015)',
						category: 'Computer',
						descr:
							'I tend to hang on to hardware for as long as possible. I’m currently using a 2015 Macbook Pro (which still runs well!), but I’m looking to upgrade this year. The laptop that I use for my agency work is a 2019 Macbook Pro.'
					},
					{
						name: 'iPhone 14 Pro',
						category: 'Smart Phone',
						descr:
							'In 2022, I replaced my iPhone 6s with a 14 Pro. I also use an iPad pro for sketching and reading.'
					},
					{
						name: 'iPad Pro',
						category: 'Smart Phone',
						descr: 'lorem ipsum'
					},
					{
						name: 'Airpods Pro',
						category: 'Wireless Earbuds',
						descr:
							'I skipped the first generation of AirPods, but I use the Pros every. single. day. The sound quality is immense for such small in-ear devices. Admittedly, I’ve had an issue with "squealing" but Apple quickly replaced them for me.'
					}
				]
			},
			{
				brand: 'Sonos',
				logo: sonosLogo,
				inlineLogo: true,
				link: 'https://www.sonos.com/en-us/home',
				tools: [
					{
						name: 'Sonos Move + Five',
						category: 'Speaker System',
						descr:
							'I have nothing but good things to say about my Sonos speakers. The sound is excellent, the setup is easy, and the portability of the Move makes the system especially flexible. My home office is much better for having them.'
					}
				]
			},
			{
				brand: 'Sony',
				logo: sonyLogo,
				inlineLogo: true,
				link: 'https://www.sony.com/ug/homepage',
				tools: [
					{
						name: 'Sony WH-1000XM3',
						category: 'Headphones',
						descr:
							'These are my get-shit-done headphones. The sound quality is great, especially for bluetooth headphones, and their ability to almost completely neutralize surrounding noise is essential to focusing in an open office.'
					}
				]
			}
		],
		['music making']: [
			{
				brand: 'Teenage Engineering',
				logo: teLogo,
				inlineLogo: true,
				link: 'https://teenage.engineering/',
				tools: [
					{
						name: 'Teenage Engineering OP-1',

						category: 'Synthesizer',
						descr: 'lorem ipsum'
					},
					{
						name: 'OB-4',
						category: 'Speaker',
						descr: 'lorem ipsum'
					}
				]
			},
			{
				brand: 'Ableton',
				logo: abletonLogo,
				inlineLogo: true,
				link: 'https://www.ableton.com/',
				tools: [
					{
						name: 'Ableton Live',
						category: 'DAW',
						descr: 'The web browser reimagined'
					}
				]
			},
			{
				brand: 'Beyerdynamic',
				logo: beyerdynamicIcon,
				inlineLogo: true,
				link: 'https://global.beyerdynamic.com/',
				tools: [
					{
						name: 'Beyerdynamic DT 700 Pro X',
						category: 'Headphones',
						descr: 'The web browser reimagined'
					}
				]
			}
		]
	};

	const categories = Object.keys(data);
	const tools: ToolSet[][] = Object.values(data);
</script>

<section class="flex flex-col gap-12">
	<div class="flex flex-col gap-4 w-full max-w-3xl mx-auto border-b border-level-01/10 pb-10">
		<h3 class="font-medium text-xs">Uses</h3>
		<h2 class="text-lg">
			Curious about how I do my work? This list is a living document of the hardware, software, and
			services I use every day. I’ll keep it updated as my workflow and equipment changes.
		</h2>
	</div>
	{#each tools as brand, index}
		<div class="flex flex-col gap-6 w-full max-w-3xl mx-auto">
			<div class="flex gap-6 font-medium text-xs slashed-zero">
				<div class="shrink-0 w-16 text-level-01 opacity-40" aria-hidden="true">0{index + 1}</div>
				<h3 class="capitalize">{categories[index]}</h3>
			</div>
			{#each brand as toolset}
				<div class="flex gap-6 items-start">
					<a class="group shrink-0 w-16 text-level-01" href={toolset.link}>
						<div
							class="relative bg-level-05 p-3 rounded-xl border-b-1.5 border-level-03/20 dark:border-level-01/10 overflow-hidden transition-transform duration-500 ease-out-cubic group-hover:-translate-y-1"
						>
							{#if toolset.inlineLogo}
								{@html toolset.logo}
							{:else}
								<img src={`/uses/${toolset.logo}`} alt={`${toolset.brand} logo`} />
							{/if}
							<div
								class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-level-01 to-transparent opacity-30 dark:opacity-10 mix-blend-overlay dark:mix-blend-normal transition-opacity duration-500 ease-out-cubic group-hover:opacity-90 dark:group-hover:opacity-25"
							/>
						</div>
					</a>
					<div class="grow flex flex-col gap-6 pt-1">
						{#each toolset.tools as tool}
							<div class="flex flex-col gap-2 border-b border-level-01/10 pb-6">
								<div class="flex items-center gap-3">
									<h2 class="font-medium text-xl">{tool.name}</h2>
									<span
										class="font-medium text-xs text-level-01/50 border border-level-01/20 py-0.5 px-1 rounded"
									>
										{tool.category}
									</span>
								</div>
								<p class="opacity-75">{@html tool.descr}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</section>

<!-- <section class="flex flex-col gap-12">
	<div class="flex flex-col gap-4 w-full max-w-3xl mx-auto border-b border-level-01/10 pb-10">
		<h3 class="font-medium text-xs">Uses</h3>
		<h2 class="text-lg">
			Curious about how I do my work? This list is a living document of the hardware, software, and
			services I use every day. I’ll keep it updated as my workflow and equipment changes.
		</h2>
	</div>
	{#each tools as toolset, index}
		<div class="flex flex-col gap-6 w-full max-w-3xl mx-auto">
			<div class="flex gap-6 font-medium text-xs slashed-zero">
				<div class="shrink-0 w-16 text-level-01 opacity-40" aria-hidden="true">0{index + 1}</div>
				<h3 class="capitalize">{categories[index]}</h3>
			</div>
			{#each toolset as tool}
				<div class="flex gap-6 items-start">
					<a class="shrink-0 w-16 text-level-01" href={tool.link}>
						<div
							class="relative bg-level-05 p-3 rounded-xl border-b-1.5 border-level-03/20 dark:border-level-01/10 overflow-hidden"
						>
							{#if tool.inlineLogo}
								{@html tool.logo}
							{:else}
								<img src={`/uses/${tool.logo}`} alt={`${tool.name} logo`} />
							{/if}
							<div
								class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-level-01 to-transparent opacity-30 dark:opacity-10 mix-blend-overlay dark:mix-blend-normal"
							/>
						</div>
					</a>
					<div class="grow flex flex-col gap-2 border-b border-level-01/10 pb-6">
						<div class="flex items-center gap-3">
							<h2 class="font-medium text-xl">{tool.name}</h2>
							<span
								class="font-medium text-xs text-level-01/50 border border-level-01/20 py-0.5 px-1 rounded"
							>
								{tool.category}
							</span>
						</div>
						<p class="opacity-75">{@html tool.descr}</p>
						<p>{Boolean(tool.tools)}</p>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</section> -->
