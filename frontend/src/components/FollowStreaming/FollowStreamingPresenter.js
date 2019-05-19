import React from "react";
import styles from "./styles.module.scss";
import StreamingList from "../StreamingList";

const FollowStreamingPresenter = props => (
  <div className={styles.streamContainer}>
    <div className={styles.column}>
      <span className={styles.title}>
        {"구독중인 아티스트의 스트리밍 방송"}
      </span>
    </div>
    <div className={styles.videoBox}>
      {props.followingsStreaming.map(stream => {
        return <StreamingList key={stream.id} {...stream} />;
      })}
    </div>
    <div className={styles.divider} />
  </div>
);

export default FollowStreamingPresenter;
