import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import QuitStream from "../QuitStream";

const LivePresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : (
    <div className={styles.detailStreaming}>
      <Helmet>
        <title>Mingflix | 스트리밍</title>
      </Helmet>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link
            to={`/anonyprofile/${props.userByStreamKey.username}/`}
            className={styles.link}
          >
            <div className={styles.userInfo}>
              <img
                src={
                  props.userByStreamKey.profile_image ||
                  require("../../images/noPhoto.jpg")
                }
                alt={props.userByStreamKey.username}
                className={styles.profileImage}
              />
              <div className={styles.headerColumn}>
                <span className={styles.creator}>
                  {props.userByStreamKey.username}
                </span>
              </div>
            </div>
          </Link>
          <div className={styles.more}>
            {props.currentUser === props.userByStreamKey.username && (
              <button className={styles.button} onClick={props.toggleQuitFunc}>
                {"종료"}
              </button>
            )}
            {props.toggleQuit && (
              <QuitStream
                toggleQuitFunc={props.toggleQuitFunc}
                quitStream={props.quitStream}
              />
            )}
          </div>
        </header>
        <div className={styles.streaming}>
          <a href="http://110.47.6.140:8080">
            <video
              controls
              preload="auto"
              width={"898"}
              height={"700"}
              poster={props.userByStreamKey.streamings[0].poster}
              data-setup="{}"
            >
              <source
                src={`rtmp://110.47.6.140:1935/live/${props.streamKey}`}
                type={"rtmp/flv"}
              />
            </video>
          </a>
        </div>
        <div className={styles.meta}>
          <div className={styles.titleColumn}>
            <span className={styles.title}>
              {props.userByStreamKey.streamings[0].title}
            </span>
            <span className={styles.description}>
              {props.userByStreamKey.streamings[0].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

LivePresenter.propTypes = {
  userByStreamKey: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  streamKey: PropTypes.string.isRequired,
  toggleQuit: PropTypes.bool.isRequired,
  toggleQuitFunc: PropTypes.func.isRequired,
  quitStream: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
};

export default LivePresenter;
