import React from "react";
import "../../shared/formStyles.css";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const SignUpFormPresenter = props => (
  <div className={"fst-form-component"}>
    <form className={"fst-form"} onSubmit={props.handleSubmit}>
      <input
        type={"text"}
        name={"username"}
        placeholder={"Username"}
        onChange={props.handleInputChange}
        value={props.username}
        className={"fst-text-input"}
      />
      <input
        type={"text"}
        name={"name"}
        placeholder={"Name"}
        onChange={props.handleInputChange}
        value={props.name}
        className={"fst-text-input"}
      />
      <input
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        onChange={props.handleInputChange}
        value={props.email}
        className={"fst-text-input"}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        onChange={props.handleInputChange}
        value={props.password}
        className={"fst-text-input"}
      />
      <input type={"submit"} value={"회원가입"} className={"fst-button"} />
    </form>
    <span className={"fst-divider"}>or</span>
    <FacebookLogin
      appId="392495391566342"
      autoLoad={false}
      fields="name,email,picture"
      cssClass={"fst-facebook-link"}
      callback={props.handleFacebookLogin}
      icon={"fa-facebook-square"}
      textButton={"페이스북으로 로그인"}
    />
  </div>
);

SignUpFormPresenter.propTypes = {
  handleFacebookLogin: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SignUpFormPresenter;
