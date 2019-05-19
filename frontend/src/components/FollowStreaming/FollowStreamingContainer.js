import React, { Component } from "react";
import PropTypes from "prop-types";
import FollowStreamingPresenter from "./FollowStreamingPresenter";

class FollowStreamingContainer extends Component {
  static propTypes = {
    followingsStreaming: PropTypes.arrayOf(
      PropTypes.shape({
        creator: PropTypes.object.isRequired,
        description: PropTypes.string,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
      })
    )
  };

  render() {
    const { followingsStreaming } = this.props;
    return (
      <FollowStreamingPresenter followingsStreaming={followingsStreaming} />
    );
  }
}

export default FollowStreamingContainer;
