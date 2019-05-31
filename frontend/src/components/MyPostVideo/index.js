import React from "react";
import "./MyPostVideo.css";
import VideoList from "../VideoList";

const MyPostVideo = props => (
  <div className={"mpv-mypost-video-container"}>
    <div className={"mpv-column"}>
      <span className={"mpv-title"}>{props.text}</span>
    </div>
    <div className={"mpv-video-box"}>
      {props.myVideo.map(video => {
        return <VideoList key={video.id} {...video} />;
      })}
    </div>
    <div className={"mpv-divider"} />
  </div>
);

export default MyPostVideo;
