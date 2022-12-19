import { writable } from 'svelte/store';

export type ThemeOptions = 'LIGHT' | 'DARK' | 'SYSTEM';

export const appTheme = writable<ThemeOptions>('DARK');
