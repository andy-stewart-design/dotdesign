import { getHighlighter } from 'shiki';
import { loadTheme } from 'shiki-themes';
import { parse } from 'node-html-parser';

// const THEME = 'github-dark';
const THEME = loadTheme('./src/lib/styles/shikitheme.json');

const escapeHtml = (code) => {
	return code.replace(/[{}`]/g, (character) => {
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
};

const makeFocussable = (html) => {
	const wrapHTML = `<div data-rehype-pretty-code-fragment>${html}</div>`;
	// console.log(wrapHTML);
	const root = parse(wrapHTML);
	root.querySelector('pre').setAttribute('tabIndex', '0');
	return root.toString();
};

// Returns array of line numbers to be highlghted
function rangeParser(rangeString) {
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

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */

async function highlighter(code, lang, meta) {
	const shikiHighlighter = await getHighlighter({
		theme: THEME
	});
	let html;
	if (!meta) {
		html = shikiHighlighter.codeToHtml(code, {
			lang
		});
	} else {
		const rgx = /{(.*?)}/;
		const highlightMeta = rgx.exec(meta)[1];
		const highlightLines = rangeParser(highlightMeta);
		html = shikiHighlighter.codeToHtml(code, {
			lang,
			lineOptions: highlightLines.map((element) => ({
				line: element, // line number
				classes: ['highlight-line']
			}))
		});
	}
	html = makeFocussable(html);
	return escapeHtml(html);
}

export default highlighter;
