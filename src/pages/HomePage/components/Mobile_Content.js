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
			<div style={{ marginTop: "40px" }}>
				<div style={{ backgroundColor: "#2880F9" }}>
					<Row>
						<Col span={21} offset={1}>
							<h2 className={style.Mobile_Showtitle} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_17}
							</h2>
						</Col>
					</Row>
					<Row>
						<Col span={16} offset={4}>
							<img src={emploi_entretien_menager_montreal} alt="Emploi entretien ménager à Montréal" width="100%" style={{ paddingTop: "80px", paddingBottom: "80px" }} />
						</Col>
					</Row>

					<Row>
						<Col span={20} offset={1}>
							<h3 className={style.Mobile_Showsmalltitle} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_18}
							</h3>
							<p className={style.Mobile_Showcontent} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_19}
							</p>
							<h3 className={style.Mobile_Showsmalltitle} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_20}
							</h3>
							<p className={style.Mobile_Showcontent} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_21}
							</p>
							<h3 className={style.Mobile_Showsmalltitle} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_22}
							</h3>
							<p className={style.Mobile_Showcontent} style={{ color: "#FFFFFF" }}>
							{this.state.language.Text_23}
							</p>
						</Col>
					</Row>
					<Row>
						<Col span={22} offset={1}>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								{this.state.language.Text_24}
							</p>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								{this.state.language.Text_25}
							</p>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
								<Icon type="check" style={{ marginRight: "15px" }} />
								{this.state.language.Text_26}
							</p>
							<p className={style.Mobile_ShowcontentList} style={{ color: "#FFFFFF" }}>
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
				</div>
			</div>
		);
	}
}
