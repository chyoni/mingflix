import React, { Component } from "react";
import AnonymousProfilePresenter from "./AnonymousProfilePresenter";
import PropTypes from "prop-types";

class AnonymousProfileContainer extends Component {
  state = {
    loading: true,
    seeFollowers: false,
    seeFollowings: false
  };

  static propTypes = {
    anonymousUser: PropTypes.object,
    username: PropTypes.string.isRequired,
    getAmProfile: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { getAmProfile } = this.props;
    getAmProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    const { getAmProfile } = this.props;
    if (prevProps.match.params !== this.props.match.params) {
      getAmProfile();
    }
  }

  componentWillReceiveProps = nextProps => {
    const {
      location: { pathname },
      getAmProfile
    } = this.props;
    if (nextProps.anonymousUser) {
      this.setState({
        loading: false
      });
    }
    if (nextProps.location.pathname !== pathname) {
      getAmProfile();
    }
  };
  render() {
    const { loading, seeFollowers, seeFollowings } = this.state;
    const { anonymousUser, username } = this.props;
    return (
      <AnonymousProfilePresenter
        loading={loading}
        seeFollowers={seeFollowers}
        seeFollowings={seeFollowings}
        amProfile={anonymousUser}
        username={username}
        toggleFollowers={this._toggleFollowers}
        toggleFollowings={this._toggleFollowings}
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
}

export default AnonymousProfileContainer;
