import { Col, Form, Icon, Input, Row } from "antd";
import Comp from "../../../assets/Comp.svg";
import logo_tiggidoo_blanc from "../../../assets/logo_tiggidoo_blanc.svg";
import Plantes from '../../../assets/Plantes.svg'
import style from "../index.less";

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
			<div className={style.foot}>
				<Row>
					<Col span={4} offset={1}>
						<img src={Comp} alt="Comp" width="230px" style={{ marginTop: "30px" }} />
					</Col>
					<Col span={5}>
						<img src={logo_tiggidoo_blanc} alt={this.state.language.Text_58} width="230px" style={{ marginTop: "200px" }} />
						<div style={{ color: "#ffffff", fontSize: "15px", marginTop: "20px" }}>{this.state.language.Text_30}</div>
					</Col>
					<Col span={6} offset={4}>
						<div style={{ color: "#ffffff", fontSize: "25px", marginTop: "180px",  fontWeight: 600,  marginLeft: "22px" }}>{this.state.language.Text_29}</div>
						<div style={{ color: "#ffffff", fontSize: "60px" }}>
						
							<img src={facebook} style={{ color: "#ffffff", fontSize: "40px" }} alt={this.state.language.Text_63}></img>
					
							<img src={linkedin} style={{ marginLeft: "40px", color: "#ffffff", fontSize: "40px" }} alt={this.state.language.Text_64}></img>
						
							<img src={instagram} style={{ marginLeft: "40px", color: "#ffffff", fontSize: "40px" }} alt={this.state.language.Text_65}></img>
						
						</div>
					</Col>
					<Col span={4}>
						<img src={Plantes} alt="plante" width="240px" style={{ marginTop: "40px" }} />
					</Col>
				</Row>
			</div>
		);
	}
}
