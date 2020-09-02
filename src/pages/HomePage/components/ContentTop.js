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
					<Col span={11} offset={1}>
						<div className={style.title} style={{ color: "#464545" }}>
							Pas le temps, ni le goût
						</div>
						<div className={style.titles} style={{ color: "#464545" }}>
							<span>C’est Tiggid</span>
							<span style={{ color: "#28cc8b" }}>oo</span>
						</div>

						<Row>
							<Col span={24}>
								{" "}
								<h2 className={style.smalltitle} style={{ color: "#464545" }}>
									Trouvez votre expert en entretien ménager résidentiel,c'est simple!
								</h2>
							</Col>
						</Row>
						<Row style={{ color: "#2880F9" }}>
							<Col span={7}>
								{" "}
								<div className={style.category}>VALIDER VOTRE TARIF</div>
							</Col>
							<Col span={9}>
								{" "}
								<div className={style.category}>CHOISISSEZ VOTRE TODOO</div>
							</Col>
							<Col span={8}>
								{" "}
								<div className={style.category}>RÉSERVEZ EN LIGNE</div>
							</Col>
						</Row>
						<p className={style.content} style={{ color: "#464545" }}>
							Découvrez les Todoo, nos spécialistes du ménage prêts à faire briller votre logis, quand vous le voulez, comme vous le voulez. Chaque expert en entretien ménager est trié
							sur le volet par notre équipe et noté après chaque prestation par des utilisateurs comme vous. Choisissez un ou plusieurs profils préférés et dites adieu aux corvées.
						</p>
						<Row>
							<Col span={20}>
								{" "}
								<h3 className={style.othertitle} style={{ color: "#464545" }}>
									Devenez client VIP : C'est gratuit et sans engagement!
								</h3>
							</Col>
						</Row>
						<div className={style.category} style={{ color: "#2880F9" }}>
							PRÉ-INSCRIPTION : - 20%
						</div>
						<p className={style.content} style={{ color: "#464545" }}>
							Tiggidoo prendra bientôt d'assaut le marché de l'entretien ménager résidentiel dans la grande région de Montréal. Inscrivez-vous dès aujourd’hui pour devenir client VIP et
							 recevoir un rabais de 20% sur votre premier ménage.

						</p>

						<div style={{ paddingTop: "10px", paddingBottom: "50px" }}>
							<Form onSubmit={this.handleSubmit} style={{ marginTop: "0px" }}>

							{this.state.registerUser ? (
								<div className={style.sucess} style={{ backgroundColor: "#FFFFFF", color: "#2880F9" }}>
									<Icon type="check" style={{ color: "#28cc8b", fontSize: "35px", marginLeft: "15px", marginTop: "15px", fontWeight: 700 }} /> MERCI, vos informations sont
									enregistrées
								</div>
							) : (
								<Row>
									<Col span={8}>
										<Form.Item label="Prénom" className="Item">
											{getFieldDecorator("firstName", {
												rules: [{ required: true, message: "Le prénom ne peut pas être vide" }]
											})(<Input className="Inputs" placeholder="Votre prénom"  onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input}/>)}
										</Form.Item>
									</Col>
									
									<Col  span={15} style={{marginLeft: "30px"}}>
										<Form.Item label="Courriel" className="Item">
											{getFieldDecorator("email", {
												rules: [{ required: true, message: "Le courriel ne peut pas être vide" }, {
													type: 'email', message: "Le  E-mail n'est pas valide"}, {
														validator: this.handleValidator
													}]
											})(<Input className="Inputs" placeholder="Votre courriel" onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input} />)}
											<span className={style.Formspan} >{isVisible && message_email}</span>
										</Form.Item>
									</Col>
								</Row>
								
							)}

								<div style={{ textAlign: "center", paddingBottom: "30px" }}>
									<Button style={{ width: "100%", height: "60px", fontSize: "23px", marginTop: "20px", fontWeight: "600" }} type="primary" htmlType="submit" onClick={this.handleClick.bind(this)}>
									   PRE-INSCRIPTION
									</Button>
								</div>
							</Form>
						</div>
					</Col>
					<Col span={10}>
						<img src={menage_domicile_montreal} alt="Trouver une femme de ménage à Montréal" width="100%" className={style.Groupe} />
					</Col>
				</Row>
			</div>
		);
	}
}
