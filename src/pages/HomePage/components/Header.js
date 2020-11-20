import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import fr from "../../../assets/fr.png";
import en from "../../../assets/en.png";
import style from "../index.less";
import Link from "umi/link";
import LanguageText from "../../../assets/Langue/Language";
let storage = window.localStorage;
@Form.create()
export default class Header extends React.Component {
	state = {
		languageType: "fr",
		language: LanguageText.French
	};
	componentDidMount = async () => {
		console.log("componentDidMount: ", storage.languageType);
		storage.languageType == "fr" ? this.setState({ language: LanguageText.French }) : this.setState({ language: LanguageText.En });
		window.scrollTo(0, 0);
	};

	languageChange = () => {
		console.log("languageChange: ", storage.languageType);
		storage.languageType == "fr" ? (this.setState({ languageType: "En" }), (storage["languageType"] = "En")) : (this.setState({ languageType: "fr" }), (storage["languageType"] = "fr"));
		location.reload();
	};

	render() {
		return (
			<div style={{ backgroundColor: "#FFFFFF" }}>
				<Link to="/">
					<img src={logo_tiggidoo} alt={this.state.language.Text_59} width="196px" className={style.logo} />
				</Link>
				<span style={{ float: "right", marginRight: "40px", marginTop: "15px" }}>
					{storage.languageType == "fr" || storage.languageType == undefined ? (
						<img src={en} alt="fr" width="30px" className={style.logo} onClick={this.languageChange} />
					) : (
						<img src={fr} alt="en" width="30px" className={style.logo} onClick={this.languageChange} />
					)}
				</span>
				<Link to="/Registered">
					<span className={style.herderspan}>{this.state.language.Text_1}</span>
				</Link>
			</div>
		);
	}
}
