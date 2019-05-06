import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import HeartOutIcon from "react-ionicons/lib/IosHeartOutline";
import HeartIcon from "react-ionicons/lib/IosHeart";
import TextIcon from "react-ionicons/lib/IosTextOutline";

const VideoActionsPresenter = (props, context) => (
  <div className={styles.photoActions}>
    <div className={styles.iconColumn}>
      <span className={styles.icon} onClick={props.handleHeartClick}>
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
      <span className={styles.icon}>
        <TextIcon icon={"ios-text-outline"} fontSize={"28px"} color={"black"} />
      </span>
    </div>
    <div className={styles.likeCountColumn}>
      <span className={styles.likeCount} onClick={props.openLikes}>
        {props.likeCount} {props.likeCount === 1 ? "like" : "likes"}
      </span>
      <span className={styles.commentCount}>
        {props.commentCount} {"comments"}
      </span>
    </div>
  </div>
);

export default VideoActionsPresenter;
