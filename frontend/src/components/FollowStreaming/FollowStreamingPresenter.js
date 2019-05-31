import React from "react";
import "../FollowingsVideo/FollowingsVideo.css";
import StreamingList from "../StreamingList";

const FollowStreamingPresenter = props => (
  <div className={"fsv-hot-container"}>
    <div className={"fsv-column"}>
      <span className={"fsv-title"}>{"구독중인 아티스트의 스트리밍 방송"}</span>
    </div>
    <div className={"fsv-video-box"}>
      {props.followingsStreaming.map(stream => {
        return <StreamingList key={stream.id} {...stream} />;
      })}
    </div>
    <div className={"fsv-divider"} />
  </div>
);

export default FollowStreamingPresenter;
