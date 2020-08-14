import { Button, Col, Form, Input, Row } from "antd";
import Composant from "../../../assets/Composant.svg";
import style from "../index.less";
@Form.create()
export default class Content extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row>
						<Col span={8} offset={1}>
							<img src={Composant} alt="Composant" width="100%" style={{ paddingTop: "90px", paddingBottom: "90px" }} />
						</Col>
						<Col span={11} offset={3}>
							<h2 className={style.Showtitle} style={{ color: "#FFFFFF" }}>
								Vous êtes un professionnel préposé au ménage ?
							</h2>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
								Inscrivez-vous à notre campagne de recrutement d’experts du ménage. Tiggidoo est une plateforme simple d’utilisation, qui vous permet d’être contacté pour la
								réalisation d’une prestation de service de ménage résidentiel.
							</p>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
								Grâce à la plateforme vous profitez d’outils nécessaires à l’amélioration de votre quotidien, au soutien de votre organisation et à l’accélération de votre
								productivité.
							</p>
							<h3 className={style.Showsmalltitle} style={{ color: "#FFFFFF" }}>
								Inscrivez vous à notre recrutement, en répondant à notre questionnaire
							</h3>
							<div style={{ textAlign: "center" }}>
								<Button style={{ width: "320px", height: "60px", fontSize: "23px", marginTop: "50px", fontWeight: "600" }} type="primary">
									JE DEVIENS PRO
								</Button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
