import React from "react";
import "./FollowingsVideo.css";
import VideoList from "../VideoList";

const FollowingsVideo = props => (
  <div className={"fsv-hot-container"}>
    <div className={"fsv-column"}>
      <span className={"fsv-title"}>{"구독중인 아티스트의 영상"}</span>
    </div>
    <div className={"fsv-video-box"}>
      {props.followingsVideo.map(video => {
        return <VideoList key={video.id} {...video} />;
      })}
    </div>
    <div className={"fsv-divider"} />
  </div>
);

export default FollowingsVideo;
