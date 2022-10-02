interface Props {
	targetNode: HTMLElement | null;
	escapeCallback: () => void;
}

export const focusTrap = (node: HTMLElement, props: Props) => {
	const { targetNode, escapeCallback } = props;
	if (!targetNode) return;
	const focusableEls: NodeListOf<HTMLElement> = targetNode.querySelectorAll(
		'a:not(.hidden, .pointer-events-none), button:not([disabled])'
	);

	let firstFocusableEl: HTMLElement, lastFocusableEl: HTMLElement;
	if (focusableEls) {
		firstFocusableEl = focusableEls[0];
		lastFocusableEl = focusableEls[focusableEls.length - 1];
	} else throw new Error('No focusable elements found');

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key !== 'Tab' && e.key !== 'Escape') return;

		if (e.shiftKey) {
			if (document.activeElement === firstFocusableEl) {
				e.preventDefault();
				lastFocusableEl.focus();
			}
		} else if (e.key === 'Escape') {
			escapeCallback();
		} else if (document.activeElement === lastFocusableEl) {
			e.preventDefault();
			firstFocusableEl.focus();
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
