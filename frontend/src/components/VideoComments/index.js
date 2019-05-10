import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const VideoComments = props => (
  <div className={styles.VideoComments}>
    <ul>
      <div className={styles.commentField}>
        {props.comments.map(comment => (
          <Comment
            key={comment.id}
            creator={comment.creator.username}
            comment={comment.message}
            profileImage={comment.creator.profile_image}
            postTime={comment.natural_time}
          />
        ))}
      </div>
    </ul>
  </div>
);

VideoComments.propTypes = {
  comments: PropTypes.array
};

const Comment = props => (
  <div className={styles.oneToOneComment}>
    <img
      src={props.profileImage || require("../../images/noPhoto.jpg")}
      alt={props.creator}
      className={styles.profileImage}
    />
    <div className={styles.divider}>
      <div className={styles.data}>
        <span className={styles.creator}>{props.creator}</span>
        <span className={styles.time}>{props.postTime}</span>
      </div>
      <span className={styles.comments}>{props.comment}</span>
    </div>
  </div>
);

export default VideoComments;
