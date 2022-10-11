type Filetype = 'jpg' | 'png' | 'webp' | 'mp4';

export const getFeedImages = async () => {
	const allFeedData = import.meta.glob('/static/feed/*');
	const iterableFeedFiles = Object.keys(allFeedData);
	const filteredFeedFiles = filterByFileType(iterableFeedFiles);

	const mediaData = filteredFeedFiles.map((filename) => {
		const slug = filename.replace('/static', '');
		const extension = slug.split('.').pop();
		const filetype = checkFileType(extension!);
		const projectInfo = slug.replace('/feed/', '').replace(/\..*$/, '').split('_');

		const project = projectInfo[0].replaceAll('-', ' ').replaceAll("'", '’');
		const client = projectInfo[1].replaceAll('-', ' ').replaceAll("'", '’');
		const date = projectInfo[2];
		const year = date.split('-').shift();
		const article = checkProjectType(project) ? 'An' : 'A';
		const alt = `${article} ${project} for ${client}`;

		return { project, client, year, slug, date, alt, filetype, extension };
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

const checkFileType = (fileType: string) => {
	const isImage =
		fileType.toLocaleLowerCase().includes('jpg'.toLocaleLowerCase()) ||
		fileType.toLocaleLowerCase().includes('webp'.toLocaleLowerCase()) ||
		fileType.toLocaleLowerCase().includes('avif'.toLocaleLowerCase()) ||
		fileType.toLocaleLowerCase().includes('png'.toLocaleLowerCase());
	if (isImage) return 'image';
	else return 'video';
};
