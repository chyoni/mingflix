import React, { Component } from "react";
import PropTypes from "prop-types";
import SignUpFormPresenter from "./SignUpFormPresenter";

class SignUpFormContainer extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };

  render() {
    const { username, name, email, password } = this.state;
    return (
      <SignUpFormPresenter
        username={username}
        name={name}
        email={email}
        password={password}
        handleSubmit={this._handleSubmit}
        handleInputChange={this._handleInputChange}
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

  _handleSubmit = event => {
    const { username, password, email, name } = this.state;
    const { createAccount } = this.props;
    event.preventDefault();
    createAccount(username, password, email, name);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default SignUpFormContainer;
