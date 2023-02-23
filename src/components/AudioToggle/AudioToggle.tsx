import React, { useEffect, useState } from "react";
import { Props } from "./types";

const AudioToggle: React.FC<Props> = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonText, setButtonText] = useState('>');

  const toggleAudio = () => {
    setIsPlaying(() => !isPlaying)
  };

  useEffect(() => {
    if (isPlaying) {
      props.audio.play();
      setButtonText(() => '=')
    } else {
      props.audio.pause();
      setButtonText(() => '>')
    }
  }, [isPlaying]);

  return (
    <div style={{display:'flex', flexDirection: 'column'}} >
      <label htmlFor='btn'>{props.description}</label>
      <button id="btn" style={{width:50, marginBottom: 16}} onClick={toggleAudio}>{buttonText}</button>
    </div>
  );
};

export default AudioToggle