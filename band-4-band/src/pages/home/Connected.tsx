import "./Home.css";
import Header from "../../components/header/Header";
import ProfileSettings from "../../components/profile/Settings";

const ConnectedPage: React.FC = () => {
	{
		/*
    const saveUsername = (username: string) => {
		// Send a request to your backend API to save the username associated with the wallet address
		// You can use fetch or a library like axios for this.
		// Example using fetch:
		fetch("/api/save-username", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, walletAddress }),
		})
			.then((response) => {
				if (response.ok) {
					// Username saved successfully
					alert("Username saved successfully.");
				} else {
					alert("Error saving username.");
				}
			})
			.catch((error) => {
				console.error(error);
				alert("Error saving username.");
			});
	}; */
	}
	return (
		<>
			<div id="test"></div>
			<Header />
			{/*<ProfileSettings walletAddress={walletAddress} onSave={saveUsername} />*/}
		</>
	);
};

export default ConnectedPage;
