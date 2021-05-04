import React from "react";
import "./App.css";
import Row from "./components/Row";
	
function App() {
	return (
		<div className="App">
			<h1>netflix clone</h1>
			<Row title="netflix originals" />
			<Row title="trending now" />
		</div>
	);
}

export default App;
