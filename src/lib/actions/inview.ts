interface Props {
	root?: HTMLElement | null;
	top?: number;
	bottom?: number;
	threshold?: number | number[];
}

type ScrollDirection = 'up' | 'down' | undefined;

export type Action<T = any> = (
	node: HTMLElement,
	parameters?: T
) => {
	update?: (parameters: T) => any | void;
	destroy?: () => void;
};

export interface ObserverEventDetails {
	inView?: boolean;
	intersectionRatio: number;
	scrollDirection?: ScrollDirection;
	entry?: IntersectionObserverEntry;
	target?: Element;
}

type Event = 'enter' | 'leave' | 'change';

const createEvent = <T = ObserverEventDetails>(eventName: Event, detail: T): CustomEvent<T> => {
	return new CustomEvent(eventName, { detail });
};

export function inView(
	node: Element,
	props: Props = { root: null, top: 0, bottom: 0, threshold: 0 }
): ReturnType<Action> {
	let observer: IntersectionObserver;

	let prevPositionY: number = 0;
	let scrollDirection: ScrollDirection = undefined;

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		// get user's scroll direction
		if (prevPositionY >= entry.boundingClientRect.y) scrollDirection = 'down';
		else scrollDirection = 'up';
		prevPositionY = entry.boundingClientRect.y;

		const inView = entry.isIntersecting;
		const intersectionRatio = entry.intersectionRatio;
		const target = entry.target;

		const detail: ObserverEventDetails = {
			inView,
			intersectionRatio,
			scrollDirection,
			entry,
			target
		};

		const status = entry.isIntersecting ? 'enter' : 'leave';
		node.dispatchEvent(createEvent(status, detail));
		node.dispatchEvent(createEvent('change', detail));
	};

	const setObserver = ({ root, top, bottom, threshold }: Props) => {
		const marginTop = top ? top * -1 : 0;
		const marginBottom = bottom ? bottom * -1 : 0;
		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
		const options = { root, rootMargin, threshold };
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	setObserver(props);

	return {
		update(props: Props) {
			setObserver(props);
		},

		destroy() {
			if (observer) observer.disconnect();
		}
	};
}
