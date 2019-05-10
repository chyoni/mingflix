import React, { Component } from "react";
import AnonymousProfilePresenter from "./AnonymousProfilePresenter";
import PropTypes from "prop-types";

class AnonymousProfileContainer extends Component {
  state = {
    loading: true
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
    const { loading } = this.state;
    const { anonymousUser, username } = this.props;
    return (
      <AnonymousProfilePresenter
        loading={loading}
        amProfile={anonymousUser}
        username={username}
      />
    );
  }
}

export default AnonymousProfileContainer;
