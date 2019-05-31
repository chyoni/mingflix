import React from "react";
import Helmet from "react-helmet";
import "./Auth.css";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const AuthPresenter = props => (
  <div className={"auth-container"}>
    <Helmet>
      <title>Mingflix | 로그인 및 회원가입</title>
    </Helmet>
    <div className={"auth-column"}>
      <div className={`${"auth-white-box"} ${"auth-form-box"}`}>
        <img
          src={require("../../images/loginlogo.png")}
          alt={"mingflix"}
          className={"auth-img"}
        />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignUpForm />}
      </div>
      <div className={"auth-white-box"}>
        {props.action === "login" && (
          <p className={"auth-p"}>
            {"계정이 없으신가요?"}{" "}
            <span onClick={props.changeAction} className={"auth-change-link"}>
              {"회원가입"}
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p className={"auth-p"}>
            {"계정이 있으신가요?"}{" "}
            <span onClick={props.changeAction} className={"auth-change-link"}>
              {"로그인"}
            </span>
          </p>
        )}
      </div>
    </div>
  </div>
);

export default AuthPresenter;
