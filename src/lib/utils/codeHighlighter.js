import { getHighlighter } from 'shiki';
import { loadTheme } from 'shiki-themes';
import { parse } from 'node-html-parser';

// const THEME = 'github-dark';
const THEME = loadTheme('./src/lib/styles/shikitheme.json');

const processHTML = (html, title) => {
	let wrappedHTML;
	if (title) {
		wrappedHTML = `<div data-rehype-pretty-code-fragment><h6 data-title>${title}</h6>${html}</div>`;
	} else {
		wrappedHTML = `<div data-rehype-pretty-code-fragment>${html}</div>`;
	}

	const excapedHTML = wrappedHTML.replace(/[{}`]/g, (character) => {
		switch (character) {
			case '{':
				return '&lbrace;';
			case '}':
				return '&rbrace;';
			case '`':
				return '&grave;';
			default:
				console.error(`No matching characters found.`);
		}
	});

	const root = parse(excapedHTML);
	root.querySelector('pre').setAttribute('tabIndex', '0');
	return root.toString();
};

// Returns array of line numbers to be highlghted
function rangeParser(rangeString) {
	if (!rangeString) return;
	const result = [];
	const ranges = rangeString.split(',');
	ranges.forEach((element) => {
		if (element.indexOf('-') === -1) {
			result.push(parseInt(element, 10));
		} else {
			const limits = element.split('-');
			const start = parseInt(limits[0], 10);
			const end = parseInt(limits[1], 10);
			for (let i = start; i <= end; i += 1) {
				result.push(i);
			}
		}
	});
	return result;
}

async function highlighter(code, lang, meta) {
	const shikiHighlighter = await getHighlighter({
		theme: THEME
	});

	const titleRegex = /title="(.+)"/;
	const title = titleRegex.exec(meta) ? titleRegex.exec(meta)[1] : null;
	// console.log(titleRegex.exec(meta));
	// const title = null;

	const highlightRegex = /{(.*?)}/;
	const highlightMeta = highlightRegex.exec(meta) ? highlightRegex.exec(meta)[1] : null;
	const highlightLines = rangeParser(highlightMeta);

	let html;

	if (!highlightLines) {
		html = shikiHighlighter.codeToHtml(code, {
			lang
		});
	} else {
		html = shikiHighlighter.codeToHtml(code, {
			lang,
			lineOptions: highlightLines.map((element) => ({
				line: element, // line number
				classes: ['highlight-line']
			}))
		});
	}
	return processHTML(html, title);
}

export default highlighter;
