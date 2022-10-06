type Filetype = 'jpg' | 'png' | 'webp' | 'mp4';

export const getFeedImages = async () => {
	const allFeedData = import.meta.glob('/static/feed/*');
	const iterableFeedFiles = Object.keys(allFeedData);
	const filteredFeedFiles = filterByFileType(iterableFeedFiles);

	const mediaData = filteredFeedFiles.map((filename) => {
		const slug = filename.replace('/static', '');
		const filetype = slug.split('.').pop();
		const projectInfo = slug.replace('/feed/', '').replace(/\..*$/, '').split('_');
		const metaArray = projectInfo.map((info, index) => {
			const metaTags = ['project', 'client', 'date'];
			let projectInfoFormatted: string;
			if (index <= 1) projectInfoFormatted = info.replace('-', ' ').replace("'", '’');
			else projectInfoFormatted = info;
			return [metaTags[index], projectInfoFormatted];
		});
		const metadata = Object.fromEntries(metaArray);
		const article = checkProjectType(metadata.project) ? 'An' : 'A';
		const alt = `${article} ${metadata.project} for ${metadata.client}`;
		const year = metadata.date.split('-').shift();

		return { slug, filetype, ...metadata, year, alt };
	});

	const mediaDataSorted = mediaData.sort(function (a, b) {
		return Date.parse(b.date) - Date.parse(a.date);
	});

	return mediaDataSorted;
};

const filterByFileType = (files: string[]) => {
	return files.filter((file) => {
		const fileType = file.toLocaleLowerCase() as Filetype;
		const doesMatch =
			fileType.includes('jpg'.toLocaleLowerCase()) ||
			fileType.includes('webp'.toLocaleLowerCase()) ||
			fileType.includes('mp4'.toLocaleLowerCase()) ||
			fileType.includes('png'.toLocaleLowerCase());
		if (doesMatch) return true;
	});
};

const checkProjectType = (projectType: string) => {
	if (
		projectType === 'Identity' ||
		projectType === 'Illustration' ||
		projectType === 'Animation' ||
		projectType === 'Icon Set'
	)
		return true;
};
