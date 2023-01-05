export function setSrc(slug: string, sizes: number | number[]) {
	const baseURL = 'https://res.cloudinary.com/andystewartdesign/image/upload';
	if (typeof sizes !== 'number') {
		const URLs = sizes.map((width) => `${baseURL}/w_${width}/f_auto,q_auto/${slug} ${width}w`);
		return URLs.join(', ');
	} else {
		return `${baseURL}/w_${sizes}/f_auto,q_auto/${slug}`;
	}
}
