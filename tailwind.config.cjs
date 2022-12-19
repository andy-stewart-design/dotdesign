/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Andy Sans', ...defaultTheme.fontFamily.sans],
			mono: ['Andy mono', ...defaultTheme.fontFamily.mono]
		},
		extend: {
			borderWidth: {
				1.5: '1.5px'
			},
			colors: {
				brand: 'rgb(var(--brand) / <alpha-value>)',
				'foreground-1': 'rgb(var(--foreground-1) / <alpha-value>)',
				'foreground-2': 'rgb(var(--foreground-2) / <alpha-value>)',
				'foreground-3': 'rgb(var(--foreground-3) / <alpha-value>)',
				'surface-1': 'rgb(var(--surface-1) / <alpha-value>)',
				'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
				'surface-3': 'rgb(var(--surface-3) / <alpha-value>)',
				'level-01': 'rgb(var(--level-01) / <alpha-value>)',
				'level-02': 'rgb(var(--level-02) / <alpha-value>)',
				'level-03': 'rgb(var(--level-03) / <alpha-value>)',
				'level-04': 'rgb(var(--level-04) / <alpha-value>)',
				'level-05': 'rgb(var(--level-05) / <alpha-value>)',
				'level-06': 'rgb(var(--level-06) / <alpha-value>)',
				black: 'rgb(var(--black) / <alpha-value>)',
				gray: {
					50: 'rgb(var(--gray-50) / <alpha-value>)',
					100: 'rgb(var(--gray-100) / <alpha-value>)',
					200: 'rgb(var(--gray-200) / <alpha-value>)',
					300: 'rgb(var(--gray-300) / <alpha-value>)',
					400: 'rgb(var(--gray-400) / <alpha-value>)',
					500: 'rgb(var(--gray-500) / <alpha-value>)',
					600: 'rgb(var(--gray-600) / <alpha-value>)',
					700: 'rgb(var(--gray-700) / <alpha-value>)',
					800: 'rgb(var(--gray-800) / <alpha-value>)',
					900: 'rgb(var(--gray-900) / <alpha-value>)'
				},
				'neon-yellow': 'rgb(var(--neon-yellow) / <alpha-value>)'
			},
			gridColumn: {
				popout: 'popout',
				feature: 'feature',
				full: 'full'
			},
			gridTemplateColumns: (theme) => ({
				'fit-sm': 'repeat(auto-fit, minmax(15rem, 1fr))',
				fit: 'repeat(auto-fit, minmax(18rem, 1fr))',
				'fit-lg': 'repeat(auto-fit, minmax(21rem, 1fr))',
				'fit-xl': 'repeat(auto-fit, minmax(24rem, 1fr))',
				article: `[full-start] minmax(${theme('spacing[4]')}, 1fr)
							 [feature-start] minmax(0, ${theme('spacing[24]')})
							 [popout-start] minmax(0, ${theme('spacing[12]')})
							 [content-start] min(70ch, 100% - ${theme('spacing[4]')} * 2) [content-end]
							 minmax(0, ${theme('spacing[12]')}) [popout-end]
							 minmax(0, ${theme('spacing[24]')}) [feature-end]
							 minmax(${theme('spacing[4]')}, 1fr) [full-end];`
			}),
			opacity: {
				15: '.15'
			},
			screens: {
				'supports-hover': { raw: '(hover: hover)' }
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
				30: '7.5rem',
				34: '7.5rem'
			},
			transitionDelay: {
				0: '0ms',
				400: '400ms'
			},
			transitionProperty: {
				trop: 'transform, opacity',
				visop: 'visibility, opacity'
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
				'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
				'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
				'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)'
			}
		}
	},

	plugins: [
		plugin(({ addVariant }) => {
			addVariant('g-dark', ':global(.dark) &');
			addVariant('blog', '.content &');
			addVariant('can-hover', '@media (hover: hover) {body &:hover}');
			addVariant('active', '.active&');
		})
	]
};

module.exports = config;
