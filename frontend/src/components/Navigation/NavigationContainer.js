import React, { Component } from "react";
import NavigationPresenter from "./NavigationPresenter";

class NavigationContainer extends Component {
  state = {
    isMenuOpen: false,
    searchTerm: "",
    seeingNotices: false
  };
  render() {
    const { isMenuOpen, searchTerm, seeingNotices } = this.state;
    return (
      <NavigationPresenter
        {...this.props}
        isMenuOpen={isMenuOpen}
        toggleMenu={this._toggleMenu}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        searchTerm={searchTerm}
        seeingNotices={seeingNotices}
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
