import { Col, Form, Icon, Input, Row } from "antd";
import Comp from "../../../assets/Comp.svg";
import logo_tiggidoo_blanc from "../../../assets/logo_tiggidoo_blanc.svg";

import style from "../index.less";
import Plantes from "../../../assets/Plantes.svg";

@Form.create()
export default class Footer extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div style={{ marginTop: "100px" }}>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row style={{ textAlign: "center" }}>
						<img src={logo_tiggidoo_blanc} alt="Service de ménage à domicile au Quebec" width="129px" style={{ marginTop: "40px" }} />
					</Row>
					<Row style={{ textAlign: "center" }}>
						<div style={{ color: "#ffffff", fontSize: "25px", marginTop: "50px", fontWeight: 600 }}>SUIVEZ-NOUS</div>
					</Row>
					<Row style={{ textAlign: "center", marginTop: "20px" }}>
						<Col span={6} offset={3}>
							<a href="https://www.facebook.com/Tiggidoo-106384241156285/">
								<Icon style={{ color: "#ffffff", fontSize: "40px" }} type="facebook" alt="Facebook de Tiggidoo" />
							</a>
						</Col>
						<Col span={6}>
							<a href="https://www.linkedin.com/company/tiggidoo">
								<Icon type="linkedin" alt="Linkedin de Tiggidoo" style={{ color: "#ffffff", fontSize: "40px" }} />
							</a>
						</Col>
						<Col span={6}>
							<a href="https://www.instagram.com/tiggidoo/">
								<Icon type="instagram" alt=" Instagram de Tiggidoo" style={{ color: "#ffffff", fontSize: "40px" }} />
							</a>
						</Col>
					</Row>
					<Row style={{ textAlign: "center" }}>
						<div style={{ color: "#ffffff", fontSize: "15px", marginTop: "80px", paddingBottom: "20px" }}>Copiright 2020 Touts droits réservés</div>
					</Row>
				</div>
			</div>
		);
	}
}
