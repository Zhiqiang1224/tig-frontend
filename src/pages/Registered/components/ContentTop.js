import { Col, Form, Icon, Input, Row, Button } from "antd";
import menage_domicile_montreal from "../../../assets/menage_domicile_montreal.svg";
import * as service from "../../../service/api";
import style from "../index.less";
import Link from "umi/link";
import LanguageText from "../../../assets/Langue/Language";
import MaskedInput from "antd-mask-input";

let storage = window.localStorage;
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

const validatePhone = value => {
	if (!value) {
	  return "Required";
	} else if (
	  !/^(\+7)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/i.test(
		value
	  )
	) {
	  return "Enter 10 digits";
	}
	return undefined;
  };

@Form.create()
export default class ContentTop extends React.Component {
	state = {
		lastName: '',
		firstName: '',
		registerPro: false,
		message_email: "",
		message_tel: "",
		isVisible : true,
		language: LanguageText.French
	};

	

	handleChange (e) {
		this.setState({isVisible: false});
		this.setState({message_email: ""});
		this.setState({message_tel: ""});
	}

	handleClick () {
		this.setState({isVisible: true});
	}

	componentDidMount = async () => {
		storage.languageType == "En" ? this.setState({ language: LanguageText.En }) : this.setState({ language: LanguageText.French });
	};

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
					lag: storage.languageType
				};
				console.log(p);
				let data = await service.registerPro(p);
				console.log(data);
				if (data.code == 200) {
					this.setState({
						lastName: values.lastName,
						registerPro: true,
						message: "ACCUEIL"
					});
				}
				if (data.code !== 200 ) {
					if(data.data.error == "The email is already exist"){
                        this.setState({
							registerPro: false,
							message_email:	this.state.language.Text_51,
							message_tel: ""
						});
					}

					if(data.data.error == "The telephone is already exist"){
                        this.setState({
							registerPro: false,
							message_tel: 	this.state.language.Text_54,
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
		const { firstName } = this.state;
	
		return (
			<div>
				{this.state.registerPro ? (
					<Row>
						<h1 className={style.Othertitle} style={{ color: "#2880FB" }}>
						{this.state.language.Text_46} 
						</h1>
						<h1 className={style.Othersmalltitle} style={{ color: "#4D4D4D" }}>
						{this.state.language.Text_47} <br />
						{this.state.language.Text_48}
						</h1>
						<div style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
							{" "}
							<Link to="/">
								<span className={style.buttonaccueil}>{this.state.language.Text_49}</span>
							</Link>
						</div>
					</Row>
				) : (
					<Row>
						<Col span={11} offset={1}>
							<Row>
								<h1 className={style.title} style={{ color: "#464545" }}>
								{this.state.language.Text_34}
								</h1>
							</Row>
							<Row>
								<Col span={30}>
									{" "}
									<Row>
										<Col span={30}>
										<h3 className={style.smalltitle} style={{ color: "#2880F9", fontWeight:"bold" }}>
										{this.state.language.Text_35}
										</h3>
										</Col>
									</Row>
									
								</Col>
							</Row>
							<Row style={{marginTop:"20px"}}>
								<Col>
									<p style={{ color: "#4D4D4D", fontSize: "23px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										{this.state.language.Text_36}
									</p>
									<p style={{ color: "#4D4D4D", fontSize: "23px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										{this.state.language.Text_37}
									</p>
									<p style={{ color: "#4D4D4D", fontSize: "23px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										{this.state.language.Text_38}
									</p>
									<p style={{ color: "#4D4D4D", fontSize: "23px", fontFamily: "Avenir", fontWeight: "bold" }}>
										<Icon type="check" style={{ marginRight: "15px", color: "#2880F9" }} />
										{this.state.language.Text_39}
									</p>
								</Col>
							</Row>
							<Row>
								<Col span={23}>
									<p className={style.content} style={{ color: "#464545" }}>
									{this.state.language.Text_40}
									</p>
						    	</Col>
							</Row>
						</Col>
						<Col span={9} offset={1}>
							<Form onSubmit={this.handleSubmit} style={{ marginTop: "100px" }}>
							    <Form.Item label={this.state.language.Text_41} className="Item">
									{getFieldDecorator("lastName", {
										rules: [{ required: true, message: this.state.language.Text_31 }]
									})(
										<Input className="Inputs" 
											placeholder={this.state.language.Text_42} 
											id="error" 
											onChange={(e) => {this.handleChange(e)}} 
											ref={(input)=> this.myinput = input}
										/>
									)}
								</Form.Item>
								<Form.Item label={this.state.language.Text_13} className="Item">
									{getFieldDecorator("firstName", {
										rules: [{ required: true, message: this.state.language.Text_52 }]
									})(
										<Input className="Inputs" 
											placeholder={this.state.language.Text_15} 
											onChange={(e) => {this.handleChange(e)}} 
											ref={(input)=> this.myinput = input}
										/>
									)}
								</Form.Item>
								<Form.Item label={this.state.language.Text_14} className="Item">
									{getFieldDecorator("email", {
										rules: [{ required: true, message: this.state.language.Text_32 }, {
											type: 'email', message: this.state.language.Text_50}, {
												validator: this.handleValidator
											}]
									})(
										<Input className="Inputs" 
											placeholder={this.state.language.Text_16} 
											onChange={(e) => {this.handleChange(e)}} 
											ref={(input)=> this.myinput = input} 
										/>
									)}
									<span className={style.Formspan} >{message_email}</span>
								</Form.Item>
								<Form.Item label={this.state.language.Text_43} className="Item">
									{getFieldDecorator("telephone", {
										rules: [{ required: true, message: this.state.language.Text_53 }]
									})(
										<MaskedInput className="Inputs" 
											placeholder={this.state.language.Text_44} 
											onChange={(e) => {this.handleChange(e)}} 
											ref={(input)=> this.myinput = input}

											formatCharacters={{
												'W': {
												  validate(char) { return /\w/.test(char ) },
												  transform(char) { return char.toUpperCase() }
												}
											  }}
											mask="(111)-111-1111"
										/>
									)}
									<span className={style.Formspan} >{message_tel}</span>
								</Form.Item>
								<div style={{ textAlign: "center", paddingBottom: "40px" }}>
									<Button style={{ width: "100%", height: "60px", fontSize: "23px", marginTop: "40px", fontWeight: "600" }} type="primary" htmlType="submit" onClick={this.handleClick.bind(this)}>
									{this.state.language.Text_45}
									</Button>
								</div>
							</Form>
						</Col>
					</Row>
				)}
				
			</div>
		);
	}
}
