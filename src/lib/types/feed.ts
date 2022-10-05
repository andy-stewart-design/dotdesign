export interface FeedImageData {
	slug: string;
	filetype: string;
	project: string;
	client: string;
	date: string;
	year: string;
	alt: string;
}

export interface ImageDataArray {
	images: FeedImageData[];
}
