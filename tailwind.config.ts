import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				custom: '#13395D',
			},
			dropShadow: {
				custom: '0px 0px 10px rgba(0, 0, 0, 0.5)',
			},
			backgroundImage: {
				'home-pattern': "url('/img/valorant.jpg')",
			},
			keyframes: {
				colorChange: {
					'0%': { color: '#ffedd5' },
					'100%': { color: '#fed7aa' },
				},
			},
			animation: {
				colorChange: 'colorChange 15s ease-in-out infinite',
			},
		},
	},
	plugins: [],
} satisfies Config
