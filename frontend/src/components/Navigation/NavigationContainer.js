import React, { Component } from "react";
import NavigationPresenter from "./NavigationPresenter";

class NavigationContainer extends Component {
  state = {
    isMenuOpen: false
  };
  render() {
    const { isMenuOpen } = this.state;
    return (
      <NavigationPresenter
        {...this.props}
        isMenuOpen={isMenuOpen}
        toggleMenu={this._toggleMenu}
      />
    );
  }

  _toggleMenu = () => {
    this.setState(state => {
      return {
        isMenuOpen: !state.isMenuOpen
      };
    });
  };
}

export default NavigationContainer;
