import React, { Component } from "react";
import NavigationPresenter from "./NavigationPresenter";

class NavigationContainer extends Component {
  state = {
    isMenuOpen: false,
    searchTerm: ""
  };
  render() {
    const { isMenuOpen, searchTerm } = this.state;
    return (
      <NavigationPresenter
        {...this.props}
        isMenuOpen={isMenuOpen}
        toggleMenu={this._toggleMenu}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        searchTerm={searchTerm}
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
}

export default NavigationContainer;
