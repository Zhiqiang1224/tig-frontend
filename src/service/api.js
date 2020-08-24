import axios from "axios";
import qs from "qs";
import { message } from "antd";
const headers = {
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
};

// 添加响应拦截器
axios.interceptors.response.use(
	function(response) {
		console.log(response);
		// 对响应数据做点什么
		return response;
	},
	function(error) {
		console.log(error.response, "666");
		// 对响应错误做点什么
		let response = {
			data: error.response.data,
			status: error.response.status
		};
		return response;
	}
);

export const sendemail = async data => {
	return await axios.post("https://api.tiggidoo.com/api/sendemail", qs.stringify({ email_id: data }), { withCredentials: false }).then(response => {
		return {
			data: response.data,
			code: response.status
		};
	});
};

export const register = async data => {
	return await axios.post("https://api.tiggidoo.com/api/register", qs.stringify(data), { withCredentials: false }).then((response, e) => {
		return {
			data: response.data,
			code: response.status
		};
	});
};
