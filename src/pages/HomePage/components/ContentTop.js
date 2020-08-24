import { Col, Form, Icon, Input, Row } from "antd";
import Groupe from "../../../assets/Groupe.svg";
import * as service from "../../../service/api";
import style from "../index.less";
const { Search } = Input;
@Form.create()
export default class ContentTop extends React.Component {
	state = {
		email: "Unsent"
	};
	componentDidMount = async () => {};
	sendEmail = async e => {
		console.log(e);
		let data = await service.sendemail();
		console.log(data);
		if (data.code == 200) {
			this.setState({
				email: "HasSent"
			});
		}
	};

	render() {
		return (
			<div>
				<Row>
					<Col span={11} offset={1}>
						<h1 className={style.title} style={{ color: "#707070" }}>
							Pas le temps, ni le goût
						</h1>
						<span className={style.titles} style={{ color: "#707070" }}>
							C’est Tiggidoo
						</span>

						<Row>
							<Col span={24}>
								{" "}
								<h2 className={style.smalltitle} style={{ color: "#707070" }}>
									Trouvez votre expert en entretien ménager résidentiel
								</h2>
							</Col>
						</Row>
						<Row style={{ color: "#2880F9" }}>
							<Col span={8}>
								{" "}
								<div className={style.category}>VALIDER VOTRE TARIF</div>
							</Col>
							<Col span={8}>
								{" "}
								<div className={style.category}>CHOISISSEZ VOTRE TODOO</div>
							</Col>
							<Col span={8}>
								{" "}
								<div className={style.category}>RÉSERVEZ EN LIGNE</div>
							</Col>
						</Row>
						<p className={style.content} style={{ color: "#707070" }}>
							Découvrez les Todoo, nos spécialistes du ménage prêts à faire briller votre logis, quand vous le voulez, comme vous le voulez. Chaque expert en entretien ménager est trié
							sur le volet par notre équipe et noté après chaque prestation par des utilisateurs comme vous. Choisissez un ou plusieurs profils préférés et dites adieu aux corvées.
						</p>
						<Row>
							<Col span={20}>
								{" "}
								<h3 className={style.othertitle} style={{ color: "#707070" }}>
									Devenez client VIP : C'est gratuit et sans engagement!
								</h3>
							</Col>
						</Row>
						<div className={style.category} style={{ color: "#2880F9" }}>
							PRÉ-INSCRIPTION : - 20%
						</div>
						<p className={style.content} style={{ color: "#707070" }}>
							Tiggidoo prendra bientôt d'assaut le marché de l'entretien ménager résidentiel dans la grande région de Montréal. Laissez nous votre courriel, nous vous préviendrons dès
							que nos services seront disponibles, en plus vous bénéficiez de -20% sur votre premier ménage.
						</p>

						<div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
							{this.state.email == "HasSent" ? (
								<div className={style.sucess} style={{ backgroundColor: "#FFFFFF", color: "#2880F9" }}>
									<Icon type="check" style={{ color: "#28cc8b", fontSize: "60px", marginLeft: "30px" }} /> MERCI, vos information sont enregistrées
								</div>
							) : (
								<Search
									className="Search"
									prefix={<Icon type="mail" style={{ color: "#28cc8b", fontSize: "40px" }} />}
									placeholder="courriel@tiggidoo.com"
									enterButton="ENVOYER"
									size="large"
									onSearch={this.sendEmail}
								/>
							)}
						</div>
					</Col>
					<Col span={10}>
						<img src={Groupe} alt="Groupe" width="100%" className={style.Groupe} />
					</Col>
				</Row>
			</div>
		);
	}
}
