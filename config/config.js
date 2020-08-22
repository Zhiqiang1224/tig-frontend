export default {
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true
			}
		]
	],
	proxy: {
		"/api": {
			target: "http://test.futve.com/",
			changeOrigin: true
		}
	},
	theme: {
		"primary-color": "#28CC8B"
	},
	routes: [
		{
			path: "/",
			component: "HomePage/index"
		}
	],
	outputPath:'build'

};
