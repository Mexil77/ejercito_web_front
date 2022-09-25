import "./App.css";
import React, { useState } from "react";
import MyCard from "./Components/MyCard";

function App() {
	const [srcImg, setSrcImg] = useState(
		"https://images.hola.com/tod/images/025c-0f1faddb456f-9622ccd59293-1000/horizontal-480/gatito3.jpg"
	);
	const [buttonState, setButtonState] = useState("primary");
	const [titleText, setTitleText] = useState("Donar para salvar un gato");
	const [buttonText, setButtonText] = useState("Donar");
	const [donate, setDonate] = useState(false);

	const donateChange = () => {
		if (donate === false) {
			setSrcImg(
				"https://piensoprofine.es/wp-content/uploads/2018/06/gato-feliz.jpg"
			);
			setButtonState("danger");
			setTitleText("Felicidades, estas salvando un gatito.");
			setButtonText("Dejar de donar");
		} else {
			setSrcImg(
				"https://images.hola.com/tod/images/025c-0f1faddb456f-9622ccd59293-1000/horizontal-480/gatito3.jpg"
			);
			setButtonState("primary");
			setTitleText("Donar para salvar un gato.");
			setButtonText("Donar");
		}
		setDonate(!donate);
	};
	return (
		<div className="App">
			<MyCard
				srcImg={srcImg}
				buttonState={buttonState}
				titleText={titleText}
				buttonText={buttonText}
				donateChange={donateChange}
			/>
		</div>
	);
}

export default App;
