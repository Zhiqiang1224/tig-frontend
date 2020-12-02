import { Card, Form, Icon, Tabs, Row, Col, Button, Timeline, Select, Tag, Input, Affix } from "antd";
import Header from "./components/Header";
import ContentTop from "./components/ContentTop";
import Footer from "./components/Footer";
import Mobile_Header from "./components/Mobile_Header";
import Mobile_ContentTop from "./components/Mobile_ContentTop";
import Mobile_Footer from "./components/Mobile_Footer";

import {Helmet} from "react-helmet";
import LanguageText from "../../assets/Langue/Language";
let storage = window.localStorage;

@Form.create()
export default class Registered extends React.Component {
	state = {
		flag: true, //true为PC端，false为手机端
		language: LanguageText.French
	};
	componentDidMount = async () => {
		let flag = this.IsPC();
		console.log(flag);
		this.setState({
			flag: flag
		});
		storage.languageType == "En" ? this.setState({ language: LanguageText.En }) : this.setState({ language: LanguageText.French });
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
				<Helmet>
					<title>{this.state.language.Text_56}</title>
					<meta name="description" content={this.state.language.Text_57} />
					<meta name="robots" content="NOINDEX, NOFOLLOW" />
                </Helmet>
				{this.state.flag == true ? (
					<div>
						<Affix offsetTop={0}>
							<Header style={{ backgroundColor: "#F6F6F6" }} />
						</Affix>
						<div style={{ backgroundColor: "#F6F6F6" }}>
							<ContentTop />
						</div>

						<Footer />
					</div>
				) : (
					<div>
						<Affix offsetTop={0}>
							<Mobile_Header style={{ backgroundColor: "#F6F6F6" }} />
						</Affix>
						<Mobile_ContentTop />
						<Mobile_Footer />
					</div>
				)}
			</div>
		);
	}
}
