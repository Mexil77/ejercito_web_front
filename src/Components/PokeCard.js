import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap";

export default function PokeCard(props) {
	const [data, setData] = useState({
		name: "",
		sprites: { front_default: "" },
		stats: [
			{ stat: "" },
			{ stat: "" },
			{ stat: "" },
			{ stat: "" },
			{ stat: "" },
			{ stat: "" },
		],
	});

	const fetchData = async () => {
		const res = await axios.get(props.url);
		setData(res.data);
	};

	useEffect(() => {
		fetchData();
	});

	return (
		<div>
			<Card style={{ width: "60%", margin: "auto" }}>
				<Card.Img
					variant="top"
					src={data.sprites.front_default}
					style={{ margin: "auto", width: "14rem" }}
				/>
				<Card.Body>
					<Card.Title>{data.name}</Card.Title>
					<Card.Text>Stats:</Card.Text>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Ps</th>
								<th>Attac</th>
								<th>Defense</th>
								<th>SP Attac</th>
								<th>Sp defense</th>
								<th>Speed</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{data.stats[0].base_stat}</td>
								<td>{data.stats[1].base_stat}</td>
								<td>{data.stats[2].base_stat}</td>
								<td>{data.stats[3].base_stat}</td>
								<td>{data.stats[4].base_stat}</td>
								<td>{data.stats[5].base_stat}</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</div>
	);
}
