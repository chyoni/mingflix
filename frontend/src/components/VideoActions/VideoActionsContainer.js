import React, { Component } from "react";
import VideoActionsPresenter from "./VideoActionsPresenter";

class VideoActionsContainer extends Component {
  render() {
    return <VideoActionsPresenter {...this.props} />;
  }
}

export default VideoActionsContainer;
