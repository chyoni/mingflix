import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentBoxPresenter from "./CommentBoxPresenter";

class CommentBoxContainer extends Component {
  state = {
    comment: ""
  };
  static propTypes = {
    username: PropTypes.object.isRequired,
    submitComment: PropTypes.func.isRequired,
    videoId: PropTypes.number.isRequired,
    profileImage: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <CommentBoxPresenter
        {...this.state}
        {...this.props}
        handleInputChange={this._handleInputChange}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  _handleKeyPress = event => {
    const { key } = event;
    const { submitComment } = this.props;
    const { comment } = this.state;
    if (key === "Enter") {
      event.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ""
      });
      window.location.reload();
    }
  };
}

export default CommentBoxContainer;
