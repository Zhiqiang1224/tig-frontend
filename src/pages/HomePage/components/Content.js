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
			<div>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row>
						<Col span={8} offset={1}>
							<img src={emploi_entretien_menager_montreal} alt="Emploi entretien ménager à Montréal" width="100%" style={{ paddingTop: "300px", paddingBottom: "90px" }} />
						</Col>
						<Col span={12} offset={3}>
							<h2 className={style.Showtitle} style={{ color: "#FFFFFF",marginBottom:"1px" , textAlign: "left", width: "900px"}}>
							Tiggidoo recherche des préposés à l'entretien ménager À vos moppes, ready, gOo!
							 </h2>
                         </Col>
						<Col span={11} offset={3}>
							
							<h3 className={style.Showsmalltitle} style={{ color: "#FFFFFF" }}>
								Devenez un ToDoo !
							</h3>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
							    Gratuit, sans engagement et flexible : Tiggidoo est la solution pour tous les travailleurs autonomes en entretien ménager résidentiel.
							</p>
							<h3 className={style.Showsmalltitle} style={{ color: "#FFFFFF" }}>
								C'est vous le patron
							</h3>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
								En tant que Todoo, vous gardez le plein contrôle de votre horaire. Vous recevrez des offres automatiquement selon vos critères, votre secteur et vos disponibilités.
							</p>
							<h3 className={style.Showsmalltitle} style={{ color: "#FFFFFF" }}>
								Travaillez mieux, gagnez plus
							</h3>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
								Moins de gestion signifie plus de revenus et de liberté. Vous aurez accès gratuitement à des outils de gestion efficaces pour optimiser votre temps et augmenter vos
								gains.
							</p>
							<Row>
								<Col span={20} offset={2}>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF",  fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										Inscription gratuite sans engagement
									</p>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF", fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										Rémunération minimum réglementée
									</p>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF", fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										Paiement sécurisé et garanti
									</p>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF", fontSize: "21px" }}>
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
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
