import React from "react";
import "./VideoItem.css"

const VideoItem=(props)=>{
  return(
    <div className={"item video-item"} onClick={() => props.onVideoSelect(props.video)}>
      <img className={"ui image"} src={props.video.snippet.thumbnails.default.url}/>
      <div className={"content"}>
        <p className={"header"}>{props.video.snippet.title}</p>
      </div>
    </div>
  )
}

export default VideoItem