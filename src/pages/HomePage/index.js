import { Card, Form, Icon, Tabs, Row, Col, Button, Timeline, Select, Tag, Input, Affix } from "antd";
import Header from "./components/Header";
import ContentTop from "./components/ContentTop";
import Content from "./components/Content";
import Footer from "./components/Footer";
@Form.create()
export default class index extends React.Component {
	componentDidMount = async () => {};
	render() {
		return (
			<div style={{ backgroundColor: "#E8E8E8" }}>
				<Affix offsetTop={0} style={{ backgroundColor: "#E8E8E8" }}>
					<Header />
				</Affix>

				<ContentTop />
				<Content />
				<Footer />
			</div>
		);
	}
}
