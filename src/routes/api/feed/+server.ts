import { json } from '@sveltejs/kit';
import { getFeedImages } from '@utils/feed';

export const GET = async () => {
	const feedImages = await getFeedImages();

	return json(feedImages);
};
