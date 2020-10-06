import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import style from "../index.less";
import Link from "umi/link";
import fr from "../../../assets/fr.png";
import en from "../../../assets/en.png";
import LanguageText from "../../../assets/Langue/Language";
let storage = window.localStorage;
@Form.create()
export default class Header extends React.Component {
	state = {
		languageType: "fr",
		language: LanguageText.French
	};
	componentDidMount = async () => {
		storage.languageType == "En" ? this.setState({ language: LanguageText.En }) : this.setState({ language: LanguageText.French });
		window.scrollTo(0, 0);
	};

	languageChange = () => {
		storage.languageType == "fr" ? (this.setState({ languageType: "En" }), (storage["languageType"] = "En")) : (this.setState({ languageType: "fr" }), (storage["languageType"] = "fr"));
		location.reload();
	};

	render() {
		return (
			<div style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 4px 1px #c7c7c7" }}>
				<Link to="/">
					<img src={logo_tiggidoo} alt={this.state.language.Text_56} width="116px" className={style.Mobile_logo} />
				</Link>
				<span style={{ float: "right", marginRight: "40px" }}>
					{storage.languageType == "fr" || storage.languageType == undefined ? (
						<img src={en} alt="fr" width="25px" className={style.logo} onClick={this.languageChange} />
					) : (
						<img src={fr} alt="en" width="25px" className={style.logo} onClick={this.languageChange} />
					)}
				</span>
			</div>
		);
	}
}
