import { Col, Form, Icon, Input, Row } from "antd";
import Comp from "../../../assets/Comp.svg";
import logo_tiggidoo_blanc from "../../../assets/logo_tiggidoo_blanc.svg";
import Plantes from '../../../assets/Plantes.svg'
import style from "../index.less";

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
						<img src={logo_tiggidoo_blanc} alt="Service de ménage à domicile au Quebec" width="230px" style={{ marginTop: "200px" }} />
						<div style={{ color: "#ffffff", fontSize: "15px", marginTop: "20px" }}>{this.state.language.Text_30}</div>
					</Col>
					<Col span={6} offset={4}>
						<div style={{ color: "#ffffff", fontSize: "25px", marginTop: "180px", fontWeight: 600 }}>{this.state.language.Text_29}</div>
						<div style={{ color: "#ffffff", fontSize: "60px" }}>
						<a href="https://www.facebook.com/Tiggidoo-106384241156285/">
							<Icon style={{ color: "#ffffff", fontSize: "45px" }} type="facebook" alt="Facebook de Tiggidoo" />
						</a>
						<a href="https://www.linkedin.com/company/tiggidoo">
						    <Icon  type="linkedin" alt="Linkedin de Tiggidoo" style={{ marginLeft: "20px", color: "#ffffff", fontSize: "45px" }} />
						</a>
						<a href="https://www.instagram.com/tiggidoo/">
							<Icon type="instagram" alt=" Instagram de Tiggidoo" style={{ marginLeft: "20px", color: "#ffffff", fontSize: "45px" }} />
						</a>
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
