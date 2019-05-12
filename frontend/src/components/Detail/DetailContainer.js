import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import PropTypes from "prop-types";

class DetailContainer extends Component {
  state = {
    loading: true,
    isMoreOption: false
  };

  static propTypes = {
    getVideo: PropTypes.func.isRequired,
    video: PropTypes.object,
    getProfile: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    deleteVideo: PropTypes.func.isRequired
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
    const { video, username } = this.props;
    const { loading, isMoreOption } = this.state;
    return (
      <DetailPresenter
        video={video}
        loading={loading}
        currentUsername={username}
        isMoreOption={isMoreOption}
        toggleMoreOption={this._toggleMoreOption}
        handleDelete={this._handleDelete}
        {...this.props}
      />
    );
  }

  _toggleMoreOption = () => {
    this.setState(state => {
      return {
        isMoreOption: !state.isMoreOption
      };
    });
  };

  _handleDelete = () => {
    const {
      history: { push },
      deleteVideo
    } = this.props;
    deleteVideo();
    push(`/`);
  };
}

export default DetailContainer;
