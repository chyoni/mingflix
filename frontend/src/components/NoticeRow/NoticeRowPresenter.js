import React from "react";
import PropTypes from "prop-types";
import "./NoticeRow.css";
import FollowButton from "../FollowButton";
import { Link } from "react-router-dom";

const NoticeRowPresenter = props => (
  <div className={"noticerow-container"}>
    <div className={"noticerow-note-box"}>
      <Link
        to={`/anonyprofile/${props.creator.username}/`}
        className={"noticerow-link"}
      >
        <div className={"noticerow-column"}>
          <img
            src={
              props.creator.profile_image || require("../../images/noPhoto.jpg")
            }
            alt={props.creator.username}
            className={"noticerow-avatar"}
          />
          <div className={"noticerow-user"}>
            <span className={"noticerow-username"}>
              {props.creator.username}
            </span>
          </div>
        </div>
      </Link>
      <div className={"noticerow-column"}>
        <span className={"noticerow-type"}>
          {props.type === "follow" && <FollowType />}
          {props.type === "comment" && <CommentType comment={props.comment} />}
          {props.type === "like" && <LikeType />}
          <span className={"noticerow-time"}>{props.time}</span>
        </span>
      </div>
      <div className={"noticerow-column"}>
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
          <section className={"noticerow-button"}>
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
      <Link to={`/detail/${props.videoId}/`} className={"noticerow-link"}>
        <img
          src={props.poster}
          className={"noticerow-notice-on-poster"}
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
