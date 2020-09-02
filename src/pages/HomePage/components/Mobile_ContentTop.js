import { Col, Form, Icon, Input, Row, Button } from "antd";
import menage_domicile_montreal from "../../../assets/menage_domicile_montreal.svg";
import * as service from "../../../service/api";
import style from "../index.less";
const { Search } = Input;
@Form.create()
export default class ContentTop extends React.Component {
	state = {};
	componentDidMount = async () => {};

	onChange = e => {
		console.log(e.target.value);
		this.setState({
			value: e.target.value
		});
	};

	sendEmail = async () => {
		let value = this.state.value;
		let data = await service.sendemail(value);
		console.log(data);
	};

	Reset = () => {
		this.setState({
			email: "Unsent"
		});
	};

	render() {
		return (
			<div>
				<Row>
					<Col span={22} offset={1}>
						<div className={style.Mobile_title} style={{ color: "#464545" }}>
							Pas le temps, ni le goût
						</div>
						<div className={style.Mobile_titles} style={{ color: "#464545" }}>
							<span>C’est Tiggid</span>
							<span style={{ color: "#28cc8b" }}>oo</span>
						</div>
					</Col>
				</Row>
				<Row>
					<Col span={20} offset={2}>
						<img src={menage_domicile_montreal} alt="Trouver une femme de ménage à Montréal" width="100%" className={style.Mobile_Groupe} />
					</Col>
				</Row>
				<Row>
					<Col span={22} offset={1}>
						<h2 className={style.Mobile_smalltitle} style={{ color: "#464545" }}>
							Trouvez votre expert en entretien ménager résidentiel
						</h2>
					</Col>
				</Row>
				<Row style={{ color: "#2880F9", marginTop: "30px" }}>
					<Col span={22} offset={1}>
						{" "}
						<div className={style.Mobile_category}>VALIDER VOTRE TARIF</div>
					</Col>
					<Col span={22} offset={1}>
						{" "}
						<div className={style.Mobile_category}>CHOISISSEZ VOTRE TODOO</div>
					</Col>
					<Col span={22} offset={1}>
						{" "}
						<div className={style.Mobile_category}>RÉSERVEZ EN LIGNE</div>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<p className={style.Mobile_content} style={{ color: "#4D4D4D" }}>
							Découvrez les Todoo, nos spécialistes du ménage prêts à faire briller votre logis, quand vous le voulez, comme vous le voulez. Chaque expert en entretien ménager est trié
							sur le volet par notre équipe et noté après chaque prestation par des utilisateurs comme vous. Choisissez un ou plusieurs profils préférés et dites adieu aux corvées.
						</p>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<h3 className={style.Mobile_othertitle} style={{ color: "#464545" }}>
							Devenez client VIP : C'est gratuit et sans engagement!
						</h3>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<div className={style.Mobile_category} style={{ color: "#2880F9" }}>
							PRÉ-INSCRIPTION : - 20%
						</div>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<p className={style.Mobile_content} style={{ color: "#4D4D4D" }}>
							Tiggidoo prendra bientôt d'assaut le marché de l'entretien ménager résidentiel dans la grande région de Montréal. Inscrivez-vous dès aujourd’hui pour devenir client VIP et
							recevoir un rabais de 20% sur votre premier ménage.
						</p>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<Input className="Mobile_Input" placeholder="courriel@tiggidoo.com" style={{ fontSize: "15px", height: "55px" }} onChange={this.onChange} />
					</Col>
				</Row>

				<Row>
					<div style={{ textAlign: "center", marginTop: "20px" }}>
						<Col span={21} offset={1}>
							<Button type="primary" style={{ width: "196px", height: "46px", fontSize: "18px" }} onClick={this.sendEmail}>
								ENVOYER
							</Button>
						</Col>
					</div>
				</Row>
			</div>
		);
	}
}
