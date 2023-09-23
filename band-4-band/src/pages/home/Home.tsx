import React from "react";
import Header from "../../components/header/Header";
import GlassmorphismBox from "../../components/Instructions/Instructions";
import "./Home.css";
import eth from "../../assets/ETH.gif";

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<GlassmorphismBox />
		</>
	);
};

export default HomePage;
