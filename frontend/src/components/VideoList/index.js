import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const VideoList = props => (
  <Link to={`/detail/${props.id}/`} className={styles.link}>
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={props.poster || require("../../images/noPhoto.jpg")}
          alt={props.file}
          className={styles.poster}
        />
        {/* <video
          controls={"controls"}
          preload={"none"}
          width={"200"}
          height={"130"}
          poster={props.poster}
        >
          <source id={"mp4"} src={props.file} type={"video/mp4"} />
          <source id={"webm"} src={props.file} type={"video/webm"} />
          <source id={"ogv"} src={props.file} type={"video/ogg"} />
        </video> */}
      </div>
      <div className={styles.column}>
        <span className={styles.title}>{props.title}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.channelName}>{props.creator.username}</span>
        <span className={styles.views}>
          {"조회수 "}
          {props.views}
          {"회"}
        </span>
        <span className={styles.divider}>{"·"}</span>
        <span className={styles.naturalTime}>{props.natural_time}</span>
      </div>
    </div>
  </Link>
);

export default VideoList;
