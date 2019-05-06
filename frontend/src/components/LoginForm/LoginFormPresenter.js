import React from "react";
import formStyles from "../../shared/formStyles.module.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const LoginFormPresenter = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type={"text"}
        name={"username"}
        placeholder={"Username"}
        className={formStyles.textInput}
        value={props.username}
        onChange={props.handleInputChange}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        className={formStyles.textInput}
        value={props.password}
        onChange={props.handleInputChange}
      />
      <input type={"submit"} value={"로그인"} className={formStyles.button} />
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
    <span className={formStyles.forgotLink}>{"비밀번호를 잊으셨나요?"}</span>
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
