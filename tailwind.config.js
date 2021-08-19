module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				pop: ['Poppins'],
				rob: ['Roboto'],
				lato: ['Lato'],
			},
			inset: {
				top: 'calc(55% + 15px)',
			},
			gridTemplateColumns: {
				tableGrid: [
					'minmax(70px, 70px) minmax(70px, 70px) minmax(70px, 70px) minmax(150px, auto) minmax(150px, auto) auto',
				],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
