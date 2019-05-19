import React, { Component } from "react";
import PropTypes from "prop-types";
import SettingsPresenter from "./SettingsPresenter";

class SettingsContainer extends Component {
  static propTypes = {
    toggleSetting: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    goToHome: PropTypes.func.isRequired
  };
  render() {
    console.log(this.props);
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

  _clickLogout = async () => {
    const { logout, goToHome } = this.props;
    await goToHome();
    await logout();
    window.location.reload();
  };
}

export default SettingsContainer;
