import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

const AudioPlayerComponent = ({ src }) => {
  return (
    <AudioPlayer
      src={src}
      autoPlayAfterSrcChange
      // other props here
    />
  );
};

export default AudioPlayerComponent;
