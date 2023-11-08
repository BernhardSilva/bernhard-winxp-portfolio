import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		variants: {
			extend: {
			  transform: ['hover', 'focus'],
			  rotate: ['hover', 'focus'],
			},
		  },
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	darkMode: 'class',
	plugins: [],
	extend: {
		animation: {
			blink: 'blink 0.2s infinite'
		},
		keyframes: {
			blink: {
				'0%': { opacity: '1' },
				'50%': { opacity: '0' },
				'100%': { opacity: '1' }
			}
		}
	}
};
export default config;
