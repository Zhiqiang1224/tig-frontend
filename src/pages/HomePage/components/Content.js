import { Button, Col, Form, Input, Row, Icon } from "antd";
import emploi_entretien_menager_montreal from "../../../assets/emploi_entretien_menager_montreal.svg";
import style from "../index.less";
import { Link } from "react-router-dom";
let storage = window.localStorage;
import LanguageText from "../../../assets/Langue/Language";
@Form.create()
export default class Content extends React.Component {
	state = {
		language: LanguageText.French
	};

	componentDidMount = async () => {
		storage.languageType == "En" ? this.setState({ language: LanguageText.En }) : this.setState({ language: LanguageText.French });
	};
	render() {
		return (
			<div>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row>
						<Col span={8} offset={1}>
							<img src={emploi_entretien_menager_montreal} alt={this.state.language.Text_61} width="100%" style={{ paddingTop: "300px", paddingBottom: "90px" }} />
						</Col>
						<Col span={11} offset={3} >
							<div className={style.Contenttitle}>
								<h2>
								{this.state.language.Text_17}
								</h2>
							 </div>
                         </Col>
						<Col span={11} offset={3}>
							
							<h3 >
							{this.state.language.Text_18}
							</h3>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_19}
							</p>
							<h3 >
							{this.state.language.Text_20}
							</h3>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_21}
							</p>
							<h3 >
							{this.state.language.Text_22}
							</h3>
							<p className={style.Showcontent} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_23}
							</p>
							<Row>
								<Col span={20} offset={2}>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF",  fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										{this.state.language.Text_24}
									</p>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF", fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										{this.state.language.Text_25}
									</p>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF", fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										{this.state.language.Text_26}
									</p>
									<p className={style.ShowcontentList} style={{ color: "#FFFFFF", fontSize: "21px" }}>
										<Icon type="check" style={{ marginRight: "15px" }} />
										{this.state.language.Text_27}
									</p>
								</Col>
							</Row>

							<div style={{ textAlign: "center", paddingBottom: "40px" }}>
								<Link to="/Registered">
									<Button style={{ width: "320px", height: "60px", fontSize: "23px", marginTop: "50px", fontWeight: "600" }} type="primary">
									{this.state.language.Text_28}
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
