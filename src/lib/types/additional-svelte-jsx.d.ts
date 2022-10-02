/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onenter?: (event: any) => any;
		onleave?: (event: any) => any;
		onchange?: (event: any) => any;
	}
}
