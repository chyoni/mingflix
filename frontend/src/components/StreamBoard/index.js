import React from "react";
import "./StreamBoard.css";
import IosVideoCam from "react-ionicons/lib/IosVideocam";
import { Link } from "react-router-dom";

const StreamBoard = props => {
  return (
    <div className={"stream-board-container"}>
      <div className={"stream-board-box"}>
        <header className={"stream-board-header"}>
          <h4 className={"stream-board-title"}>{"Streaming"}</h4>
        </header>
        <Link to={"/stream"} className={"stream-board-link"}>
          <div className={"stream-board-content"} onClick={props.toggleStream}>
            <span className={"stream-board-icon"}>
              <IosVideoCam
                icon={"ios-video-cam"}
                fontSize={"25px"}
                color={"black"}
              />
            </span>
            <span className={"stream-board-start-stream"}>
              {"스트리밍 시작하기"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StreamBoard;
