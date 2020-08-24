import { Col, Form, Icon, Input, Row } from "antd";
import Comp from "../../../assets/Comp.svg";
import logo_tiggidoo_blanc from "../../../assets/logo_tiggidoo_blanc.svg";
import plante from "../../../assets/plante.svg";
import style from "../index.less";

@Form.create()
export default class Footer extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div className={style.foot}>
				<Row>
					<Col span={4} offset={1}>
						<img src={Comp} alt="Comp" width="230px" style={{ marginTop: "30px" }} />
					</Col>
					<Col span={5}>
						<img src={logo_tiggidoo_blanc} alt="Service de ménage à domicile au Quebec" width="230px" style={{ marginTop: "160px" }} />
						<div style={{ color: "#ffffff", fontSize: "15px", marginTop: "20px" }}>Copiright 2020 Tout droit réservé</div>
					</Col>
					<Col span={6} offset={4}>
						<div style={{ color: "#ffffff", fontSize: "25px", marginTop: "180px", fontWeight: 600 }}>SUIVEZ-NOUS</div>
						<div style={{ color: "#ffffff", fontSize: "60px" }}>
							<Icon type="facebook" />
							<Icon type="linkedin" style={{ marginLeft: "20px" }} />
							<Icon type="instagram" style={{ marginLeft: "20px" }} />
						</div>
					</Col>
					<Col span={4}>
						<img src={plante} alt="plante" width="240px" style={{ marginTop: "30px" }} />
					</Col>
				</Row>
			</div>
		);
	}
}
