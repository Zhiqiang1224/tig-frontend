import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import style from "../index.less";
import Link from "umi/link";
@Form.create()
export default class Header extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div>
				<img src={logo_tiggidoo} alt="logo_tiggidoo" width="196px" className={style.logo} />

				<Link  to="/Registered">
					<span className={style.herderspan}>DEVENIR PRO</span>
				</Link>
			</div>
		);
	}
}
