import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Mycard(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.srcImg} />
			<Card.Title>{props.titleText}</Card.Title>
			<Card.Text>
				Con tu donativo un gato podra salvarse de vivir en la calle.
			</Card.Text>
			<Button onClick={props.donateChange} variant={props.buttonState}>
				{props.buttonText}
			</Button>
		</Card>
	);
}
