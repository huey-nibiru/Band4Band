import React from "react";
import "./Header.css";
import AudioButton from "../audio/Playback";
import bands from "../../assets/bands.mp3";
import Connectbutton from "../metamask/Connect";

const Header: React.FC = () => {
	return (
		<>
			<header className="navbar">
				<div className="audio">
					<AudioButton audioFile={bands} />
				</div>
				<div className="container">BAND-4-BAND</div>
				<Connectbutton />
			</header>
		</>
	);
};

export default Header;
