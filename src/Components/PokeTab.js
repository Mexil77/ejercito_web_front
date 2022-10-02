import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import axios from "axios";

import PokeCard from "./PokeCard";

export default function PokeTab() {
	const [data, setData] = useState({});
	const types = {
		normal: "#A8A77A",
		fighting: "#C22E28",
		flying: "#A98FF3",
		poison: "#A33EA1",
		ground: "#E2BF65",
		rock: "#B6A136",
		bug: "#A6B91A",
		ghost: "#735797",
		steel: "#B7B7CE",
		fire: "#EE8130",
		water: "#6390F0",
		grass: "#7AC74C",
		electric: "#F7D02C",
		psychic: "#F95587",
		ice: "#96D9D6",
		dragon: "#6F35FC",
		dark: "#705746",
		fairy: "#D685AD",
		undefined: "#000000",
	};

	const fetchData = async () => {
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
		setData(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Tab.Container id="list-group-tabs-example">
			<Row>
				<Col sm={4}>
					<ListGroup style={{ height: "100vh", overflowY: "scroll" }}>
						{data.results?.map((poke, idx) => {
							return (
								<ListGroup.Item
									action
									key={idx}
									onClick={(e) => {
										e.preventDefault();
									}}
									href={idx + 1}
								>
									{poke.name}
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Col>
				<Col
					sm={8}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Tab.Content>
						{data.results?.map((poke, idx) => {
							return (
								<Tab.Pane key={idx} eventKey={idx + 1}>
									<PokeCard pokemon={poke} types={types} />
								</Tab.Pane>
							);
						})}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}
