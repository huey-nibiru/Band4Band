import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Playback.css";

interface AudioButtonProps {
	audioFile: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ audioFile }) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);

	const toggleAudio = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	useEffect(() => {
		// Simulate a click on the button to start playing the audio
		const button = document.getElementById("playback-button");
		if (button) {
			button.click();
		}
	}, []);

	return (
		<div className="audio-button-container">
			<audio ref={audioRef} src={audioFile} autoPlay loop />
			<button
				id="playback-button"
				className="audio-button"
				onClick={toggleAudio}
			>
				{isPlaying ? (
					<FontAwesomeIcon icon={faPause} className="pause-icon" />
				) : (
					<FontAwesomeIcon icon={faPlay} className="play-icon" />
				)}
			</button>
		</div>
	);
};

export default AudioButton;
