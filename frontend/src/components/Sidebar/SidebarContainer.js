import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarPresenter from "./SidebarPresenter";

class SidebarContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    followingList: PropTypes.array,
    myFollowingList: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    getProfile: PropTypes.func.isRequired,
    yourProfile: PropTypes.object
  };
  componentDidMount() {
    const { myFollowingList, username, getProfile } = this.props;
    myFollowingList(username);
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.followingList && nextProps.yourProfile) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { followingList, yourProfile } = this.props;
    const { loading } = this.state;
    console.log(this.props);
    return (
      <SidebarPresenter
        followingList={followingList}
        loading={loading}
        yourProfile={yourProfile}
      />
    );
  }
}

export default SidebarContainer;
