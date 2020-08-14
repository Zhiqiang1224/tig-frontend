import axios from "axios";
import qs from "qs";
const url = "http://tiggidoov1-env.eba-m2ffznh6.us-east-2.elasticbeanstalk.com/api/sende";
const headers = {
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	}
};

export const sendemail = async data => {
	return await axios.post(url, qs.stringify({ email_id: "ganyinglai123@foxmail.com" }), { withCredentials: false }).then(response => {
		return {
			data: response.data.data,
			code: response.data.code
		};
	});
};
