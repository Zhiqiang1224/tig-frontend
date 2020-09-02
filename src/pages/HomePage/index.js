import { Card, Form, Icon, Tabs, Row, Col, Button, Timeline, Select, Tag, Input, Affix } from "antd";
import Header from "./components/Header";
import ContentTop from "./components/ContentTop";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Mobile_Header from "./components/Mobile_Header";
import Mobile_ContentTop from "./components/Mobile_ContentTop";
import Mobile_Content from "./components/Mobile_Content";
import Mobile_Footer from "./components/Mobile_Footer";

@Form.create()
export default class index extends React.Component {
	state = {
		flag: true //true为PC端，false为手机端
	};
	componentDidMount = async () => {
		let flag = this.IsPC();
		console.log(flag);
		this.setState({
			flag: flag
		});
	};
	IsPC = () => {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	};

	render() {
		return (
			<div>
				{this.state.flag == true ? (
					<div style={{ backgroundColor: "#E8E8E8" }}>
						<Affix offsetTop={0} style={{ backgroundColor: "#E8E8E8" }}>
							<Header />
						</Affix>
						<ContentTop />
						<Content />
						<Footer />
					</div>
				) : (
					<div style={{ backgroundColor: "#F6F6F6" }}>
						<Affix offsetTop={0} style={{ backgroundColor: "#E8E8E8" }}>
							<Mobile_Header />
						</Affix>
						<Mobile_ContentTop />
						<Mobile_Content />
						<Mobile_Footer />
					</div>
				)}
			</div>
		);
	}
}
