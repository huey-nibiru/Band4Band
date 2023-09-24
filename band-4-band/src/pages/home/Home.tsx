import "./Home.css";
import React from "react";

import Header from "../../components/header/Header";
import InstructionBox from "../../components/Instructions/Instructions";

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<InstructionBox />
		</>
	);
};

export default HomePage;
