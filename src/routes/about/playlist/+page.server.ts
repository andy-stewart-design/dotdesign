import type { PageServerLoadEvent } from './$types';
import type { Playlist } from '@utils/playlist';

export const load = async ({ fetch }: PageServerLoadEvent) => {
	const fetchPlaylist = async () => {
		try {
			const res = await fetch(`/api/playlist`);
			return await res.json();
		} catch (err) {
			console.error(err);
		}
	};

	const playlist = await fetchPlaylist();

	const years = Object.keys(playlist).reverse();
	const albums = Object.values(playlist).reverse() as Playlist[][];
	const shuffledAlbums = albums.map((a) => shuffle(a));

	return {
		years,
		albums: shuffledAlbums
	};
};

function shuffle(array: any[]) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}
