import React from "react";
import "./Settings.css";
import PropTypes from "prop-types";
import CloseIcon from "react-ionicons/lib/MdClose";

const SettingsPresenter = props => {
  return (
    <div className={"settings-container"}>
      <div className={"settings-box"}>
        <header className={"settings-header"}>
          <h4 className={"settings-title"}>{"Settings"}</h4>
          <span className={"settings-close-icon"} onClick={props.clickToggle}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        <div className={"settings-contentbox"}>
          <span className={"settings-content"} onClick={null}>
            {"Change Password"}
          </span>
          <span className={"settings-content"} onClick={props.clickLogout}>
            {"Logout"}
          </span>
          <span className={"settings-content"} onClick={props.clickToggle}>
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
