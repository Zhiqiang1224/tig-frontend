export default {
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true,
				title: "Tiggidoo : la plateforme des ",
				metas: [{ charset: "utf-8", description: "Tiggidoo, nouvelle plateforme de service de ménage résidentiel! Trouvez une aide ménagère, parmi les professionnels qualifiés en entretien ménager" }],
				links: [{ rel: "shortcut icon", href: "assets/favicon.ico" }],
			},
		],
	],

	proxy: {
		"/api": {
			target: "https://api.tiggidoo.com",
			changeOrigin: true,
		},
	},
	theme: {
		"primary-color": "#28CC8B",
	},
	routes: [
		{
			path: "/",
			title: "Tiggidoo : la plateforme des ",
			component: "HomePage/index",
		},
		{
			path: "/Registered",
			title: "Tiggidoo : la plateforme des ",
			component: "Registered/index",
		},
	],
	exportStatic: { htmlSuffix: true },
};
