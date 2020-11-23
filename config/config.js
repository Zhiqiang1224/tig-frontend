export default {
	history: "hash",
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true,
				//title: "Tiggidoo: the platform for housekeeping",
				//metas: [{ description: "Tiggidoo: new residential cleaning service platform! Find a housekeeper among qualified professionals in housekeeping", keywords : "Tiggidoo, ménager, service de ménage résidentiel" }],
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
			//title: "Tiggidoo: the platform for housekeeping",
			component: "HomePage/index"
		},
		{
			path: "/Registered",
			//title: "Tiggidoo: the platform for housekeeping",
			component: "Registered/index"
		}
	],
	outputPath: "build"
};
