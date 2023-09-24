import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Connect.css";

const Connectbutton: React.FC = () => {
	const [connected, setConnected] = useState(false);
	const navigate = useNavigate();

	const [walletAddress, setWalletAddress] = useState<string | null>(null);
	console.log("connected:", connected);

	function formatWalletAddress(walletAddress: string | null): string {
		if (!walletAddress) return "";
		if (walletAddress.length <= 9) return walletAddress; // Return the full address if it's very short
		const firstFive = walletAddress.slice(0, 5);
		const lastFour = walletAddress.slice(-4);
		return `${firstFive}...${lastFour}`;
	}

	const connectToMetaMask = useCallback(async () => {
		try {
			// Check if MetaMask is installed

			if (window.ethereum) {
				await window.ethereum.send("eth_requestAccounts");
				const accounts = await window.ethereum.request({
					method: "eth_accounts",
				});
				if (accounts && accounts.length > 0) {
					setWalletAddress(accounts[0]);
					setConnected(true);
					navigate("/connected");
				}
			} else {
				alert("MetaMask is not installed.");
			}
		} catch (error) {
			console.error(error);
			alert("Error connecting to MetaMask.");
		}
	}, []);

	return (
		<>
			{connected ? (
				<div className="connected">
					Connected
					<br />
					{formatWalletAddress(walletAddress)}
					{/* Render the ProfileSettings component */}
				</div>
			) : (
				<button className="connect-button" onClick={connectToMetaMask}>
					Connect to MetaMask
				</button>
			)}
		</>
	);
};

export default Connectbutton;
