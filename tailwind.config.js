module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					blue: "#89AFA8",
					yellow: "#E8AF75",
					pink: "#C37869",
					red: "#833F2C",
				},
			},
			letterSpacing: {
				tightest: "-.080em",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
