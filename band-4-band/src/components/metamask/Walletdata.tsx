import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_API_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const WalletData: React.FC = () => {
	const [walletAddress, setWalletAddress] = useState<string | null>(null);

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

						// Store wallet data in Supabase
						if (walletAddress) {
							const { data, error } = await supabase.from("wallets").upsert([
								{
									address: walletAddress,
								},
							]);

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
	}, []);

	return (
		<div>
			<p>Connected Wallet Address: {walletAddress}</p>
		</div>
	);
};

export default WalletData;
