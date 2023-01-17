<script lang="ts">
	import Container from '@components/global/Container.svelte';

	const introText = ['Experience', 'Expertise', 'Tools', 'Interests'];

	const skills = [
		'Digital Strategy',
		'Identity Design',
		'Web Design',
		'Prototyping',
		'Motion Design',
		'Creative Coding',
		'Front End Development',
		'Information Architecture',
		'Project Leadership',
		'QA + Testing'
	];

	const tools = [
		'Figma',
		'Illustrator',
		'Photoshop',
		'After Effects',
		'Svelte',
		'Tailwind',
		'Typescript',
		'Asana'
	];
</script>

<Container pt="xl" pb="md" class="grid lg:grid-cols-2 lg:gap-10">
	<h1 class="text-8xl md:text-9xl">About</h1>
	<div class="flex flex-row-reverse justify-end lg:justify-between">
		<h1 class="text-8xl md:text-9xl">Me</h1>
		<div class="pt-3 md:pt-5 pr-6">
			{#each introText as text}
				<div class="flex items-center gap-1.5">
					<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
						<path d="M1 6L5 10L9 6" stroke="currentColor" stroke-width="1.5" />
						<path d="M11 2H5V9.5" stroke="currentColor" stroke-width="1.5" />
					</svg>
					<h3 class="text-sm leading-[1.35] md:text-base md:leading-normal">{text}</h3>
				</div>
			{/each}
		</div>
	</div>
</Container>
<Container pt="none" pb="xl">
	<div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10">
		<div>
			<div class="sticky top-8 flex flex-col gap-2 lg:h-[calc(100vh-8rem)]">
				<img
					class="aspect-[3/2] object-cover object-top rounded-2xl opacity-90 lg:aspect-[none] lg:grow"
					src="/about/andy-stewart-portrait.webp"
					alt="The designer Andy Stewart throwing playing cards into the air"
				/>
				<div class="flex items-center gap-2 text-level-01/75">
					<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 6L5 2L9 6" stroke="currentColor" />
						<path d="M11 10H5V2.5" stroke="currentColor" />
					</svg>
					<p>Not a Magician</p>
				</div>
			</div>
		</div>
		<div>
			<div class="grid gap-5 content-start text-lg text-level-01/75">
				<p>
					Hi, I'm Andy, a designer working at the intersection of brand and technology. I'm
					currently the Digital Creative Director at Turnstyle, a small-yet-mighty creative studio
					in Seattle, where I help bring life to brands through strategic, thoughtful design.
				</p>
				<p>
					I believe that design works on the mind through the eyes. In the right context, with the
					right tone of voice, design has the ability to spark emotion, engage the imagination and
					even, at its best, inspire action.
				</p>
				<p>
					As a generalist both in training and predilection, my approach combines the craftsmanship
					of traditional graphic design practices with the dynamism of modern digital media. I have
					nearly a decade of experience in helping to realize even the most vague of ideas across a
					variety of touchpoints, from brand identities to digital experiences. My work is defined
					by a love of aesthetics, technology, and delightful experiences, and an eye for
					recognizing and resolving challenging business problems.
				</p>
				<div class="flex gap-4 pt-1">
					<a href="/about/uses" data-sveltekit-preload-data="hover">
						<div class="text-base text-level-01 border border-level-01/20 py-1 px-2.5 rounded">
							<span class="block pb-px">Full Resume</span>
						</div>
					</a>
					<a href="/about/uses" data-sveltekit-preload-data="hover">
						<div class="text-base text-level-01 border border-level-01/20 py-1 px-2.5 rounded">
							<span class="block pb-px">What I’m Up to Now</span>
						</div>
					</a>
				</div>
				<div class="grid gap-5 border-t border-level-01/20 mt-3 pt-8">
					<h4 class="font-medium text-xs tracking-wide">Select Skills + Services</h4>
					<ul class="grid grid-cols-2 gap-y-2">
						{#each skills as skill}
							<li
								class="relative text-level-01 pl-5 before:absolute before:top-0 before:left-0 before:content-['↘'] before:text-level-01/75"
							>
								{skill}
							</li>
						{/each}
					</ul>
				</div>
				<div class="flex flex-col gap-5 border-t border-level-01/20 mt-3 pt-8">
					<h4 class="font-medium text-xs tracking-wide">Select Tools</h4>
					<ul class="grid grid-cols-2 gap-y-2">
						{#each tools as tool}
							<li
								class="relative text-level-01 pl-5 before:absolute before:top-0 before:left-0 before:content-['↘'] before:text-level-01/75"
							>
								{tool}
							</li>
						{/each}
					</ul>
					<div class="pt-1">
						<a href="/about/uses" data-sveltekit-preload-data="hover">
							<div
								class="inline-block text-base text-level-01 border border-level-01/20 py-1 px-2.5 rounded"
							>
								<span class="block pb-px">Complete List</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</Container>
<!-- <a href="/about/playlist" data-sveltekit-preload-data="hover">Playlist</a> -->
