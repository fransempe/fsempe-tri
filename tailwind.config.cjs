/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				azur: '#0b3fc4',
				asfalto: '#12151a',
				dorsal: '#f4f6f8',
				buganvilla: '#b0146e',
				sol: '#ffc61a',
			},
			fontFamily: {
				archivo: ['Archivo', 'Arial Narrow', 'sans-serif'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: ["night"], // only the theme used by BaseLayout
		darkTheme: "night",
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
