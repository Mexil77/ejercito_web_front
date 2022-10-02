import React from "react";
import { useParams, Link } from "react-router-dom";
import PokeCard from "./PokeCard";

export default function PokeDescript(props) {
	const params = useParams();
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
	return (
		<div>
			<Link to="/">Go home</Link>
			<PokeCard
				pokemon={{
					name: params.name,
					url: `https://pokeapi.co/api/v2/pokemon/${params.name}`,
				}}
				types={types}
			/>
		</div>
	);
}
