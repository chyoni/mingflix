import React, { Component } from "react";
import AuthPresenter from "./AuthPresenter";

class AuthContainer extends Component {
  state = {
    action: "login"
  };
  render() {
    return (
      <AuthPresenter
        {...this.props}
        changeAction={this._changeAction}
        action={this.state.action}
      />
    );
  }

  _changeAction = () => {
    this.setState(prevState => {
      const { action } = prevState;
      if (action === "login") {
        return {
          action: "signup"
        };
      } else if (action === "signup") {
        return {
          action: "login"
        };
      }
    });
  };
}

export default AuthContainer;
