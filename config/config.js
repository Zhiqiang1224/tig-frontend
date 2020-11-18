export default {
	history: "hash",
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true,
				title: "Tiggidoo : la plateforme des préposés à l'entretien ménager",
				links: [{ rel: "shortcut icon", href: "/favicon.ico" }]
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
			title: "Tiggidoo : la plateforme des préposés à l'entretien ménager",
			component: "HomePage/index"
		},
		{
			path: "/Registered",
			title: "Tiggidoo : la plateforme des préposés à l'entretien ménager",
			component: "Registered/index"
		}
	],
	outputPath: "build"
};
