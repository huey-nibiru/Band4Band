import Header from "../../components/header/Header";
import WalletData from "../../components/metamask/Walletdata";
import InstructionBox from "../../components/Instructions/Instructions";

const ConnectedPage: React.FC = () => {
	return (
		<>
			<Header />
			<WalletData />
		</>
	);
};

export default ConnectedPage;
