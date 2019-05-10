import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import VideoActions from "../VideoActions";
import CommentBox from "../CommentBox";
import VideoComments from "../VideoComments";
import { Link } from "react-router-dom";

const DetailPresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : (
    <div className={styles.detailVideo}>
      <div className={styles.container}>
        <Link
          to={`/anonyprofile/${props.video.creator.username}/`}
          className={styles.link}
        >
          <header className={styles.header}>
            <img
              src={
                props.video.creator.profile_image ||
                require("../../images/noPhoto.jpg")
              }
              alt={props.video.creator.username}
              className={styles.profileImage}
            />
            <div className={styles.headerColumn}>
              <span className={styles.creator}>
                {props.video.creator.username}
              </span>
            </div>
          </header>
        </Link>
        <div className={styles.video}>
          <video
            controls={"controls"}
            preload={"none"}
            width={"898"}
            height={"700"}
            poster={props.video.poster}
          >
            <source id={"mp4"} src={props.video.file} type={"video/mp4"} />
            <source id={"webm"} src={props.video.file} type={"video/webm"} />
            <source id={"ogv"} src={props.video.file} type={"video/ogg"} />
          </video>
        </div>
        <div className={styles.meta}>
          <div className={styles.titleColumn}>
            <span className={styles.title}>{props.video.title}</span>
            <span className={styles.views}>
              {"조회수: "}
              {props.video.views}
              {"회"}
            </span>
          </div>
          <div className={styles.timeColumn}>
            <span className={styles.postTime}>
              {"게시일: "}
              {props.video.natural_time}
            </span>
          </div>
          <VideoActions
            likeCount={props.video.like_count}
            isLiked={props.video.is_liked}
            videoId={props.video.id}
            commentCount={props.video.comment_count}
            // openLikes={props.openLikes}
          />
          <CommentBox
            videoId={props.video.id}
            profileImage={props.yourProfile.profile_image}
            creator={props.yourProfile.username}
          />
          <VideoComments comments={props.video.comments} />
        </div>
      </div>
    </div>
  );
};

DetailPresenter.propTypes = {
  video: PropTypes.object
};

export default DetailPresenter;
