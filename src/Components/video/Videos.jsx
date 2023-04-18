import React from "react";
// import YouTube from 'react-youtube'
// import style from './Video.module.css'
import { useState } from "react";
// import video3 from './video3.mp4'

export function Videos(props) {
  const [videoId, setVideoId] = useState("");

  const handleVideo = (e) => {
    setVideoId(e.target.value);
  };

  return (
    <div>
      <source src="1.mp4" onChange={handleVideo} value={videoId} />
      <iframe
        key={videoId}
        width="300"
        height="400"
        src={props.video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
