import { Button, Col, Form, Input, Row, Icon } from "antd";
import emploi_entretien_menager_montreal from "../../../assets/emploi_entretien_menager_montreal.svg";
import style from "../index.less";
import { Link } from "react-router-dom";
@Form.create()
export default class Content extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div style={{ marginTop: "40px" }}>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row>
						<Col span={21} offset={1}>
							<h2 className={style.Mobile_Showtitle} style={{ color: "#FFFFFF" }}>
								Vous êtes un professionnel préposé au ménage ?
							</h2>
						</Col>
					</Row>
					<Row>
						<Col span={16} offset={4}>
							<img src={emploi_entretien_menager_montreal} alt="Emploi entretien ménager à Montréal" width="100%" style={{ paddingTop: "80px", paddingBottom: "80px" }} />
						</Col>
					</Row>

					<Row>
						<Col span={20} offset={1}>
							<h3 className={style.Mobile_Showsmalltitle} style={{ color: "#FFFFFF" }}>
								Devenez un ToDoo !
							</h3>
							<p className={style.Mobile_Showcontent} style={{ color: "#FFFFFF" }}>
								Gratuit, sans engagement et flexible : Tiggidoo est la solution pour tous les travailleurs autonomes en entretien ménager résidentiel.
							</p>
							<h3 className={style.Mobile_Showsmalltitle} style={{ color: "#FFFFFF" }}>
								C'est vous le patron
							</h3>
							<p className={style.Mobile_Showcontent} style={{ color: "#FFFFFF" }}>
								En tant que Todoo, vous gardez le plein contrôle de votre horaire. Vous recevrez des offres automatiquement selon vos critères, votre secteur et vos disponibilités.
							</p>
							<h3 className={style.Mobile_Showsmalltitle} style={{ color: "#FFFFFF" }}>
								Travaillez mieux, gagnez plus
							</h3>
							<p className={style.Mobile_Showcontent} style={{ color: "#FFFFFF" }}>
								Moins de gestion signifie plus de revenus et de liberté. Vous aurez accès gratuitement à des outils de gestion efficaces pour optimiser votre temps et augmenter vos
								gains.
							</p>
						</Col>
					</Row>
					<Row>
						<Col span={22} offset={1}>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								Inscription gratuite sans engagement
							</p>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								Rémunération minimum réglementée
							</p>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								Paiement sécurisé et garanti
							</p>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								Grande visibilité de vos services
							</p>
						</Col>
					</Row>
					<div style={{ textAlign: "center", paddingBottom: "40px" }}>
						<Link to="/Registered">
							<Button style={{ width: "320px", height: "60px", fontSize: "23px", marginTop: "50px", fontWeight: "600" }} type="primary">
								Je deviens un Todoo
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
