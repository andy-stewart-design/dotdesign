import { albums } from '@content/playlist/playlist';

export interface Playlist {
	src: string;
	alt: string;
	artist: string;
	title: string;
	year: number;
	tags: string[];
}

export const getPlaylist = async () => {
	const playlist: Playlist[] = albums.map((album) => {
		const { title, artist } = album;
		const cleanTitle = title
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.replace(/\s+/g, ' ')
			.trim();
		const cleanArtist = artist
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		const slug = `${cleanArtist} ${cleanTitle}`.toLocaleLowerCase().split(' ').join('-');
		const src = `${slug}.webp`;
		const alt = `${artist} | ${title}`;
		return { ...album, src, alt };
	});

	const orderedPlaylist = playlist.reduce(
		(acc: { [key: string | number]: Playlist[] }, album: Playlist) => {
			const key = album.year;
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(album);
			return acc;
		},
		{}
	);

	return orderedPlaylist;
};
