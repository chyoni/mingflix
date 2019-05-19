import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePresenter from "./ProfilePresenter";

class ProfileContainer extends Component {
  state = {
    loading: true,
    seeFollowers: false,
    seeFollowings: false
  };

  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    goToCreateChannel: PropTypes.func.isRequired
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
    const { loading, seeFollowers, seeFollowings } = this.state;
    const { yourProfile } = this.props;
    return (
      <ProfilePresenter
        loading={loading}
        yourProfile={yourProfile}
        seeFollowers={seeFollowers}
        seeFollowings={seeFollowings}
        toggleFollowers={this._toggleFollowers}
        toggleFollowings={this._toggleFollowings}
        goCraeteFunc={this._goCreateFunc}
      />
    );
  }

  _toggleFollowers = () => {
    this.setState(state => {
      return {
        seeFollowers: !state.seeFollowers
      };
    });
  };

  _toggleFollowings = () => {
    this.setState(state => {
      return {
        seeFollowings: !state.seeFollowings
      };
    });
  };

  _goCreateFunc = () => {
    const { goToCreateChannel } = this.props;
    goToCreateChannel();
  };
}

export default ProfileContainer;
