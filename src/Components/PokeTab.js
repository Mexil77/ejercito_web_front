import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import PokeCard from "./PokeCard";

export default function PokeTab(props) {
	return (
		<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
			<Row>
				<Col sm={3}>
					<ListGroup style={{ height: "100vh", overflowY: "scroll" }}>
						{props.data.results.map((poke) => {
							return (
								<ListGroup.Item
									key={poke.name}
									onClick={(e) => {
										e.preventDefault();
									}}
									action
									href={poke.name}
								>
									{poke.name}
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Col>
				<Col sm={8}>
					<Tab.Content>
						{props.data.results.map((poke) => {
							return (
								<Tab.Pane key={poke.name} eventKey={poke.name}>
									<PokeCard name={poke.name} url={poke.url} />
								</Tab.Pane>
							);
						})}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}
