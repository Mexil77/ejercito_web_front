import "../Styles/Pokecard.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function PokeCard(props) {
	const [pokeSelected, setPokeSelected] = useState({});
	const [style, setStyle] = useState({});

	useEffect(() => {
		const fetchPoke = async () => {
			const res = await axios.get(props.pokemon.url);
			if (res.data.types.length < 2)
				setStyle({
					background: props.types[res.data.types[0].type.name],
				});
			else
				setStyle({
					background: `linear-gradient(90deg, ${
						props.types[res.data.types[0].type.name]
					}, ${props.types[res.data.types[1].type.name]})`,
				});
			setPokeSelected(res.data);
		};
		fetchPoke();
	}, [props]);

	return (
		<Link to={`/pokedex/${pokeSelected.name}`}>
			<div className="pokeCard" style={style}>
				<img src={pokeSelected.sprites?.front_default} alt="" />
				<h1>{pokeSelected.name}</h1>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Stat</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						{pokeSelected.stats?.map((stat, idx) => {
							return (
								<tr key={idx}>
									<td>{stat.stat.name}</td>
									<td>{stat.base_stat}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</Link>
	);
}
