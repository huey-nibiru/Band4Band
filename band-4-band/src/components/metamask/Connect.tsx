import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Connect.css";

const Connectbutton: React.FC = () => {
	const [connected, setConnected] = useState(false);
	const navigate = useNavigate();
	const [walletAddress, setWalletAddress] = useState<string | null>(null);

	console.log("connected:", connected);

	function formatWalletAddress(walletAddress: string | null): string {
		if (!walletAddress) return "";
		if (walletAddress.length <= 9) return walletAddress;
		const firstFive = walletAddress.slice(0, 5);
		const lastFour = walletAddress.slice(-4);
		return `${firstFive}...${lastFour}`;
	}

	const connectToMetaMask = useCallback(async () => {
		try {
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
				navigate("/");
			}
		} catch (error) {
			console.error(error);
			alert("Error connecting to MetaMask.");
		}
	}, [navigate]);

	const handleAccountsChanged = (accounts: string[]) => {
		if (accounts.length === 0) {
			// User disconnected MetaMask
			setConnected(false);
			setWalletAddress(null);
			navigate("/");
		} else {
			// User connected or switched accounts
			setConnected(true);
			setWalletAddress(accounts[0]);
		}
	};

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
				if (accounts && accounts.length > 0) {
					setConnected(true);
					setWalletAddress(accounts[0]);
					navigate("/connected");
				} else {
					navigate("/");
				}

				window.ethereum.on("accountsChanged", handleAccountsChanged);
			});
		} else {
			navigate("/");
		}
	}, [navigate]);

	return (
		<>
			{connected ? (
				<div className="connected">
					Connected
					<br />
					{formatWalletAddress(walletAddress)}
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
