import React, { Component } from "react";
import NavigationPresenter from "./NavigationPresenter";

class NavigationContainer extends Component {
  state = {
    isMenuOpen: false,
    searchTerm: "",
    seeingNotices: false,
    isSettingOpen: false,
    seeingStream: false
  };
  render() {
    const {
      isMenuOpen,
      searchTerm,
      seeingNotices,
      isSettingOpen,
      seeingStream
    } = this.state;
    return (
      <NavigationPresenter
        {...this.props}
        isMenuOpen={isMenuOpen}
        toggleMenu={this._toggleMenu}
        toggleSetting={this._toggleSetting}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        searchTerm={searchTerm}
        seeingNotices={seeingNotices}
        isSettingOpen={isSettingOpen}
        seeingStream={seeingStream}
        toggleStream={this._toggleStream}
        openNoticeList={this._openNoticeList}
        closeNoticeList={this._closeNoticeList}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  _handleSubmit = event => {
    const { searchTerm } = this.state;
    const { goToSearch } = this.props;
    event.preventDefault();
    goToSearch(searchTerm);
  };

  _toggleMenu = () => {
    this.setState(state => {
      return {
        isMenuOpen: !state.isMenuOpen
      };
    });
  };

  _toggleSetting = () => {
    this.setState(state => {
      return {
        isSettingOpen: !state.isSettingOpen
      };
    });
  };

  _toggleStream = () => {
    this.setState(state => {
      return {
        seeingStream: !state.seeingStream
      };
    });
  };

  _openNoticeList = () => {
    const { getNotification } = this.props;
    this.setState({
      seeingNotices: true
    });
    getNotification();
  };

  _closeNoticeList = () => {
    this.setState({
      seeingNotices: false
    });
  };
}

export default NavigationContainer;
