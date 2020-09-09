import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import style from "../index.less";
import Link from "umi/link";
@Form.create()
export default class Header extends React.Component {
	state = {};
	componentDidMount = async () => {
		window.scrollTo(0, 0)
	};

	render() {
		return (
			<div style={{ backgroundColor: "#FFFFFF" }}>
				<Link to="/">
				     <img src={logo_tiggidoo} alt="Tiggidoo : l'entretien ménager au Quebec " width="196px" className={style.logo} />
				</Link>
			</div>
		);
	}
}
