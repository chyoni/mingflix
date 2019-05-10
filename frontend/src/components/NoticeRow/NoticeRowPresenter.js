import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import FollowButton from "../FollowButton";
import { Link } from "react-router-dom";

const NoticeRowPresenter = props => (
  <div className={styles.container}>
    <div className={styles.noteBox}>
      <Link
        to={`/anonyprofile/${props.creator.username}/`}
        className={styles.link}
      >
        <div className={styles.column}>
          <img
            src={
              props.creator.profile_image || require("../../images/noPhoto.jpg")
            }
            alt={props.creator.username}
            className={styles.avatar}
          />
          <div className={styles.user}>
            <span className={styles.username}>{props.creator.username}</span>
          </div>
        </div>
      </Link>
      <div className={styles.column}>
        <span className={styles.type}>
          {props.type === "follow" && <FollowType />}
          {props.type === "comment" && <CommentType comment={props.comment} />}
          {props.type === "like" && <LikeType />}
          <span className={styles.time}>{props.time}</span>
        </span>
      </div>
      <div className={styles.column}>
        {props.type === "comment" && (
          <NoticeOnPoster
            videoId={props.video.id}
            poster={props.video.poster}
          />
        )}
        {props.type === "like" && (
          <NoticeOnPoster
            videoId={props.video.id}
            poster={props.video.poster}
          />
        )}
        {props.type === "follow" && (
          <section className={styles.button}>
            <FollowButton
              isFollowing={props.creator.is_following}
              userId={props.creator.id}
            />
          </section>
        )}
      </div>
    </div>
  </div>
);

const FollowType = props => {
  return "Started following you.";
};

const CommentType = props => {
  return (
    <React.Fragment>
      {`mentioned you in a comment: ${props.comment}`}
    </React.Fragment>
  );
};

const LikeType = props => {
  return <React.Fragment>{"liked your photo."}</React.Fragment>;
};

const NoticeOnPoster = props => {
  return (
    <React.Fragment>
      <Link to={`/detail/${props.videoId}/`} className={styles.link}>
        <img
          src={props.poster}
          className={styles.noticeOnPoster}
          alt={"noImage"}
        />
      </Link>
    </React.Fragment>
  );
};

NoticeRowPresenter.propTypes = {
  comment: PropTypes.string,
  creator: PropTypes.object.isRequired,
  video: PropTypes.object,
  time: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  to: PropTypes.object
};

export default NoticeRowPresenter;
