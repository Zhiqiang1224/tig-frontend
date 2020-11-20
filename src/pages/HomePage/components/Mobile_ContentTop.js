import { Col, Form, Icon, Input, Row, Button } from "antd";
import menage_domicile_montreal from "../../../assets/menage_domicile_montreal.svg";
import * as service from "../../../service/api";
import style from "../index.less";
import LanguageText from "../../../assets/Langue/Language";
let storage = window.localStorage;
@Form.create()
export default class ContentTop extends React.Component {
	state = {
		firstName: "",
		registerUser: false,
		message_email: "",
		isVisible: true,
		language: LanguageText.French
	};

	handleChange(e) {
		this.setState({ isVisible: false });
	}

	handleClick() {
		this.setState({ isVisible: true });
	}

	componentDidMount = async () => {
		storage.languageType == "En" ? this.setState({ language: LanguageText.En }) : this.setState({ language: LanguageText.French });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll(async (err, values) => {
			if (!err) {
				let p = {
					firstName: values.firstName,
					email: values.email
				};
				console.log("Received values of form: ", p);
				let data = await service.registerUser(p);
				console.log(data);
				if (data.code == 200) {
					this.setState({
						firstName: values.firstName,
						registerUser: true,
						message: "ACCUEIL"
					});
				}
				if (data.code !== 200) {
					if (data.data.error == "The email is already exist") {
						this.setState({
							registerUser: false,
							message_email: this.state.language.Text_51
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
						<h1 className={style.Mobile_title}>
							{this.state.language.Text_2}
							<span className={style.Mobile_title_big}> {this.state.language.Text_3}</span>
							<span className={style.Mobile_title_big} style={{ color: "#28cc8b" }}>
								
							</span>
						</h1>
					</Col>
				</Row>
				<Row>
					<Col span={20} offset={2}>
						<img src={menage_domicile_montreal} alt={this.state.language.Text_60} width="100%" className={style.Mobile_Groupe} />
					</Col>
				</Row>
				<Row>
					<Col span={22} offset={1}>
						<h2 className={style.Mobile_smalltitle} style={{ color: "#464545" }}>
							{this.state.language.Text_4}
						</h2>
					</Col>
				</Row>
				<Row style={{ color: "#2880F9", marginTop: "15px" }}>
					<Col span={22} offset={1}>
						{" "}
						<div className={style.Mobile_category}> {this.state.language.Text_5}</div>
					</Col>
					<Col span={22} offset={1}>
						{" "}
						<div className={style.Mobile_category}> {this.state.language.Text_6}</div>
					</Col>
					<Col span={22} offset={1}>
						{" "}
						<div className={style.Mobile_category}> {this.state.language.Text_7}</div>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<p className={style.Mobile_content} style={{ color: "#4D4D4D" }}>
							{this.state.language.Text_8}
						</p>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<h3 className={style.Mobile_othertitle} style={{ color: "#464545" }}>
							{this.state.language.Text_12}
						</h3>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<div className={style.Mobile_category} style={{ color: "#2880F9" }}>
							{this.state.language.Text_10}
						</div>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<p className={style.Mobile_content} style={{ color: "#4D4D4D" }}>
							{this.state.language.Text_11}
						</p>
					</Col>
				</Row>

				<Row>
					<Col span={21} offset={1}>
						<Form onSubmit={this.handleSubmit} style={{ marginTop: "30px" }}>
							{this.state.registerUser ? (
								<div className={style.Mobile_sucess} style={{ backgroundColor: "#FFFFFF", color: "#2880F9" }}>
									<Icon type="check" style={{ color: "#28cc8b", fontSize: "35px", marginLeft: "15px", marginTop: "15px", fontWeight: 700, verticalAlign: "middle" }} />
									<p>{this.state.language.Text_33}</p>
								</div>
							) : (
								<Row>
									<Form.Item label={this.state.language.Text_13} className="Item">
										{getFieldDecorator("firstName", {
											rules: [{ required: true, message: this.state.language.Text_52 }]
										})(
											<Input
												className="Inputs"
												placeholder={this.state.language.Text_15}
												id="error"
												onChange={e => {
													this.handleChange(e);
												}}
												ref={input => (this.myinput = input)}
											/>
										)}
									</Form.Item>

									<Form.Item label={this.state.language.Text_14} className="Item">
										{getFieldDecorator("email", {
											rules: [
												{ required: true, message: this.state.language.Text_32 },
												{
													type: "email",
													message: this.state.language.Text_50
												},
												{
													validator: this.handleValidator
												}
											]
										})(
											<Input
												className="Inputs"
												placeholder={this.state.language.Text_16}
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
									{this.state.language.Text_55}
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
