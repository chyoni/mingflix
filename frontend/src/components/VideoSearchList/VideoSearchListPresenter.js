import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const VideoSearchListPresenter = props => {
  return (
    <Link to={`/detail/${props.id}/`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.videoInfo}>
          <div className={styles.video}>
            <img
              src={props.poster || require("../../images/noPhoto.jpg")}
              alt={props.file}
              className={styles.poster}
            />
          </div>
          <div className={styles.info}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.description}>
              {"description:  "} {props.description}
            </span>
            {props.tags.length >= 1 && (
              <div className={styles.tagList}>
                {props.tags.map((tag, index) => {
                  return (
                    <span key={index} className={styles.tagChild}>
                      {"#"}
                      {tag}{" "}
                    </span>
                  );
                })}
              </div>
            )}
            <span className={styles.creatorName}>
              {"creator: "} {props.creatorName}
            </span>
            <div className={styles.viewsAndTime}>
              <span className={styles.views}>
                {"조회수  "}
                {props.views}
                {"회"}
              </span>
              <span className={styles.divider}>{"·"}</span>
              <span className={styles.postTime}>{props.postTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

VideoSearchListPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  tags: PropTypes.array,
  views: PropTypes.number.isRequired,
  creatorName: PropTypes.string.isRequired
};
export default VideoSearchListPresenter;
