import React from "react";
import Loading from "../Loading";
import styles from "./styles.module.scss";

const ProfilePresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={
            props.yourProfile.profile_image ||
            require("../../images/noPhoto.jpg")
          }
          alt={props.yourProfile.username}
          className={styles.profileImage}
        />
        <span className={styles.username}>{props.yourProfile.username}</span>
      </div>
    </div>
  );
};

export default ProfilePresenter;
