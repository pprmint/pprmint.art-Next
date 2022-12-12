/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		{
			pattern: /grid-cols-./,
		},
	],
	theme: {
		extend: {
			colors: {
				green: {
					DEFAULT: "#00cc66",
					dark1: "#00b359",
					dark2: "#008c46",
					dark3: "#004d26",
				},
				red: {
					DEFAULT: "#ff3344",
					dark1: "#e62e3d",
					dark2: "#bf2633",
					dark3: "#801922",
				},
				blue: {
					DEFAULT: "#1199ff",
					dark1: "#1089e6",
					dark2: "#0d72bf",
					dark3: "#094c80",
				},
				yellow: {
					DEFAULT: "#ffbb22",
					dark1: "#e6aa1e",
					dark2: "#bf8d19",
					dark3: "#805e11",
				},
				black: {
					DEFAULT: "#111111",
					light1: "#222222",
					light2: "#333333",
				},
				white: {
					DEFAULT: "#eeeeee",
					dark1: "#dddddd",
					dark2: "#cccccc",
				},
			},
			fontFamily: {
				sans: [
					"Aspekta Variable",
					"Roboto",
					"Helvetica",
					"Arial",
					"sans-serif",
				],
				pixel: ["MintBit", "Roboto Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
