import "./App.css";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import axios from "axios";

function App() {
	const [data, setData] = useState({});
	const [pokeSelected, setPokeSelected] = useState({});

	const fetchData = async () => {
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
		setData(res.data);
	};

	const fetchPoke = async (url) => {
		const res = await axios.get(url);
		setPokeSelected(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Container>
			<Tab.Container id="list-group-tabs-example" defaultActiveKey="0">
				<Row>
					<Col sm={4}>
						<ListGroup>
							{data.results?.map((poke, idx) => {
								return (
									<ListGroup.Item
										action
										key={idx}
										onClick={(e) => {
											e.preventDefault();
											fetchPoke(poke.url);
										}}
										href={idx}
									>
										{poke.name}
									</ListGroup.Item>
								);
							})}
						</ListGroup>
					</Col>
					<Col sm={8}>
						<Tab.Content>
							{data.results?.map((poke, idx) => {
								return (
									<Tab.Pane key={idx} eventKey={idx}>
										<img src={pokeSelected.sprites?.front_default} alt="" />
										<h1>{pokeSelected.name}</h1>
									</Tab.Pane>
								);
							})}
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	);
}

export default App;
