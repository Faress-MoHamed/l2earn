/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				designer: ["Designer", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
			},
		},
	},
	plugins: [],
};
