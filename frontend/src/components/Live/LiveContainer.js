import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Loading from "../Loading";
import QuitStream from "../QuitStream";
import { Link } from "react-router-dom";
import "./Live.css";
import "videojs-flash";
class LiveContainer extends Component {
  state = {
    loading: true,
    toggleQuit: false
  };

  static propTypes = {
    getUserByStreamKey: PropTypes.func.isRequired,
    userByStreamKey: PropTypes.object,
    streamKey: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    getQuitStream: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getUserByStreamKey, streamKey } = this.props;
    console.log(this.props, this.state);
    getUserByStreamKey();
    if (!localStorage.getItem(`${streamKey}`)) {
      localStorage.setItem(`${streamKey}`, `${streamKey}`);
      window.location.reload();
    }
    setTimeout(() => {
      localStorage.removeItem(`${streamKey}`);
    }, 5000);
    // const link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href = "https://unpkg.com/video.js/dist/video-js.css";
    // document.head.appendChild(link);

    // const script = document.createElement("script");
    // script.src = "https://unpkg.com/video.js/dist/video.js";
    // document.body.appendChild(script);

    // const script2 = document.createElement("script");
    // script2.src = "https://unpkg.com/videojs-flash/dist/videojs-flash.js";
    // document.body.appendChild(script2);

    // const script3 = document.createElement("script");
    // script3.src =
    //   "https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js";
    // document.body.appendChild(script3);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.userByStreamKey) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { userByStreamKey, streamKey, username } = this.props;
    const { loading, toggleQuit } = this.state;
    return (
      <React.Fragment>
        <div className={"video-con"}>
          <video
            id="my_video_1"
            className="video-js vjs-default-skin vjs-big-play-centered"
            controls
            preload={"auto"}
            width={"1000"}
            height={"600"}
            //poster={props.userBytreamKey.streamings[0].poster}
            data-setup="{}"
          >
            <source
              src={`rtmp://110.47.6.140:1935/live/${streamKey}`}
              type={"rtmp/flv"}
            />
          </video>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className={"live-detail-streaming"}>
            <Helmet>
              <title>Mingflix | 스트리밍</title>
            </Helmet>
            <div className={"live-container"}>
              <header className={"live-header"}>
                <Link
                  to={`/anonyprofile/${userByStreamKey.username}/`}
                  className={"live-link"}
                >
                  <div className={"live-user-info"}>
                    <img
                      src={
                        userByStreamKey.profile_image ||
                        require("../../images/noPhoto.jpg")
                      }
                      alt={userByStreamKey.username}
                      className={"live-profile-image"}
                    />
                    <div className={"live-header-column"}>
                      <span className={"live-creator"}>
                        {userByStreamKey.username}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className={"live-more"}>
                  {username === userByStreamKey.username && (
                    <button
                      className={"live-button"}
                      onClick={this._toggleQuitFunc}
                    >
                      {"종료"}
                    </button>
                  )}
                  {toggleQuit && (
                    <QuitStream
                      toggleQuitFunc={this._toggleQuitFunc}
                      quitStream={this._quitStream}
                    />
                  )}
                </div>
              </header>
              <div className={"live-meta"}>
                <div className={"live-title-column"}>
                  <span className={"live-title"}>
                    {"Title :"}
                    {userByStreamKey.streamings[0].title}
                  </span>
                  <span className={"live-description"}>
                    {"Description : "}
                    {userByStreamKey.streamings[0].description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
      // <LivePresenter
      //   userByStreamKey={userByStreamKey}
      //   loading={loading}
      //   streamKey={streamKey}
      //   currentUser={username}
      //   toggleQuit={toggleQuit}
      //   toggleQuitFunc={this._toggleQuitFunc}
      //   quitStream={this._quitStream}
      // />
    );
  }

  _toggleQuitFunc = () => {
    this.setState(state => {
      return {
        toggleQuit: !state.toggleQuit
      };
    });
  };

  _quitStream = async () => {
    const {
      getQuitStream,
      userByStreamKey,
      history: { push }
    } = this.props;
    const streamId = userByStreamKey.streamings[0].id;
    await getQuitStream(streamId);
    setTimeout(() => {
      push("/");
    }, 2500);
  };
}

export default LiveContainer;
