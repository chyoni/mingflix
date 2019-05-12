import React, { Component } from "react";
import PropTypes from "prop-types";
import UpdatePresenter from "./UpdatePresenter";

class UpdateContainer extends Component {
  state = {
    loading: true,
    poster: null,
    title: "",
    tags: "",
    description: ""
  };
  static propTypes = {
    updateVideo: PropTypes.func.isRequired,
    getVideo: PropTypes.func.isRequired,
    video: PropTypes.object
  };

  componentDidMount() {
    const { getVideo } = this.props;
    getVideo();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.video) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading, poster, title, tags, description } = this.state;
    const { video } = this.props;
    return (
      <UpdatePresenter
        video={video}
        loading={loading}
        handleOnSubmit={this._handleOnSubmit}
        poster={poster}
        title={title}
        tags={tags}
        description={description}
        posterOnChange={this._posterOnChange}
        handleInputChange={this._handleInputChange}
      />
    );
  }

  _posterOnChange = poster => {
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
      updateVideo,
      history: { push }
    } = this.props;
    const { poster, title, tags, description } = this.state;
    const tagsChild = await tags.split(",");
    const submitTags = await JSON.stringify(tagsChild);
    await updateVideo(poster, title, submitTags, description);
    setTimeout(() => {
      push(`/profile`);
    }, 2500);
  };
}

export default UpdateContainer;
