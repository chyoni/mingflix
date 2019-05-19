import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const StreamingSearchListPresenter = props => {
  return (
    <Link
      to={`/live/${props.creator.channel.stream_key}/`}
      className={styles.link}
    >
      <div className={styles.container}>
        <div className={styles.streamingInfo}>
          <div className={styles.streaming}>
            <img
              src={props.poster || require("../../images/noPhoto.jpg")}
              alt={props.title}
              className={styles.poster}
            />
          </div>
          <div className={styles.info}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.description}>
              {"description:  "} {props.description}
            </span>
            <span className={styles.creatorName}>
              {"creator: "} {props.creator.username}
            </span>
            <div className={styles.streamRedBox}>
              <span className={styles.redBox}>{"실시간 스트리밍"}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

StreamingSearchListPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired
};

export default StreamingSearchListPresenter;
