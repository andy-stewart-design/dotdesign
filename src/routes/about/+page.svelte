<script lang="ts">
	import Container from '@components/global/Container.svelte';
</script>

<Container pt="xl" pb="md" class="grid grid-cols-2 gap-10">
	<h1 class="text-8xl md:text-9xl mb-12">About</h1>
	<div class="flex flex-row-reverse justify-between">
		<h1 class="text-8xl md:text-9xl mb-12">Me</h1>
		<div class="pt-4">
			<h3>↓ Experience</h3>
			<h3>↓ Expertise</h3>
			<h3>↓ Tools</h3>
			<h3>↓ Interests</h3>
		</div>
	</div>
</Container>
<Container pt="none" pb="xl">
	<div class="grid grid-cols-2 gap-10">
		<div>
			<div class="sticky top-8 grid gap-2">
				<img
					class="rounded-2xl opacity-80"
					src="/about/andy-stewart-portrait.webp"
					alt="The designer Andy Stewart throwing playing cards into the air"
				/>
				<div class="text-level-01/75">* Not a Magician</div>
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
				<div class="grid gap-5 border-t border-level-01/20 mt-3 pt-8">
					<h4 class="text-xs tracking-wide">Skills + Services</h4>
					<h3>People rely on me for a variety of jobs, including:</h3>
					<ul class="grid grid-cols-2 gap-y-2">
						<li class="before:content-['↘'] before:mr-2">Digital Strategy</li>
						<li class="before:content-['↘'] before:mr-2">Identity Design</li>
						<li class="before:content-['↘'] before:mr-2">Website Design</li>
						<li class="before:content-['↘'] before:mr-2">Information Architecture</li>
						<li class="before:content-['↘'] before:mr-2">Music Recommendations</li>
						<li class="before:content-['↘'] before:mr-2">Website Design</li>
						<li class="before:content-['↘'] before:mr-2">Website Design</li>
						<li class="before:content-['↘'] before:mr-2">Brand Identity</li>
					</ul>
				</div>
				<div class="grid gap-5 border-t border-level-01/20 mt-3 pt-8">
					<h4 class="text-xs tracking-wide">Tools</h4>
					<ul class="grid grid-cols-2 gap-y-2">
						<li class="before:content-['↘'] before:mr-2">Figma</li>
						<li class="before:content-['↘'] before:mr-2">Identity Design</li>
						<li class="before:content-['↘'] before:mr-2">Website Design</li>
						<li class="before:content-['↘'] before:mr-2">Information Architecture</li>
						<li class="before:content-['↘'] before:mr-2">Music Recommendations</li>
						<li class="before:content-['↘'] before:mr-2">Website Design</li>
						<li class="before:content-['↘'] before:mr-2">Website Design</li>
						<li class="before:content-['↘'] before:mr-2">Brand Identity</li>
					</ul>
					<a href="/about/uses" class="text-base" data-sveltekit-preload-data="hover"
						>Learn More About What I Use</a
					>
				</div>
			</div>
		</div>
	</div>
</Container>
<!-- <a href="/about/playlist" data-sveltekit-preload-data="hover">Playlist</a> -->
