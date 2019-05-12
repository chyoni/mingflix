import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentPresenter from "./CommentPresenter";

class CommentContainer extends Component {
  static propTypes = {
    moderateComment: PropTypes.func.isRequired,
    commentId: PropTypes.number.isRequired,
    videoId: PropTypes.number.isRequired,
    creator: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
    postTime: PropTypes.string,
    videoCreator: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    deleteMyComment: PropTypes.func.isRequired
  };

  render() {
    const {
      creator,
      comment,
      profileImage,
      postTime,
      videoCreator,
      username
    } = this.props;
    return (
      <CommentPresenter
        creator={creator}
        comment={comment}
        profileImage={profileImage}
        postTime={postTime}
        currentCreator={username}
        commentCreator={creator}
        videoCreator={videoCreator}
        handleDeleteByVideoCreator={this._handleDeleteByVideoCreator}
        handleDeleteByCommentCreator={this._handleDeleteByCommentCreator}
      />
    );
  }

  _handleDeleteByVideoCreator = () => {
    const { moderateComment } = this.props;
    moderateComment();
    window.location.reload();
  };

  _handleDeleteByCommentCreator = () => {
    const { deleteMyComment } = this.props;
    deleteMyComment();
    window.location.reload();
  };
}

export default CommentContainer;
