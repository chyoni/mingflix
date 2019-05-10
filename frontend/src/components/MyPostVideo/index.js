import React from "react";
import styles from "./styles.module.scss";
import VideoList from "../VideoList";

const MyPostVideo = props => (
  <div className={styles.hotContainer}>
    <div className={styles.column}>
      <span className={styles.title}>{props.text}</span>
    </div>
    <div className={styles.videoBox}>
      {props.myVideo.map(video => {
        return <VideoList key={video.id} {...video} />;
      })}
    </div>
    <div className={styles.divider} />
  </div>
);

export default MyPostVideo;
