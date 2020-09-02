import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import style from "../index.less";
import Link from "umi/link";
@Form.create()
export default class Mobile_Header extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 4px 1px #c7c7c7" }}>
				<Link to="/">
					<img src={logo_tiggidoo} alt=" Tiggidoo : l'entretien ménager au Quebec" width="116px" className={style.Mobile_logo} />
				</Link>
				<Link to="/Registered">
					<span className={style.Mobile_herderspan}>DEVENIR PRO</span>
				</Link>
			</div>
		);
	}
}
