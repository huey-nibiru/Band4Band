import "./Home.css";
import Header from "../../components/header/Header";
import UserProfileForm from "../../components/metamask/Walletdata";
const ConnectedPage: React.FC = () => {
	return (
		<>
			<Header />
			<UserProfileForm />
		</>
	);
};

export default ConnectedPage;
