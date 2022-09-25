import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeTab from "./Components/PokeTab";

function App() {
	const [data, setData] = useState({ results: [] });

	const fetchData = async () => {
		const res = await axios.get(
			"https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
		);
		setData(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<PokeTab data={data} />
		</div>
	);
}

export default App;
