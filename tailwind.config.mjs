/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			animation: {
				fade: 'fadeIn 1s ease-in-out forwards',
				fadeOut: 'fadeOut 1s ease-in-out forwards',
			  },
		
			  // that is actual animation
			  keyframes: theme => ({
				fadeIn: {
				  '0%': { opacity: 0, transform: 'translateY(20px)'},
				  '100%': {opacity: 1, transform: 'translateY(0.75rem)'},
				},
				fadeOut: {
					'0%': { opacity: 1},
					'100%': {opacity: 0, visibility: 'none', display: 'none'},
				  },
			  }),
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require("tailwindcss-animation-delay"),
		plugin(function({ addUtilities }) {
			addUtilities({
				'.no-scrollbar::-webkit-scrollbar': {
					'display': 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			})
		  })
	],
}
