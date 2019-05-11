import React, { Component } from "react";
import PropTypes from "prop-types";
import SettingsPresenter from "./SettingsPresenter";

class SettingsContainer extends Component {
  static propTypes = {
    toggleSetting: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
  };
  render() {
    return (
      <SettingsPresenter
        clickToggle={this._clickToggle}
        clickLogout={this._clickLogout}
      />
    );
  }

  _clickToggle = () => {
    const { toggleSetting } = this.props;
    toggleSetting();
  };

  _clickLogout = () => {
    const { logout } = this.props;
    logout();
  };
}

export default SettingsContainer;
