import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://otglfniuitvpgotpjbvb.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z2xmbml1aXR2cGdvdHBqYnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1MjUwMTQsImV4cCI6MjAxMTEwMTAxNH0.2N15fnDhc5X8IDKAlHdZOQ_YIk_Q7T9wSuSUqIu4yjM";

const supabase = createClient(supabaseUrl, supabaseKey);

const WalletData: React.FC = () => {
	const [walletAddress, setWalletAddress] = useState<string | null>(null);
	const [balance, setBalance] = useState<number | null>(null);
	const [username, setUsername] = useState<string | null>("");
	const [isStoring, setIsStoring] = useState(false);

	useEffect(() => {
		const connectToMetaMask = async () => {
			try {
				if (window.ethereum) {
					await window.ethereum.send("eth_requestAccounts");
					const accounts = await window.ethereum.request({
						method: "eth_accounts",
					});
					if (accounts && accounts.length > 0) {
						setWalletAddress(accounts[0]);

						// Retrieve the balance from MetaMask

						// Store wallet data in Supabase
						if (walletAddress && balance !== null && username) {
							setIsStoring(true); // Show a loading indicator
							const { data, error } = await supabase.from("wallets").upsert([
								{
									wallet_address: walletAddress,
									balance: balance,
									username: username,
								},
							]);

							setIsStoring(false); // Hide the loading indicator

							if (error) {
								console.error("Error storing wallet data:", error);
							} else {
								console.log("Wallet data stored:", data);
							}
						}
					}
				} else {
					alert("MetaMask is not installed.");
				}
			} catch (error) {
				console.error("Error connecting to MetaMask:", error);
				alert("Error connecting to MetaMask.");
			}
		};

		connectToMetaMask();
	}, [balance, username, walletAddress]);

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	return (
		<div className="glassmorphism-box">
			<div className="content">
				<h1>Profile Setup</h1>
				<p>Connected Wallet: {walletAddress}</p>
				<p>Balance: {balance} ETH</p>

				<input
					type="text"
					placeholder="Enter Username"
					value={username || ""}
					onChange={handleUsernameChange}
				/>

				{isStoring ? <p>Storing data...</p> : null}
			</div>
		</div>
	);
};

export default WalletData;
