import React from "react";
import "./FollowButton.css";
import PropTypes from "prop-types";

const FollowButtonPresenter = props => {
  return (
    <button
      className={props.isFollowing ? "fb-white-button" : "fb-blue-button"}
      onClick={props.clickButton}
    >
      {props.isFollowing ? "구독 중" : "구독"}
    </button>
  );
};

FollowButtonPresenter.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  clickButton: PropTypes.func.isRequired
};

export default FollowButtonPresenter;
