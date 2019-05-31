import React from "react";
import "../../shared/formStyles.css";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const LoginFormPresenter = props => (
  <div className={"fst-form-component"}>
    <form className={"fst-form"} onSubmit={props.handleSubmit}>
      <input
        type={"text"}
        name={"username"}
        placeholder={"Username"}
        className={"fst-text-input"}
        value={props.username}
        onChange={props.handleInputChange}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        className={"fst-text-input"}
        value={props.password}
        onChange={props.handleInputChange}
      />
      <input type={"submit"} value={"로그인"} className={"fst-button"} />
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
    <span className={"fst-forgot-link"}>{"비밀번호를 잊으셨나요?"}</span>
  </div>
);

LoginFormPresenter.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default LoginFormPresenter;
