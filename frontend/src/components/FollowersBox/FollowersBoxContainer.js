import React, { Component } from "react";
import PropTypes from "prop-types";
import FollowersBoxPresenter from "./FollowersBoxPresenter";

class FollowersBoxContainer extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    followerList: PropTypes.array,
    getFollowerList: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    toggleFollowers: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { username, getFollowerList } = this.props;
    getFollowerList(username);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.followerList) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading } = this.state;
    const { followerList, toggleFollowers } = this.props;
    return (
      <FollowersBoxPresenter
        toggleFollowers={toggleFollowers}
        loading={loading}
        followerList={followerList}
      />
    );
  }
}

export default FollowersBoxContainer;
