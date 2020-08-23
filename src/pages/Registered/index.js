import { Card, Form, Icon, Tabs, Row, Col, Button, Timeline, Select, Tag, Input } from "antd";
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
				<Header style={{ backgroundColor: "#FFFFFF" }} />
				<div style={{ backgroundColor: "#F6F6F6" }}>
					<ContentTop />
				</div>

				<Footer />
			</div>
		);
	}
}
