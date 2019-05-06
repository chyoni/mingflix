import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IosMoon from "react-ionicons/lib/IosMoonOutline";
import IosNotification from "react-ionicons/lib/IosNotificationsOutline";
import IosVideoCam from "react-ionicons/lib/IosVideocamOutline";
import IosPerson from "react-ionicons/lib/IosPersonOutline";
import IosSetting from "react-ionicons/lib/IosSettingsOutline";
import IosMenu from "react-ionicons/lib/IosMenuOutline";

const NavigationPresenter = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <div className={styles.sidebar}>
          <IosMenu
            icon={"ios-menu-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <Link to={"/"}>
          <img
            src={require("../../images/mingflixlogo.png")}
            className={styles.logo}
            alt={"Logo"}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <form onSubmit={null}>
          <input
            type={"text"}
            placeholder={context.t("Search")}
            className={styles.searchInput}
            onChange={null}
            value={null}
          />
        </form>
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <IosMoon
            icon={"ios-moon-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <div className={styles.navIcon}>
          <IosNotification
            icon={"ios-notification-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <div className={styles.navIcon}>
          <IosVideoCam
            icon={"ios-videocam-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <div className={styles.navIcon}>
          <Link to={"/profile"}>
            <IosPerson
              icon={"ios-person-outline"}
              fontSize={"30px"}
              color={"black"}
            />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <IosSetting
            icon={"ios-setting-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
      </div>
    </div>
  </div>
);

NavigationPresenter.contextTypes = {
  t: PropTypes.func.isRequired
};

export default NavigationPresenter;
