import React from "react";
import formStyles from "../../shared/formStyles.module.scss";
import FacebookLogin from "react-facebook-login";

const LoginFormPresenter = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={null}>
      <input
        type={"text"}
        name={"username"}
        placeholder={"Username"}
        className={formStyles.textInput}
        value={null}
        onChange={null}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        className={formStyles.textInput}
        value={null}
        onChange={null}
      />
      <input type={"submit"} value={"로그인"} className={formStyles.button} />
    </form>
    <span className={formStyles.divider}>or</span>
    <FacebookLogin
      appId="392495391566342"
      autoLoad={false}
      fields="name,email,picture"
      cssClass={formStyles.facebookLink}
      callback={null}
      icon={"fa-facebook-square"}
      textButton={"페이스북으로 로그인"}
    />
    <span className={formStyles.forgotLink}>{"비밀번호를 잊으셨나요?"}</span>
  </div>
);

export default LoginFormPresenter;
