import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./Components/Home";
import PokeTab from "./Components/PokeTab";
import PokeDescript from "./Components/PokeDescript";

function App() {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/pokedex" element={<PokeTab />} />
					<Route path="/pokedex/:name" element={<PokeDescript />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
