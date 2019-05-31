import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IosNotification from "react-ionicons/lib/IosNotificationsOutline";
import IosVideoCam from "react-ionicons/lib/IosVideocamOutline";
import IosPerson from "react-ionicons/lib/IosPersonOutline";
import IosSetting from "react-ionicons/lib/IosSettingsOutline";
import IosMenu from "react-ionicons/lib/IosMenuOutline";
import Notification from "../Notification";
import Settings from "../Settings";
import Sidebar from "../Sidebar";
import StreamBoard from "../StreamBoard";

const NavigationPresenter = (props, context) => (
  <div className={"navigation-navigation"}>
    <div className={"navigation-inner"}>
      <div className={"navigation-column"}>
        <div className={"navigation-sidebar"} onClick={props.toggleMenu}>
          <IosMenu
            icon={"ios-menu-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <Link to={"/"}>
          <img
            src={require("../../images/mingflixlogo.png")}
            className={"navigation-logo"}
            alt={"Logo"}
          />
        </Link>
      </div>
      <div className={"navigation-column"}>
        <form onSubmit={props.handleSubmit}>
          <input
            type={"text"}
            placeholder={context.t("Search")}
            className={"navigation-search-input"}
            onChange={props.handleInputChange}
            value={props.searchTerm}
          />
        </form>
      </div>
      <div className={"navigation-column"}>
        <div className={"navigation-nav-icon"} onClick={props.openNoticeList}>
          <IosNotification
            icon={"ios-notification-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <div className={"navigation-nav-icon"} onClick={props.toggleStream}>
          <IosVideoCam
            icon={"ios-videocam-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        <div className={"navigation-nav-icon"}>
          <Link to={"/profile"}>
            <IosPerson
              icon={"ios-person-outline"}
              fontSize={"30px"}
              color={"black"}
            />
          </Link>
        </div>
        <div className={"navigation-nav-icon"} onClick={props.toggleSetting}>
          <IosSetting
            icon={"ios-setting-outline"}
            fontSize={"30px"}
            color={"black"}
          />
        </div>
        {props.seeingNotices && (
          <Notification closeNoticeList={props.closeNoticeList} />
        )}
        {props.isSettingOpen && (
          <Settings toggleSetting={props.toggleSetting} />
        )}
        {props.isMenuOpen && <Sidebar />}
        {props.seeingStream && (
          <StreamBoard toggleStream={props.toggleStream} />
        )}
      </div>
    </div>
  </div>
);

NavigationPresenter.contextTypes = {
  t: PropTypes.func.isRequired
};

NavigationPresenter.propTypes = {
  seeingNotices: PropTypes.bool.isRequired,
  openNoticeList: PropTypes.func.isRequired,
  closeNoticeList: PropTypes.func.isRequired,
  toggleSetting: PropTypes.func.isRequired,
  isSettingOpen: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  seeingStream: PropTypes.bool.isRequired,
  toggleStream: PropTypes.func.isRequired
};

export default NavigationPresenter;
