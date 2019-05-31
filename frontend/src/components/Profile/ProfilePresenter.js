import React from "react";
import Helmet from "react-helmet";
import Loading from "../Loading";
import PropTypes from "prop-types";
import "./Profile.css";
import MyPostVideo from "../MyPostVideo";
import FollowersBox from "../FollowersBox";
import FollowingsBox from "../FollowingsBox";
import { Link } from "react-router-dom";

const ProfilePresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : props.yourProfile.channel ? (
    <React.Fragment>
      <Helmet>
        <title>Mingflix | 나의 프로필</title>
      </Helmet>
      <div className={"profile-info-container"}>
        <div className={"profile-header"}>
          {props.yourProfile.is_streaming ? (
            <Link
              to={`/live/${props.yourProfile.channel.stream_key}/`}
              className={"profile-link"}
            >
              <img
                src={
                  props.yourProfile.profile_image ||
                  require("../../images/noPhoto.jpg")
                }
                alt={props.yourProfile.username}
                className={"profile-stream-profile-image"}
              />
            </Link>
          ) : (
            <img
              src={
                props.yourProfile.profile_image ||
                require("../../images/noPhoto.jpg")
              }
              alt={props.yourProfile.username}
              className={"profile-profile-image"}
            />
          )}
          <div className={"profile-main"}>
            <div className={"profile-username-card"}>
              <span className={"profile-username"}>
                {props.yourProfile.username}
              </span>
            </div>
            <div className={"profile-channel-card"}>
              <span className={"profile-post"}>
                <span className={"profile-post-count"}>
                  {props.yourProfile.post_count}
                </span>
                {"  "}
                {"posts"}
              </span>
              <span
                className={"profile-followers"}
                onClick={props.toggleFollowers}
              >
                <span className={"profile-followers-count"}>
                  {props.yourProfile.followers_count}
                </span>
                {"  "}
                {"followers"}
              </span>
              <span
                className={"profile-followings"}
                onClick={props.toggleFollowings}
              >
                <span className={"profile-followings-count"}>
                  {props.yourProfile.following_count}
                </span>
                {"  "}
                {"followings"}
              </span>
            </div>
            <div className={"profile-caption-card"}>
              <span className={"profile-channel-caption"}>
                {props.yourProfile.channel.channel_caption}
              </span>
            </div>
            {props.seeFollowers && (
              <FollowersBox
                toggleFollowers={props.toggleFollowers}
                username={props.yourProfile.username}
              />
            )}
            {props.seeFollowings && (
              <FollowingsBox
                toggleFollowings={props.toggleFollowings}
                username={props.yourProfile.username}
              />
            )}
          </div>
        </div>
      </div>
      <div className={"profile-video-container"}>
        <MyPostVideo
          myVideo={props.yourProfile.videos}
          text={"내가 게시한 동영상"}
        />
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Helmet>
        <title>Mingflix | 나의 프로필</title>
      </Helmet>
      <div className={"profile-info-container"}>
        <div className={"profile-no-channel-header"}>
          <span className={"profile-no-channel"}>{"채널이 없습니다😥"}</span>
          <button
            className={"profile-channel-create"}
            onClick={props.goCraeteFunc}
          >
            {"채널 만들기"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

ProfilePresenter.propTypes = {
  seeFollowers: PropTypes.bool.isRequired,
  seeFollowings: PropTypes.bool.isRequired,
  toggleFollowers: PropTypes.func.isRequired,
  toggleFollowings: PropTypes.func.isRequired,
  goCraeteFunc: PropTypes.func.isRequired
};

export default ProfilePresenter;
