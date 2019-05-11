import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import CloseIcon from "react-ionicons/lib/MdClose";

const SettingsPresenter = props => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{"Settings"}</h4>
          <span className={styles.closeIcon} onClick={props.clickToggle}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        <div className={styles.contentbox}>
          <span className={styles.content} onClick={null}>
            {"Change Password"}
          </span>
          <span className={styles.content} onClick={props.clickLogout}>
            {"Logout"}
          </span>
          <span className={styles.content} onClick={props.clickToggle}>
            {"Cancel"}
          </span>
        </div>
      </div>
    </div>
  );
};

SettingsPresenter.propTypes = {
  clickToggle: PropTypes.func.isRequired,
  clickLogout: PropTypes.func.isRequired
};

export default SettingsPresenter;
