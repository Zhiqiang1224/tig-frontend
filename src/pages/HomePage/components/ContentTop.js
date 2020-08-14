import { Col, Form, Icon, Input, Row } from "antd";
import Groupe from "../../../assets/Groupe.svg";
import * as service from "../../../service/api";
import style from "../index.less";
const { Search } = Input;
@Form.create()
export default class ContentTop extends React.Component {
	state = {
		email: "Unsent"
	};
	componentDidMount = async () => {};
	sendEmail = async e => {
		console.log(e);
		let data = await service.sendemail();
		console.log(data);
	};

	render() {
		return (
			<div>
				<Row>
					<Col span={11} offset={1}>
						<h1 className={style.title} style={{ color: "#707070" }}>
							Service de Ménage résidentiel
						</h1>
						<Row>
							<Col span={20}>
								{" "}
								<h2 className={style.smalltitle} style={{ color: "#707070" }}>
									Nouvelle offre de service de ménage résidentiel au Quebec !
								</h2>
							</Col>
						</Row>
						<Row style={{ color: "#2880F9" }}>
							<Col span={8}>
								{" "}
								<div className={style.category}>100% EXPERTS</div>
							</Col>
							<Col span={8}>
								{" "}
								<div className={style.category}>SANS ENGAGEMENT</div>
							</Col>
							<Col span={8}>
								{" "}
								<div className={style.category}>ASSISTANCE 7j/7</div>
							</Col>
						</Row>
						<q className={style.content} style={{ color: "#707070" }}>
							Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
							Lorem Ipsum Lorem Ipsum Lorem
						</q>
						<Row>
							<Col span={20}>
								{" "}
								<h3 className={style.othertitle} style={{ color: "#707070" }}>
									Restez informé du lancement officiel de nos services
								</h3>
							</Col>
						</Row>
						<p className={style.content} style={{ color: "#707070" }}>
							Saisissez votre courriel pour être informé en avant première du lancement de notre service d’offre de ménage résidentiels adapté au besoin de votre logement et de vos
							disponibilités.
						</p>
						<div className={style.category} style={{ color: "#2880F9" }}>
							PRÉ-INSCRIPTION : - 20%
						</div>
						<div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
							{this.state.email == "HasSent" ? (
								<div className={style.sucess} style={{ backgroundColor: "#FFFFFF", color: "#2880F9" }}>
									<Icon type="check" style={{ color: "#28cc8b", fontSize: "60px", marginLeft: "30px" }} /> MERCI, vos information sont enregistrées
								</div>
							) : (
								<Search
									className="Search"
									prefix={<Icon type="mail" style={{ color: "#28cc8b", fontSize: "40px" }} />}
									placeholder="Saisissez votre adresse"
									enterButton="GOo"
									size="large"
									onSearch={this.sendEmail}
								/>
							)}
						</div>
					</Col>
					<Col span={10}>
						<img src={Groupe} alt="Groupe" width="100%" className={style.Groupe} />
					</Col>
				</Row>
			</div>
		);
	}
}
