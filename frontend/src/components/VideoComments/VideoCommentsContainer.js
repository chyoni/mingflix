import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoCommentsPresenter from "./VideoCommentsPresenter";

class VideoCommentsContainer extends Component {
  state = {
    seeCommentOp: false
  };

  static propTypes = {
    moderateComment: PropTypes.func.isRequired,
    comments: PropTypes.array,
    creator: PropTypes.string.isRequired,
    videoId: PropTypes.number.isRequired
  };
  render() {
    console.log(this.props);
    const { comments, creator, videoId } = this.props;
    const { seeCommentOp } = this.state;
    return (
      <VideoCommentsPresenter
        comments={comments}
        videoCreator={creator}
        videoId={videoId}
        seeCommentOp={seeCommentOp}
        toggleCommentOp={this._toggleCommentOp}
        deleteCommentByCreator={this._deleteCommentByCreator}
      />
    );
  }

  _toggleCommentOp = () => {
    this.setState(state => {
      return {
        seeCommentOp: !state.seeCommentOp
      };
    });
  };

  _deleteCommentByCreator = commentId => {
    const { moderateComment } = this.props;
    moderateComment(commentId);
  };
}

export default VideoCommentsContainer;
