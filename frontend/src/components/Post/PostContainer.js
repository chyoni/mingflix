import React, { Component } from "react";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";

class PostContainer extends Component {
  state = {
    file: null,
    poster: null,
    title: "",
    tags: "",
    description: ""
  };
  static propTypes = {
    postVideo: PropTypes.func.isRequired
  };
  render() {
    const { file, poster, title, tags, description } = this.state;
    return (
      <PostPresenter
        file={file}
        poster={poster}
        title={title}
        tags={tags}
        description={description}
        fileOnChange={this._fileOnChange}
        posterOnChange={this._posterOnChange}
        handleInputChange={this._handleInputChange}
        handleOnSubmit={this._handleOnSubmit}
      />
    );
  }

  _fileOnChange = file => {
    this.setState({
      file: file.target.files[0]
    });
  };

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
      postVideo,
      history: { push }
    } = this.props;
    const { file, poster, title, tags, description } = this.state;
    const tagsChild = await tags.split(",");
    const submitTags = await JSON.stringify(tagsChild);
    await postVideo(file, poster, title, submitTags, description);
    setTimeout(() => {
      push(`/profile`);
    }, 2500);
  };
}

export default PostContainer;
