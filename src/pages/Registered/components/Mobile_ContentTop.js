import { Col, Form, Icon, Input, Row, Button } from "antd";
import menage_domicile_montreal from "../../../assets/menage_domicile_montreal.svg";
import * as service from "../../../service/api";
import style from "../index.less";
import Link from "umi/link";
const { Search } = Input;
const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 }
	}
};
@Form.create()
export default class ContentTop extends React.Component {
	state = {
		lastName: "",
		register: false,
		message_email: "",
		message_tel: "",
		isVisible: true
	};

	handleChange(e) {
		this.setState({ isVisible: false });
	}

	handleClick() {
		this.setState({ isVisible: true });
	}

	componentDidMount = async () => {};
	handleSubmit = async e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll(async (err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				let p = {
					firstName: values.firstName,
					lastName: values.lastName,
					email: values.email,
					telephone: values.telephone,
					role_id: 1
				};
				let data = await service.registerPro(p);
				console.log(data);
				if (data.code == 200) {
					this.setState({
						lastName: values.lastName,
						register: true,
						message: "ACCUEIL"
					});
				}
				if (data.code !== 200) {
					if (data.data.error == "The email is already exist") {
						this.setState({
							register: false,
							message_email: "Ce courriel est déja existant dans la base",
							message_tel: ""
						});
					}

					if (data.data.error == "The telephone is already exist") {
						this.setState({
							register: false,
							message_tel: "Ce téléphone est déja existant dans la base",
							message_email: ""
						});
					}
				}
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { message_email } = this.state;
		const { message_tel } = this.state;
		const { isVisible } = this.state;

		return (
			<div>
				{this.state.register ? (
					<Row>
						<h1 className={style.Mobile_Othertitle} style={{ color: "#2880FB" }}>
							Merci, {this.state.lastName}
						</h1>
						<h1 className={style.Mobile_Othersmalltitle} style={{ color: "#4D4D4D" }}>
							Un de nos experts prendra contact avec <br />
							vous dès que le recrutement sera lancé
						</h1>
						<div style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
							{" "}
							<Link to="/">
								<span className={style.buttonaccueil}>ACCUEIL</span>
							</Link>
						</div>
					</Row>
				) : (
					<div>
						<Row>
							<Col span={22} offset={1}>
								{" "}
								<h1 className={style.Mobile_title} style={{ color: "#464545" }}>
									Vous êtes travailleurs autonome dans le service ménagé résidentiel ?
								</h1>
							</Col>
						</Row>

						<Row>
							<Col span={22} offset={1}>
								{" "}
								<h3 className={style.Mobile_smalltitle} style={{ color: "#2880F9", fontWeight: "bold" }}>
									Gagnez des revenus additionnels, rejoignez Tiggidoo
								</h3>
							</Col>
						</Row>

						<Row>
							<Col span={20} offset={1}>
								<p className={style.Mobile_content} style={{ color: "#464545" }}>
									Laissez nous vos coordonnées, dès que le recrutement sera opérationnel, un de nos experts vous préviendra en avant première
								</p>
							</Col>
						</Row>

						<Row style={{ marginTop: "20px" }}>
							<Col span={22} offset={1}>
								<p style={{ color: "#4D4D4D", fontSize: "15px", fontFamily: "Avenir", fontWeight: "bold" }}>
									<Icon type="check" style={{ marginRight: "15px", color: "#2880F9", fontWeight: 800 }} />
									Horaire de travail flexible
								</p>
								<p style={{ color: "#4D4D4D", fontSize: "15px", fontFamily: "Avenir", fontWeight: "bold" }}>
									<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
									Facturation simple et centralisée
								</p>
								<p style={{ color: "#4D4D4D", fontSize: "15px", fontFamily: "Avenir", fontWeight: "bold" }}>
									<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
									Outils de gestion et calendrier intégrés
								</p>
								<p style={{ color: "#4D4D4D", fontSize: "15px", fontFamily: "Avenir", fontWeight: "bold" }}>
									<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
									Soutien professionnel et formations
								</p>
							</Col>
						</Row>

						<Row>
							<Col span={22} offset={1}>
								<Form onSubmit={this.handleSubmit} style={{ marginTop: "100px" }}>
									<Form.Item label="Prénom" className="Item">
										{getFieldDecorator("lastName", {
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
									<Form.Item label="Nom" className="Item">
										{getFieldDecorator("firstName", {
											rules: [{ required: true, message: "Le nom ne peut pas être vide" }]
										})(
											<Input
												className="Inputs"
												placeholder="Votre Nom"
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
									<Form.Item label="Téléphone" className="Item">
										{getFieldDecorator("telephone", {
											rules: [{ required: true, message: "Le téléphone  ne peut pas être vide" }]
										})(
											<Input
												className="Inputs"
												placeholder="Votre N° de téléphone"
												onChange={e => {
													this.handleChange(e);
												}}
												ref={input => (this.myinput = input)}
											/>
										)}
										<span className={style.Formspan}>{isVisible && message_tel}</span>
									</Form.Item>
									<div style={{ textAlign: "center", paddingBottom: "40px" }}>
										<Button
											style={{ width: "100%", height: "60px", fontSize: "23px", marginTop: "40px", fontWeight: "600" }}
											type="primary"
											htmlType="submit"
											onClick={this.handleClick.bind(this)}
										>
											Je rejoins Tiggidoo
										</Button>
									</div>
								</Form>
							</Col>
						</Row>

						{/* <Row>
							<Col span={11} offset={1}>
					
								<Row>
									<Col span={23}>
										<p className={style.content} style={{ color: "#464545" }}>
											On laisse encore un peu de poussière s'accumuler sous les tapis! En attendant laissez nous vos coordonnées afin de vous contacter en avant première lors du
											lancement
										</p>
									</Col>
								</Row>
							</Col>
							<Col span={9} offset={1}>
								<Form onSubmit={this.handleSubmit} style={{ marginTop: "100px" }}>
									<Form.Item label="Prénom" className="Item">
										{getFieldDecorator("lastName", {
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
									<Form.Item label="Nom" className="Item">
										{getFieldDecorator("firstName", {
											rules: [{ required: true, message: "Le nom ne peut pas être vide" }]
										})(
											<Input
												className="Inputs"
												placeholder="Votre Nom"
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
									<Form.Item label="Téléphone" className="Item">
										{getFieldDecorator("telephone", {
											rules: [{ required: true, message: "Le téléphone  ne peut pas être vide" }]
										})(
											<Input
												className="Inputs"
												placeholder="Votre N° de téléphone"
												onChange={e => {
													this.handleChange(e);
												}}
												ref={input => (this.myinput = input)}
											/>
										)}
										<span className={style.Formspan}>{isVisible && message_tel}</span>
									</Form.Item>
									<div style={{ textAlign: "center", paddingBottom: "40px" }}>
										<Button
											style={{ width: "100%", height: "60px", fontSize: "23px", marginTop: "40px", fontWeight: "600" }}
											type="primary"
											htmlType="submit"
											onClick={this.handleClick.bind(this)}
										>
											Je rejoins Tiggidoo
										</Button>
									</div>
								</Form>
							</Col>
						</Row> */}
					</div>
				)}
			</div>
		);
	}
}
