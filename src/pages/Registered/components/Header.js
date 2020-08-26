import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import style from "../index.less";
@Form.create()
export default class Header extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div style={{ backgroundColor: "#FFFFFF" }}>
				<img src={logo_tiggidoo} alt="Tiggidoo : l'entretien ménager au Quebec " width="196px" className={style.logo} />
			</div>
		);
	}
}
