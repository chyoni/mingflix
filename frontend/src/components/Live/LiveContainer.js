import React, { Component } from "react";
import PropTypes from "prop-types";
import LivePresenter from "./LivePresenter";

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
    const { getUserByStreamKey } = this.props;
    getUserByStreamKey();
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
    console.log(this.props);
    return (
      <LivePresenter
        userByStreamKey={userByStreamKey}
        loading={loading}
        streamKey={streamKey}
        currentUser={username}
        toggleQuit={toggleQuit}
        toggleQuitFunc={this._toggleQuitFunc}
        quitStream={this._quitStream}
      />
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
