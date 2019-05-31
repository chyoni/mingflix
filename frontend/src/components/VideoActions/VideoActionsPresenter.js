import React from "react";
import PropTypes from "prop-types";
import "./VideoActions.css";
import HeartOutIcon from "react-ionicons/lib/IosHeartOutline";
import HeartIcon from "react-ionicons/lib/IosHeart";
import TextIcon from "react-ionicons/lib/IosTextOutline";

const VideoActionsPresenter = (props, context) => (
  <div className={"video-actions-photo-actions"}>
    <div className={"video-actions-icon-column"}>
      <span className={"video-actions-icon"} onClick={props.handleHeartClick}>
        {props.isLiked ? (
          <HeartIcon icon={"ios-heart"} fontSize={"28px"} color={"#EB4B59"} />
        ) : (
          <HeartOutIcon
            icon={"ios-heart-outline"}
            fontSize={"28px"}
            color={"black"}
          />
        )}
      </span>
      <span className={"video-actions-icon"}>
        <TextIcon icon={"ios-text-outline"} fontSize={"28px"} color={"black"} />
      </span>
    </div>
    <div className={"video-actions-like-count-column"}>
      <span className={"video-actions-like-count"} onClick={props.openLikes}>
        {props.likeCount} {props.likeCount === 1 ? "like" : "likes"}
      </span>
      <span className={"video-actions-comment-count"}>
        {props.commentCount} {"comments"}
      </span>
    </div>
  </div>
);

VideoActionsPresenter.propTypes = {
  commentCount: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  videoId: PropTypes.number.isRequired
};

export default VideoActionsPresenter;
