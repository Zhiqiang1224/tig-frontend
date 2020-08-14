import { Form } from "antd";
import logo from "../../../assets/logo.svg";
import style from "../index.less";
@Form.create()
export default class Header extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div>
				<img src={logo} alt="logo" width="196px" className={style.logo} />
				<span className={style.herderspan}>DEVENIR PRO</span>
			</div>
		);
	}
}
