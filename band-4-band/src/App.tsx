import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</>
	);
}

export default App;
