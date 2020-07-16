import React from "react";
import { Player, BigPlayButton, ControlBar, PlayToggle } from "video-react";
import "video-react/dist/video-react.css";

const VideoPlayer = ({ src }) => {
  console.log("src", src);

  return (
    <div>
      <Player playsInline poster="/assets/poster.png" src={src}>
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
};

export default VideoPlayer;
