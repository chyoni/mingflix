import React from "react";
import formStyles from "../../shared/formStyles.module.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const SignUpFormPresenter = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type={"text"}
        name={"username"}
        placeholder={"Username"}
        onChange={props.handleInputChange}
        value={props.username}
        className={formStyles.textInput}
      />
      <input
        type={"text"}
        name={"name"}
        placeholder={"Name"}
        onChange={props.handleInputChange}
        value={props.name}
        className={formStyles.textInput}
      />
      <input
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        onChange={props.handleInputChange}
        value={props.email}
        className={formStyles.textInput}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        onChange={props.handleInputChange}
        value={props.password}
        className={formStyles.textInput}
      />
      <input type={"submit"} value={"회원가입"} className={formStyles.button} />
    </form>
    <span className={formStyles.divider}>or</span>
    <FacebookLogin
      appId="392495391566342"
      autoLoad={false}
      fields="name,email,picture"
      cssClass={formStyles.facebookLink}
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
