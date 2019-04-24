import React, { Component } from "react";
import AppPresenter from "./AppPresenter";

class AppContainer extends Component {
  render() {
    return <AppPresenter {...this.props} />;
  }
}

export default AppContainer;
