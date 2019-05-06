import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import PropTypes from "prop-types";

class DetailContainer extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    getVideo: PropTypes.func.isRequired,
    video: PropTypes.object.isRequired,
    getProfile: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getVideo, getProfile } = this.props;
    getVideo();
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.video && nextProps.yourProfile) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { video } = this.props;
    const { loading } = this.state;
    return <DetailPresenter video={video} loading={loading} {...this.props} />;
  }
}

export default DetailContainer;
