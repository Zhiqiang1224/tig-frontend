import { Col, Form, Icon, Input, Row, Button } from "antd";
import menage_domicile_montreal from "../../../assets/menage_domicile_montreal.svg";
import * as service from "../../../service/api";
import style from "../index.less";
const { Search } = Input;
@Form.create()
export default class ContentTop extends React.Component {
	state = {
		firstName: '',
		registerUser: false,
		message_email: "",
		isVisible : true
	};

	handleChange (e) {
		this.setState({isVisible: false})
	}

	handleClick () {
		this.setState({isVisible: true})
	}

	componentDidMount = async () => {};
	handleSubmit = async e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll(async (err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				let p = {
					firstName: values.firstName,
					email: values.email	
				};
				let data = await service.registerUser(p);
				console.log(data);
				if (data.code == 200) {
					this.setState({
						firstName: values.firstName,
						registerUser: true,
						message: "ACCUEIL"
					});
				}
				if (data.code !== 200 ) {
					if(data.data.error == "The email is already exist"){
                        this.setState({
							registerUser: false,
							message_email: "Ce courriel est déja existant dans la base",
						});
					}
				}
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { message_email } = this.state;
		const { isVisible } = this.state;

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

				<Row >
					<Col span={21} offset={1}>
						<Form onSubmit={this.handleSubmit} style={{ marginTop: "30px" }}>
						{this.state.registerUser ? (
								<div className={style.Mobile_sucess} style={{ backgroundColor: "#FFFFFF", color: "#2880F9" }}>
									<Icon type="check" style={{ color: "#28cc8b", fontSize: "35px", marginLeft: "15px", marginTop: "15px", fontWeight: 700,  verticalAlign: 'middle' }} />
									<p> MERCI, vos informations sont
									 enregistrées</p>
								</div>
							) : (
								<Row>
									<Form.Item label="Prénom" className="Item">
										
										{getFieldDecorator("firstName", {
											rules: [{ required: true, message: "Le prénom ne peut pas être vide" }]
										})(
											<Input
												className="Inputs"
												placeholder="Votre prénom"
												id="error"
												onChange={e => {
													this.handleChange(e);
												}}
												ref={input => (this.myinput = input)}
											/>
										)}
									</Form.Item>
									
									<Form.Item label="Courriel" className="Item">
										{getFieldDecorator("email", {
											rules: [
												{ required: true, message: "Le courriel ne peut pas être vide" },
												{
													type: "email",
													message: "Le  E-mail n'est pas valide"
												},
												{
													validator: this.handleValidator
												}
											]
										})(
											<Input
												className="Inputs"
												placeholder="Votre courriel"
												onChange={e => {
													this.handleChange(e);
												}}
												ref={input => (this.myinput = input)}
											/>
										)}
										<span className={style.Formspan}>{isVisible && message_email}</span>
									</Form.Item>
									</Row>
								)}
									<div style={{ textAlign: "center", marginTop: "20px" }}>
										<Col span={21} offset={1}>
											<Button type="primary" style={{ width: "196px", height: "46px", fontSize: "18px" }} htmlType="submit" onClick={this.handleClick.bind(this)}>
												ENVOYER
											</Button>
										</Col>
									</div>
								</Form>
					</Col>
				</Row>				
			</div>
		);
	}
}
