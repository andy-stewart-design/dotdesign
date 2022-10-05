const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				black: '#111111',
				gray: {
					...colors.zinc,
					900: '#16181A'
				}
			},
			gridTemplateColumns: {
				'fit-sm': 'repeat(auto-fit, minmax(15rem, 1fr))',
				fit: 'repeat(auto-fit, minmax(18rem, 1fr))',
				'fit-lg': 'repeat(auto-fit, minmax(21rem, 1fr))',
				'fit-xl': 'repeat(auto-fit, minmax(24rem, 1fr))'
			},
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
			addVariant('can-hover', '@media (hover: hover) {&:hover}');
		})
	]
};

module.exports = config;
