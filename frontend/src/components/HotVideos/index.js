import React from "react";
import "./HotVideos.css";
import VideoList from "../VideoList";

const HotVideos = props => (
  <div className={"hotvideos-hot-container"}>
    <div className={"hotvideos-column"}>
      <span className={"hotvideos-title"}>{"인기 동영상"}</span>
    </div>
    <div className={"hotvideos-video-box"}>
      {props.hotVideos.map(video => {
        return <VideoList key={video.id} {...video} />;
      })}
    </div>
    <div className={"hotvideos-divider"} />
  </div>
);

export default HotVideos;
