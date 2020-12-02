export default {
	history: "hash",
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true,
				title: "Tiggidoo: the platform for housekeeping",
				links: [{ rel: "canonical", href: "https://www.tiggidoo.com/" }]
			}
			
		]
	],

	proxy: {
		"/api": {
			target: "https://api.tiggidoo.com",
			changeOrigin: true
		}
	},
	theme: {
		"primary-color": "#28CC8B"
	},
	routes: [
		{
			path: "/",
			title: "Tiggidoo: the platform for housekeeping",
			component: "HomePage/index"
		},
		{
			path: "/Registered",
			title: "Tiggidoo: the platform for housekeeping",
			component: "Registered/index"
		}
	],
	outputPath: "build"
};
