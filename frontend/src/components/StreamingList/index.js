import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StreamingList = props => (
  <Link
    to={`/live/${props.creator.channel.stream_key}/`}
    className={styles.link}
  >
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={props.poster || require("../../images/noPhoto.jpg")}
          alt={props.title}
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
        <div className={styles.topTitle}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.info}>{"스트리밍"}</span>
        </div>
      </div>
      <div className={styles.column}>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.channelName}>{props.creator.username}</span>
      </div>
    </div>
  </Link>
);

StreamingList.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default StreamingList;
