import React from "react";
import Helmet from "react-helmet";
import styles from "./styles.module.scss";
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
      <div className={styles.infoContainer}>
        <div className={styles.header}>
          {props.amProfile.is_streaming ? (
            <Link
              to={`/live/${props.amProfile.channel.stream_key}/`}
              className={styles.link}
            >
              <img
                src={
                  props.amProfile.profile_image ||
                  require("../../images/noPhoto.jpg")
                }
                alt={props.amProfile.username}
                className={styles.streamProfileImage}
              />
            </Link>
          ) : (
            <img
              src={
                props.amProfile.profile_image ||
                require("../../images/noPhoto.jpg")
              }
              alt={props.amProfile.username}
              className={styles.profileImage}
            />
          )}
          <div className={styles.main}>
            <div className={styles.usernameCard}>
              <span className={styles.username}>
                {props.amProfile.username}
              </span>
              {props.username !== props.amProfile.username && (
                <FollowButton
                  isFollowing={props.amProfile.is_following}
                  userId={props.amProfile.id}
                />
              )}
            </div>
            <div className={styles.channelCard}>
              <span className={styles.post}>
                <span className={styles.postCount}>
                  {props.amProfile.post_count}
                </span>
                {"  "}
                {"posts"}
              </span>
              <span
                className={styles.followers}
                onClick={props.toggleFollowers}
              >
                <span className={styles.followersCount}>
                  {props.amProfile.followers_count}
                </span>
                {"  "}
                {"followers"}
              </span>
              <span
                className={styles.followings}
                onClick={props.toggleFollowings}
              >
                <span className={styles.followingsCount}>
                  {props.amProfile.following_count}
                </span>
                {"  "}
                {"followings"}
              </span>
            </div>
            <div className={styles.captionCard}>
              <span className={styles.channelCaption}>
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
      <div className={styles.videoContainer}>
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
