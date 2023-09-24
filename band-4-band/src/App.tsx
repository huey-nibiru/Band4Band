import "./App.css";
import Homepage from "./pages/home/Home";
import ConnectedPage from "./pages/home/Connected";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/connected" element={<ConnectedPage />} />
			</Routes>
		</>
	);
}

export default App;
