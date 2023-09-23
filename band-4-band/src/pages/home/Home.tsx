import React from "react";
import Header from "../../components/header/Header";
import InstructionBox from "../../components/Instructions/Instructions";
import "./Home.css";

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<InstructionBox />
		</>
	);
};

export default HomePage;
