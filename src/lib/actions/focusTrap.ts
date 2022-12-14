interface Props {
	targetNode?: HTMLElement | null;
	escapeCallback?: () => void | null;
	arrowLeftCallback?: () => void | null;
	arrowRightCallback?: () => void | null;
}

export const focusTrap = (node: HTMLElement, props: Props) => {
	let { targetNode, escapeCallback, arrowLeftCallback, arrowRightCallback } = props;
	if (!targetNode) targetNode = node;
	const focusableEls: NodeListOf<HTMLElement> = targetNode.querySelectorAll(
		'a:not(.hidden, .pointer-events-none), button:not([disabled])'
	);

	let firstFocusableEl: HTMLElement, lastFocusableEl: HTMLElement;
	if (focusableEls) {
		firstFocusableEl = focusableEls[0];
		lastFocusableEl = focusableEls[focusableEls.length - 1];
	} else throw new Error('No focusable elements found');

	const handleKeydown = (e: KeyboardEvent) => {
		// if (e.key !== 'Tab' && e.key !== 'Escape' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')
		// 	return;

		if (e.shiftKey) {
			if (document.activeElement === firstFocusableEl) {
				e.preventDefault();
				lastFocusableEl.focus();
			}
		} else if (document.activeElement === lastFocusableEl) {
			e.preventDefault();
			firstFocusableEl.focus();
		} else if (escapeCallback && e.key === 'Escape') {
			e.preventDefault();
			escapeCallback();
		} else if (arrowLeftCallback && e.key === 'ArrowLeft') {
			e.preventDefault();
			arrowLeftCallback();
		} else if (arrowRightCallback && e.key === 'ArrowRight') {
			e.preventDefault();
			arrowRightCallback();
		}
	};
	window.addEventListener('keydown', handleKeydown);
	lastFocusableEl.focus();

	return {
		destroy() {
			window.removeEventListener('keydown', handleKeydown);
		}
	};
};
