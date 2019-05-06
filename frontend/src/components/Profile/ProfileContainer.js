import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfilePresenter from "./ProfilePresenter";

class ProfileContainer extends Component {
  state = {
    loading: true
  };

  static propTypes = {
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
    const { loading } = this.state;
    const { yourProfile } = this.props;
    return <ProfilePresenter loading={loading} yourProfile={yourProfile} />;
  }
}

export default ProfileContainer;
