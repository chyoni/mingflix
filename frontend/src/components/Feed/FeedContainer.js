import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedPresenter from "./FeedPresenter";

class FeedContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getHotVideos: PropTypes.func.isRequired,
    getFollowingsVideos: PropTypes.func.isRequired,
    getFollowingsStreaming: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {
      getHotVideos,
      getFollowingsVideos,
      getFollowingsStreaming
    } = this.props;
    if (
      !this.props.hotVideos ||
      !this.props.followingsVideo ||
      !this.props.followingsStreaming
    ) {
      getHotVideos();
      getFollowingsVideos();
      getFollowingsStreaming();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.hotVideos &&
      nextProps.followingsVideo &&
      nextProps.followingsStreaming
    ) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { hotVideos, followingsVideo, followingsStreaming } = this.props;
    return (
      <FeedPresenter
        loading={this.state.loading}
        hotVideos={hotVideos}
        followingsVideo={followingsVideo}
        followingsStreaming={followingsStreaming}
      />
    );
  }
}

export default FeedContainer;
