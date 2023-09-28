// src/GlassmorphismBox.tsx
import React from "react";
import "./Instructions.css";

const InstructionBox: React.FC = () => {
	return (

			<div className="glassmorphism-box">
				<h1>How To Play</h1>
				<div className="intsruction-details">
					<ol>
						<li>Connect wallet</li>
						<li>
							Choose a username and PFP (Frequent name + pfp changing is
							advisable)
						</li>
						<li>
							You and your opponent's address will remain anonymous until the
							end of the match
						</li>
						<li>Choose a wager amount</li>
						<li>Choose an increment amount</li>
						<li>
							Each player will reveal their total wallet balance in the selected
							increments
						</li>
						<li>
							First person to reveal their total balance loses (5 second
							cooldown limit or you lose)
						</li>
						<li>Loser instantly has wager amount transfered to the winner</li>
						<li>
							Both winner and loser addresses are revealed at the very end
						</li>
						<li>
							(PREMIUM FEATURE) Connect your personal Twitter account to Mog
							your haters in public.
						</li>
					</ol>
				</div>
			</div>

	);
};

export default InstructionBox;
