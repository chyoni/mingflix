import React, { Component } from "react";
import PropTypes from "prop-types";
import UserListPresenter from "./UserListPresenter";

class UserListContainer extends Component {
  static propTypes = {
    channelCaption: PropTypes.string,
    followersCount: PropTypes.number,
    postCount: PropTypes.number,
    username: PropTypes.string,
    profileImage: PropTypes.string
  };
  render() {
    const {
      channelCaption,
      followersCount,
      postCount,
      username,
      profileImage
    } = this.props;
    return (
      <UserListPresenter
        channelCaption={channelCaption}
        followersCount={followersCount}
        postCount={postCount}
        username={username}
        profileImage={profileImage}
      />
    );
  }
}

export default UserListContainer;
