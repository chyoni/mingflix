import React from "react";
import styles from "./styles.module.scss";
import VideoList from "../VideoList";

const FollowingsVideo = props => (
  <div className={styles.hotContainer}>
    <div className={styles.column}>
      <span className={styles.title}>{"구독중인 아티스트의 영상"}</span>
    </div>
    <div className={styles.videoBox}>
      {props.followingsVideo.map(video => {
        return <VideoList key={video.id} {...video} />;
      })}
    </div>
    <div className={styles.divider} />
  </div>
);

export default FollowingsVideo;
