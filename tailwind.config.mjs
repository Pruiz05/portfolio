/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#84cc16',
					muted: '#a3e635',
					dark: '#65a30d',
				},
				surface: {
					light: '#f5f5f5',
					dark: '#0a0a0a',
				},
			},
			fontFamily: {
				sans: ['"Onest Variable"', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
				'gradient-shift': 'gradientShift 3s ease infinite',
				marquee: 'marquee 40s linear infinite',
			},
		},
	},
	plugins: [],
}
