import { Col, Form, Icon, Input, Row } from "antd";
import Comp from "../../../assets/Comp.svg";
import logo_tiggidoo_blanc from "../../../assets/logo_tiggidoo_blanc.svg";

import style from "../index.less";
import Plantes from "../../../assets/Plantes.svg";

import facebook from '../../../assets/Facebook_tiggidoo.png';
import linkedin from '../../../assets/linkedin_tiggidoo.png';
import instagram from '../../../assets/instagram_tiggidoo.png';

import LanguageText from "../../../assets/Langue/Language";
let storage = window.localStorage;

@Form.create()
export default class Footer extends React.Component {
	state = {
		language: LanguageText.French
	};

	componentDidMount = async () => {
		storage.languageType == "En" ? this.setState({ language: LanguageText.En }) : this.setState({ language: LanguageText.French });
	};

	render() {
		return (
			<div style={{ marginTop: "100px" }}>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row style={{ textAlign: "center" }}>
						<img src={logo_tiggidoo_blanc} alt={this.state.language.Text_58} width="129px" style={{ marginTop: "40px" }} />
					</Row>
					<Row style={{ textAlign: "center" }}>
						<div style={{ color: "#ffffff", fontSize: "25px", marginTop: "50px", fontWeight: 600 }}>{this.state.language.Text_29}</div>
					</Row>
					<Row style={{ textAlign: "center", marginTop: "20px" }}>
						<Col span={6} offset={3}>
						
							     <img src={facebook} style={{ color: "#ffffff", fontSize: "40px" }} alt={this.state.language.Text_63}></img>
						
						</Col>
						<Col span={6}>
							
							    <img src={linkedin} style={{ marginLeft: "23px", color: "#ffffff", fontSize: "40px" }} alt={this.state.language.Text_64}></img>
							
						</Col>
						<Col span={6}>
							
							    <img src={instagram} style={{ marginLeft: "23px", color: "#ffffff", fontSize: "40px" }} alt={this.state.language.Text_65}></img>
						
						</Col>
					</Row>
					<Row style={{ textAlign: "center" }}>
						<div style={{ color: "#ffffff", fontSize: "15px", marginTop: "80px", paddingBottom: "20px" }}>{this.state.language.Text_30}</div>
					</Row>
				</div>
			</div>
		);
	}
}
