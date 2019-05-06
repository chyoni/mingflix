import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginFormPresenter from "./LoginFormPresenter";

class LoginFormContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    usernameLogin: PropTypes.func.isRequired,
    facebookLogin: PropTypes.func.isRequired
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginFormPresenter
        username={username}
        password={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };

  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password);
  };
}

export default LoginFormContainer;
