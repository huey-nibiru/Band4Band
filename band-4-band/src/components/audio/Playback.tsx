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
		if (audioRef.current) {
			audioRef.current.addEventListener("ended", () => {
				audioRef.current?.play();
			});
		}
	}, [audioFile]);

	// Start audio playback on component mount
	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	}, []);

	return (
		<div className="audio-button-container">
			<button className="audio-button" onClick={toggleAudio}>
				{isPlaying ? (
					<FontAwesomeIcon icon={faPause} className="pause-icon" />
				) : (
					<FontAwesomeIcon icon={faPlay} className="play-icon" />
				)}
			</button>
			<audio ref={audioRef} src={audioFile} autoPlay loop />
		</div>
	);
};

export default AudioButton;
