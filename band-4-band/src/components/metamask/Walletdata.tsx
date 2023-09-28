import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./Walletdata.css";

const supabaseUrl = "https://otglfniuitvpgotpjbvb.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const WalletData: React.FC = () => {
	const [walletAddress, setWalletAddress] = useState<string | null>(null);
	const [balance, setBalance] = useState<number | null>(null);
	const [username, setUsername] = useState<string | null>("");
	const [isStoring, setIsStoring] = useState(false);

	return (
		<div className="glassmorphism-box">
			<div className="content">
				<h1>Profile Setup</h1>

				{isStoring ? <p>Storing data...</p> : null}
				<form className="centered-form">
					<div className="profile">
						<input
							type="text"
							placeholder="Enter Username"
							value={username || ""}
							onChange={handleUsernameChange}
						/>
						<input type="submit" value="Submit" />
					</div>
					<div className="profile">
						<label>Upload Profile Picture:</label>
						<input type="file" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default WalletData;
