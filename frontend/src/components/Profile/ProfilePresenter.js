import React from "react";
import Helmet from "react-helmet";
import Loading from "../Loading";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
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
      <div className={styles.infoContainer}>
        <div className={styles.header}>
          {props.yourProfile.is_streaming ? (
            <Link
              to={`/live/${props.yourProfile.channel.stream_key}/`}
              className={styles.link}
            >
              <img
                src={
                  props.yourProfile.profile_image ||
                  require("../../images/noPhoto.jpg")
                }
                alt={props.yourProfile.username}
                className={styles.streamProfileImage}
              />
            </Link>
          ) : (
            <img
              src={
                props.yourProfile.profile_image ||
                require("../../images/noPhoto.jpg")
              }
              alt={props.yourProfile.username}
              className={styles.profileImage}
            />
          )}
          <div className={styles.main}>
            <div className={styles.usernameCard}>
              <span className={styles.username}>
                {props.yourProfile.username}
              </span>
            </div>
            <div className={styles.channelCard}>
              <span className={styles.post}>
                <span className={styles.postCount}>
                  {props.yourProfile.post_count}
                </span>
                {"  "}
                {"posts"}
              </span>
              <span
                className={styles.followers}
                onClick={props.toggleFollowers}
              >
                <span className={styles.followersCount}>
                  {props.yourProfile.followers_count}
                </span>
                {"  "}
                {"followers"}
              </span>
              <span
                className={styles.followings}
                onClick={props.toggleFollowings}
              >
                <span className={styles.followingsCount}>
                  {props.yourProfile.following_count}
                </span>
                {"  "}
                {"followings"}
              </span>
            </div>
            <div className={styles.captionCard}>
              <span className={styles.channelCaption}>
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
      <div className={styles.videoContainer}>
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
      <div className={styles.infoContainer}>
        <div className={styles.noChannelHeader}>
          <span className={styles.noChannel}>{"채널이 없습니다😥"}</span>
          <button className={styles.channelCreate} onClick={props.goCraeteFunc}>
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
