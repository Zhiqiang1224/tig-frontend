export default {
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true,
				title: "Tiggidoo : la plateforme des ",
				metas: [{ charset: "utf-8", description: "这里填写描述内容" }],
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
