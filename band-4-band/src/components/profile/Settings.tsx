import React, { useState } from "react";
import "./Settings.css";

interface ProfileSettingsProps {
	walletAddress: string;
	onSave: (username: string) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
	walletAddress,
	onSave,
}) => {
	const [username, setUsername] = useState("");

	const handleSave = () => {
		// Perform any validation on the username here
		if (username.trim() === "") {
			alert("Please enter a valid username.");
			return;
		}

		onSave(username);
	};
	

	return (
		<div className="profile-settings">
			<h2>Profile Settings</h2>
			<p>Wallet Address: {walletAddress}</p>
			<label>
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<button onClick={handleSave}>Save Username</button>
		</div>
	);
};

export default ProfileSettings;
