import React from "react";
import formStyles from "../../shared/formStyles.module.scss";
import FacebookLogin from "react-facebook-login";

const SignUpFormPresenter = () => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={null}>
      <input
        type={"text"}
        name={"username"}
        placeholder={"Username"}
        onChange={null}
        value={null}
        className={formStyles.textInput}
      />
      <input
        type={"text"}
        name={"name"}
        placeholder={"Name"}
        onChange={null}
        value={null}
        className={formStyles.textInput}
      />
      <input
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        onChange={null}
        value={null}
        className={formStyles.textInput}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        onChange={null}
        value={null}
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
      callback={null}
      icon={"fa-facebook-square"}
      textButton={"페이스북으로 로그인"}
    />
  </div>
);

export default SignUpFormPresenter;
