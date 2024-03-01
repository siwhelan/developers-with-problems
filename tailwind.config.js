export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF5001', // Use for primary actions
				background: '#EFEFEF', // Main background color
				accent: '#B3AEA8', // Secondary elements or borders
				text: '#646368', // Primary text color
				dark: '#231F20' // Headings or emphasized text
			}
		}
	},
	plugins: []
};
