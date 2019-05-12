import React, { Component } from "react";
import PropTypes from "prop-types";
import FollowingsBoxPresenter from "./FollowingsBoxPresenter";

class FollowingsBoxContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    toggleFollowings: PropTypes.func.isRequired,
    followingList: PropTypes.array,
    getFollowingList: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { getFollowingList, username } = this.props;
    getFollowingList(username);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.followingList) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading } = this.state;
    const { toggleFollowings, followingList } = this.props;
    return (
      <FollowingsBoxPresenter
        loading={loading}
        toggleFollowings={toggleFollowings}
        followingList={followingList}
      />
    );
  }
}

export default FollowingsBoxContainer;
