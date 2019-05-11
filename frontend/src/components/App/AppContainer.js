import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class AppContainer extends Component {
  render() {
    return (
      <>
        <AppPresenter {...this.props} />
        <ToastContainer
          draggable={true}
          position={"bottom-center"}
          autoClose={2500}
        />
      </>
    );
  }
}

export default AppContainer;
