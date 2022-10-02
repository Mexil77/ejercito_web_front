import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Binevenido</h1>
			<Button>
				<Link style={{ color: "#fff" }} to={"/pokedex"}>
					Go to pokedex
				</Link>
			</Button>
		</div>
	);
}
