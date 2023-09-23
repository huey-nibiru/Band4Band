// src/GlassmorphismBox.tsx
import React from "react";
import "./Instructions.css";

const GlassmorphismBox: React.FC = () => {
	return (
		<div className="glassmorphism-box">
			<h1>LETS GO BAND 4 BAND</h1>
			<div className="intsruction-details">
				<ol>
					<li>Connect with metamask</li>
					<li>Create a profile</li>
					<li>Address stays anon until the end</li>
					<li>Go band for band until you cant anymore</li>
					<li>Loser loses 1 band to the winner instant transfer</li>
					<li>
						Opponent wallet address and amount revealed at end of the match
					</li>
				</ol>
			</div>
		</div>
	);
};

export default GlassmorphismBox;
