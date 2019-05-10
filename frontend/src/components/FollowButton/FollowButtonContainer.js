import React, { Component } from "react";
import PropTypes from "prop-types";
import FollowButtonPresenter from "./FollowButtonPresenter";

class FollowButtonContainer extends Component {
  state = {
    is_follow: this.props.isFollowing
  };
  static propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  };
  render() {
    const { is_follow } = this.state;
    return (
      <FollowButtonPresenter
        isFollowing={is_follow}
        clickButton={this._clickButton}
      />
    );
  }

  _clickButton = () => {
    const { handleClick } = this.props;
    handleClick();
    this.setState({
      is_follow: !this.state.is_follow
    });
  };
}

export default FollowButtonContainer;
