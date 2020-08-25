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
		firstName: '',
		register: false,
		message: ""
	};
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
				let data = await service.register(p);
				console.log(data);
				if (data.code == 200) {
					this.setState({
						firstName: values.firstName,
						register: true,
						message: "ACCUEIL"
					});
				}
				if (data.code == 404) {
					this.setState({
						register: true,
						message: data.data.error
					});
				}
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				{this.state.register ? (
					<Row>
						<h1 className={style.Othertitle} style={{ color: "#2880FB" }}>
						     Merci, {this.state.firstName}
						</h1>
						<h1 className={style.Othersmalltitle} style={{ color: "#4D4D4D" }}>
							Un de nos experts prendra contact avec 
							vous dès que le recrutement sera lancé
						</h1>
						<div style={{ textAlign: "center", marginTop: "50px" }}>
							{" "}
							<Link to="/">
								<span className={style.herderspan}>ACCUEIL</span>
							</Link>
						</div>
					</Row>
				) : (
					<Row>
						<Col span={11} offset={1}>
							<h1 className={style.title} style={{ color: "#464545" }}>
								Vous êtes travailleurs autonome dans le service ménagé résidentiel ?
							</h1>
							<Row>
								<Col span={30}>
									{" "}
									<Row>
									<Col span={30}>
									<h3 className={style.smalltitle} style={{ color: "#2880F9", fontWeight:"bold" }}>
										Gagnez des revenus additionnels rejoignez Tiggidoo
									</h3>
									</Col>
									</Row>
									<p className={style.content} style={{ color: "#464545" }}>
										Laissez nous vos coordonnées, dès que le recrutement sera opérationnel, un de nos experts vous préviendra en avant première
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p style={{ color: "#4D4D4D", fontSize: "25px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										Inscription gratuite sans engagement
									</p>
									<p style={{ color: "#4D4D4D", fontSize: "25px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										Rémunération minimum réglementée
									</p>
									<p style={{ color: "#4D4D4D", fontSize: "25px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										Paiement sécurisé et garanti
									</p>
									<p style={{ color: "#4D4D4D", fontSize: "25px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										Grande visibilité de vos services
									</p>
								</Col>
							</Row>
						</Col>
						<Col span={9} offset={1}>
							<Form onSubmit={this.handleSubmit} style={{ marginTop: "100px" }}>
								<Form.Item label="" className="Item">
									{getFieldDecorator("firstName", {
										rules: [{ required: true, message: "Le nom ne peut pas être vide" }]
									})(<Input className="Inputs" placeholder="NOM" />)}
								</Form.Item>
								<Form.Item label="" className="Item">
									{getFieldDecorator("lastName", {
										rules: [{ required: true, message: "Le prénom ne peut pas être vide" }]
									})(<Input className="Inputs" placeholder="Prénom" />)}
								</Form.Item>
								<Form.Item label="" className="Item">
									{getFieldDecorator("email", {
										rules: [{ required: true, message: "Le courriel n’est pas bien renseigné" }]
									})(<Input className="Inputs" placeholder="Courriel" />)}
								</Form.Item>
								<Form.Item label="" className="Item">
									{getFieldDecorator("telephone", {
										rules: [{ required: true, message: "Le téléphone  ne peut pas être vide" }]
									})(<Input className="Inputs" placeholder="Téléphone" />)}
								</Form.Item>
								<div style={{ textAlign: "center", paddingBottom: "40px" }}>
									<Button style={{ width: "100%", height: "60px", fontSize: "23px", marginTop: "50px", fontWeight: "600" }} type="primary" htmlType="submit">
										DEVENEZ UN TODOO
									</Button>
								</div>
							</Form>
						</Col>
					</Row>
				)}
				}
			</div>
		);
	}
}
