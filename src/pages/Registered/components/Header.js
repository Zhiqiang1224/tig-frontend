import { Form } from "antd";
import logo_tiggidoo from "../../../assets/logo_tiggidoo.svg";
import style from "../index.less";
@Form.create()
export default class Header extends React.Component {
	state = {};
	componentDidMount = async () => {};

	render() {
		return (
			<div>
				<img src={logo_tiggidoo} alt="logo_tiggidoo" width="196px" className={style.logo} />
		
			</div>
		);
	}
}
