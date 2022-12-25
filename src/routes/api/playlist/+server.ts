import { json } from '@sveltejs/kit';
import { getPlaylist } from '@utils/playlist';

export const GET = async () => {
	const playlist = await getPlaylist();

	return json(playlist);
};
