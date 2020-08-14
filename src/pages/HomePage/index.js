import { Card, Form, Icon, Tabs, Row, Col, Button, Timeline, Select, Tag, Input } from "antd";
import Header from "./components/Header";
import ContentTop from "./components/ContentTop";
import Content from "./components/Content";
import Footer from "./components/Footer";
@Form.create()
export default class index extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: "#E8E8E8" }}>
				<Header />
				<ContentTop />
				<Content />
				<Footer />
			</div>
		);
	}
}
