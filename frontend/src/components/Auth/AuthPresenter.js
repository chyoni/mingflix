import React from "react";
import styles from "./styles.module.scss";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const AuthPresenter = props => (
  <div className={styles.container}>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("../../images/loginlogo.png")} alt={"mingflix"} />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignUpForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            {"계정이 없으신가요?"}{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {"회원가입"}
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            {"계정이 있으신가요?"}{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {"로그인"}
            </span>
          </p>
        )}
      </div>
    </div>
  </div>
);

export default AuthPresenter;
