import React from "react";
import { useState } from "react";
import style from './Video.module.css'

export function Videos(props) {
  const [videoId, setVideoId] = useState("");

  const handleVideo = (e) => {
    setVideoId(e.target.value);
  };

  return (
    <div>
      <source src="" onChange={handleVideo} value={videoId} />
      <iframe
        className={style.video}
        key={videoId}
        width="500"
        height="320"
        src={props.video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;control-disable"
      />
    </div>
  );
}
