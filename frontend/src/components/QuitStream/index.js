import React from "react";
import "./QuitStream.css";
import PropTypes from "prop-types";

const QuitStream = props => {
  return (
    <div className={"quit-container"}>
      <div className={"quit-box"}>
        <header className={"quit-header"}>
          <h4 className={"quit-title"}>{"종료하시겠습니까?"}</h4>
        </header>
        <div className={"quit-column"}>
          <span className={"quit-quit"} onClick={props.quitStream}>
            {"스트리밍 종료"}
          </span>
          <span className={"quit-close"} onClick={props.toggleQuitFunc}>
            {"취소"}
          </span>
        </div>
      </div>
    </div>
  );
};

QuitStream.propTypes = {
  toggleQuitFunc: PropTypes.func.isRequired,
  quitStream: PropTypes.func.isRequired
};

export default QuitStream;
