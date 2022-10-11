import "./App.css";
import React, { useEffect, useState } from "react";
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

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App" style={{ display: "flex" }}>
			<div>
				{data.results?.map((poke, index) => {
					return (
						<h1 key={index} onClick={() => fetchPoke(poke.url)}>
							{poke.name}
						</h1>
					);
				})}
			</div>
			<div
				style={{
					width: "25%",
					height: "30rem",
					color: "#fff",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: pokeSelected.types
						? pokeSelected.types.length === 2
							? `linear-gradient(90deg, ${
									types[pokeSelected.types[0]?.type.name]
							  } 0%, ${types[pokeSelected.types[1]?.type.name]} 50%)`
							: types[pokeSelected.types[0]?.type.name]
						: "",
					// backgroundColor: types[pokeSelected.types[0]?.type.name],
				}}
			>
				{console.log(types[pokeSelected.types[0]?.type.name])}
				<img src={pokeSelected.sprites?.front_default} alt=""></img>
				<h1>{pokeSelected.name ? pokeSelected.name : "sin elegir"}</h1>
			</div>
		</div>
	);
}

export default App;
