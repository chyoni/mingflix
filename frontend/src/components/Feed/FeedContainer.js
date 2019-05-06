import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedPresenter from "./FeedPresenter";

class FeedContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getHotVideos: PropTypes.func.isRequired,
    getFollowingsVideos: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getHotVideos, getFollowingsVideos } = this.props;
    if (!this.props.hotVideos && !this.props.followingsVideos) {
      getHotVideos();
      getFollowingsVideos();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.hotVideos) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { hotVideos, followingsVideo } = this.props;
    console.log(this.state.loading);
    return (
      <FeedPresenter
        loading={this.state.loading}
        hotVideos={hotVideos}
        followingsVideo={followingsVideo}
      />
    );
  }
}

export default FeedContainer;
