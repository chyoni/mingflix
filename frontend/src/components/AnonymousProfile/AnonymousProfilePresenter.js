import React from "react";
import Helmet from "react-helmet";
import "./AnonymousProfile.css";
import Loading from "../Loading";
import PropTypes from "prop-types";
import MyPostVideo from "../MyPostVideo";
import FollowButton from "../FollowButton";
import FollowersBox from "../FollowersBox";
import FollowingsBox from "../FollowingsBox";
import { Link } from "react-router-dom";

const AnonymousProfilePresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : props.amProfile.channel ? (
    <React.Fragment>
      <Helmet>
        <title>Mingflix | 프로필</title>
      </Helmet>
      <div className={"ap-info-container"}>
        <div className={"ap-header"}>
          {props.amProfile.is_streaming ? (
            <Link
              to={`/live/${props.amProfile.channel.stream_key}/`}
              className={"ap-link"}
            >
              <img
                src={
                  props.amProfile.profile_image ||
                  require("../../images/noPhoto.jpg")
                }
                alt={props.amProfile.username}
                className={"ap-stream-profile-image"}
              />
            </Link>
          ) : (
            <img
              src={
                props.amProfile.profile_image ||
                require("../../images/noPhoto.jpg")
              }
              alt={props.amProfile.username}
              className={"ap-profile-image"}
            />
          )}
          <div className={"ap-main"}>
            <div className={"ap-username-card"}>
              <span className={"ap-username"}>{props.amProfile.username}</span>
              {props.username !== props.amProfile.username && (
                <FollowButton
                  isFollowing={props.amProfile.is_following}
                  userId={props.amProfile.id}
                />
              )}
            </div>
            <div className={"ap-channel-card"}>
              <span className={"ap-post"}>
                <span className={"ap-post-count"}>
                  {props.amProfile.post_count}
                </span>
                {"  "}
                {"posts"}
              </span>
              <span className={"ap-followers"} onClick={props.toggleFollowers}>
                <span className={"ap-followers-count"}>
                  {props.amProfile.followers_count}
                </span>
                {"  "}
                {"followers"}
              </span>
              <span
                className={"ap-followings"}
                onClick={props.toggleFollowings}
              >
                <span className={"ap-followings-count"}>
                  {props.amProfile.following_count}
                </span>
                {"  "}
                {"followings"}
              </span>
            </div>
            <div className={"ap-caption-card"}>
              <span className={"ap-channel-caption"}>
                {props.amProfile.channel.channel_caption}
              </span>
            </div>
            {props.seeFollowers && (
              <FollowersBox
                toggleFollowers={props.toggleFollowers}
                username={props.amProfile.username}
              />
            )}
            {props.seeFollowings && (
              <FollowingsBox
                toggleFollowings={props.toggleFollowings}
                username={props.amProfile.username}
              />
            )}
          </div>
        </div>
      </div>
      <div className={"ap-video-container"}>
        <MyPostVideo
          myVideo={props.amProfile.videos}
          text={`${props.amProfile.username}님의 동영상`}
        />
      </div>
    </React.Fragment>
  ) : (
    <div />
  );
};

AnonymousProfilePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  seeFollowers: PropTypes.bool.isRequired,
  seeFollowings: PropTypes.bool.isRequired,
  toggleFollowers: PropTypes.func.isRequired,
  toggleFollowings: PropTypes.func.isRequired
};

export default AnonymousProfilePresenter;
