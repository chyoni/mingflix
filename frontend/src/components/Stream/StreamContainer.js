import React, { Component } from "react";
import StreamPresenter from "./StreamPresenter";
import PropTypes from "prop-types";

class StreamContainer extends Component {
  state = {
    title: "",
    description: "",
    poster: null,
    loading: true
  };

  static propTypes = {
    getStartStream: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    yourProfile: PropTypes.object
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.yourProfile) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { title, description, poster, loading } = this.state;
    return (
      <StreamPresenter
        title={title}
        loading={loading}
        description={description}
        poster={poster}
        handleInputChange={this._handleInputChange}
        handlePosterChange={this._handlePosterChange}
        handleOnSubmit={this._handleOnSubmit}
      />
    );
  }

  _handlePosterChange = poster => {
    this.setState({
      poster: poster.target.files[0]
    });
  };

  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleOnSubmit = async () => {
    const {
      getStartStream,
      yourProfile: {
        channel: { stream_key }
      },
      history: { push }
    } = this.props;
    const { title, description, poster } = this.state;
    await getStartStream(title, description, poster);
    setTimeout(() => {
      push(`/live/${stream_key}`);
    }, 2500);
  };
}

export default StreamContainer;
