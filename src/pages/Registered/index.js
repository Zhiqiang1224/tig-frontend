import { Card, Form, Icon, Tabs, Row, Col, Button, Timeline, Select, Tag, Input, Affix } from "antd";
import Header from "./components/Header";
import ContentTop from "./components/ContentTop";
import Footer from "./components/Footer";
@Form.create()
export default class Registered extends React.Component {
	componentDidMount = async () => {
		// document.title = "Tiggidoo : la plateforme des "
	};
	render() {
		return (
			<div>
				<Affix offsetTop={0}>
					<Header style={{ backgroundColor: "#FFFFFF" }} />
				</Affix>

				<div style={{ backgroundColor: "#F6F6F6" }}>
					<ContentTop />
				</div>

				<Footer />
			</div>
		);
	}
}
