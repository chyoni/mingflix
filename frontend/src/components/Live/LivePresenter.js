import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import "./Live.css";
import Loading from "../Loading";
import QuitStream from "../QuitStream";

const LivePresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : (
    <div className={"live-detail-streaming"}>
      <Helmet>
        <title>Mingflix | 스트리밍</title>
      </Helmet>
      <div className={"live-container"}>
        <header className={"live-header"}>
          <Link
            to={`/anonyprofile/${props.userByStreamKey.username}/`}
            className={"live-link"}
          >
            <div className={"live-user-info"}>
              <img
                src={
                  props.userByStreamKey.profile_image ||
                  require("../../images/noPhoto.jpg")
                }
                alt={props.userByStreamKey.username}
                className={"live-profile-image"}
              />
              <div className={"live-header-column"}>
                <span className={"live-creator"}>
                  {props.userByStreamKey.username}
                </span>
              </div>
            </div>
          </Link>
          <div className={"live-more"}>
            {props.currentUser === props.userByStreamKey.username && (
              <button className={"live-button"} onClick={props.toggleQuitFunc}>
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
        S
        <div className={"live-streaming-container"}>
          {/* <a href="http://110.47.6.140:8080"> */}
          <video
            id="my_video_1"
            className="video-js vjs-default-skin vjs-big-play-centered"
            controls
            preload={"auto"}
            width={"898"}
            height={"700"}
            // poster={props.userBytreamKey.streamings[0].poster}
            data-setup="{}"
          >
            <source
              src={`rtmp://110.47.6.140:1935/live/${props.streamKey}`}
              type={"rtmp/flv"}
            />
          </video>
          {/* </a> */}
        </div>
        <div className={"live-meta"}>
          <div className={"live-title-column"}>
            <span className={"live-title"}>
              {props.userByStreamKey.streamings[0].title}
            </span>
            <span className={"live-description"}>
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
