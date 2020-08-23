import { Form } from "antd";
import logo from "../../../assets/logo.svg";
import style from "../index.less";
import Link from "umi/link";
@Form.create()
export default class Header extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div>
				<img src={logo} alt="logo" width="196px" className={style.logo} />

				<Link  to="/Registered">
					<span className={style.herderspan}>DEVENIR PRO</span>
				</Link>
			</div>
		);
	}
}
