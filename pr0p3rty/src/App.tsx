import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Transactions from "./components/Transactions";
import Balances from "./components/Balances";

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Board />
			</div>
		</div>
	);
}

export default App;
