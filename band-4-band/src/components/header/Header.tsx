// src/components/Header.tsx
import React from "react";
import "./Header.css";
import ConnectButton from "../metamask/Button";

const Header: React.FC = () => {
	return (
		<>
			<header className="navbar">
				<div className="container">BAND-4-BAND</div>
				<button className="connect-button">Connect to Metamask</button>
			</header>
		</>
	);
};

export default Header;
