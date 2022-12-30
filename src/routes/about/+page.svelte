<script lang="ts">
	import Container from '@components/global/Container.svelte';
</script>

<Container py="xl">
	<h1 class="text-8xl md:text-9xl mb-12">Hi, I’m Andy.</h1>
	<div class="grid grid-cols-2 gap-4">
		<img
			class="rounded-2xl opacity-80"
			src="/about/andy-stewart-portrait.webp"
			alt="The designer Andy Stewart throwing playing cards into the air"
		/>
		<div class="px-4">
			<div class="grid gap-4 content-start">
				<p class="text-lg">
					I believe that design works on the mind through the eyes. In the right context, with the
					right tone of voice, design has the ability to spark emotion, engage the imagination and
					even, at its best, inspire action.
				</p>
				<p class="text-lg">
					I'm Andy, a designer working at the intersection of brand and technology. I'm currently
					the Digital Creative Director at Turnstyle, a small creative studio on the north side of
					Seattle, where I help bring life to brands through strategic, thoughtful design.
				</p>
				<p class="text-lg">
					As a generalist both in training and predilection, my approach combines the craftsmanship
					of traditional graphic design practices with the dynamism of modern digital media. I have
					nearly a decade of experience in helping to realize even the most vague of ideas across a
					variety of touchpoints, from brand identities to digital experiences. My work is defined
					by my love for aesthetics, intuitive experiences, and solving challenging business
					problems.
				</p>
				<a href="/about/uses" data-sveltekit-preload-data="hover">Uses</a>
				<a href="/about/playlist" data-sveltekit-preload-data="hover">Playlist</a>
			</div>
		</div>
	</div>
</Container>
