import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const UserListPresenter = props => (
  <div className={styles.userInfo}>
    <img
      src={props.profileImage || require("../../images/noPhoto.jpg")}
      alt={props.username}
      className={styles.profileImage}
    />
    <div className={styles.main}>
      <div className={styles.usernameCard}>
        <span className={styles.username}>{props.username}</span>
      </div>
      <div className={styles.channelCard}>
        <span className={styles.post}>
          <span className={styles.postCount}>{props.postCount}</span>
          {"  "}
          {"posts"}
        </span>
        <span className={styles.followers}>
          <span className={styles.followersCount}>{props.followersCount}</span>
          {"  "}
          {"followers"}
        </span>
      </div>
      <div className={styles.captionCard}>
        <span className={styles.channelCaption}>{props.channelCaption}</span>
      </div>
    </div>
  </div>
);

UserListPresenter.propTypes = {
  channelCaption: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  postCount: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};
export default UserListPresenter;
