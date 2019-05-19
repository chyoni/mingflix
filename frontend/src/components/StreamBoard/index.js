import React from "react";
import styles from "./styles.module.scss";
import IosVideoCam from "react-ionicons/lib/IosVideocam";
import { Link } from "react-router-dom";

const StreamBoard = props => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{"Streaming"}</h4>
        </header>
        <Link to={"/stream"} className={styles.link}>
          <div className={styles.content} onClick={props.toggleStream}>
            <span className={styles.icon}>
              <IosVideoCam
                icon={"ios-video-cam"}
                fontSize={"25px"}
                color={"black"}
              />
            </span>
            <span className={styles.startStream}>{"스트리밍 시작하기"}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StreamBoard;
