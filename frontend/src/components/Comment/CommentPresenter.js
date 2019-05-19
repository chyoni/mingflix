import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import IosClose from "react-ionicons/lib/IosClose";

const CommentPresenter = props => {
  return (
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
      {props.currentCreator === props.videoCreator && (
        <div className={styles.more}>
          <section onClick={props.handleDeleteByVideoCreator}>
            <IosClose
              icon={"md-more"}
              fontSize={"25px"}
              color={"black"}
              className={styles.moreIcon}
            />
          </section>
        </div>
      )}
      {props.currentCreator === props.commentCreator && (
        <div className={styles.more}>
          <section onClick={props.handleDeleteByCommentCreator}>
            <IosClose
              icon={"md-more"}
              fontSize={"25px"}
              color={"black"}
              className={styles.moreIcon}
            />
          </section>
        </div>
      )}
    </div>
  );
};

CommentPresenter.propTypes = {
  creator: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  postTime: PropTypes.string.isRequired,
  currentCreator: PropTypes.string.isRequired,
  commentCreator: PropTypes.string.isRequired,
  videoCreator: PropTypes.string.isRequired,
  handleDeleteByVideoCreator: PropTypes.func.isRequired,
  handleDeleteByCommentCreator: PropTypes.func.isRequired
};

export default CommentPresenter;
