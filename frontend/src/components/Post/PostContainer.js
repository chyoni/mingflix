import React, { Component } from "react";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";

class PostContainer extends Component {
  state = {
    file: null,
    poster: null,
    title: "",
    tags: "",
    description: "",
    loading: true
  };
  static propTypes = {
    postVideo: PropTypes.func.isRequired,
    yourProfile: PropTypes.object,
    getProfile: PropTypes.func.isRequired
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
    const { file, poster, title, tags, description, loading } = this.state;
    const { yourProfile } = this.props;
    return (
      <PostPresenter
        file={file}
        poster={poster}
        title={title}
        tags={tags}
        loading={loading}
        description={description}
        fileOnChange={this._fileOnChange}
        posterOnChange={this._posterOnChange}
        handleInputChange={this._handleInputChange}
        handleOnSubmit={this._handleOnSubmit}
        yourProfile={yourProfile}
        goCraeteFunc={this._goCraeteFunc}
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

  _goCraeteFunc = () => {
    const {
      history: { push }
    } = this.props;
    push("/create");
  };
}

export default PostContainer;
