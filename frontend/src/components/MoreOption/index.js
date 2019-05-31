import React from "react";
import "./MoreOption.css";
import CloseIcon from "react-ionicons/lib/MdClose";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MoreOption = props => {
  return (
    <div className={"mo-container"}>
      <div className={"mo-box"}>
        <header className={"mo-header"}>
          <h4 className={"mo-title"}>{"Option"}</h4>
          <span className={"mo-close-icon"} onClick={props.toggleMoreOption}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        <div className={"mo-column"}>
          <span className={"mo-delete"} onClick={props.handleDelete}>
            {"영상 삭제"}
          </span>
          <Link to={`/update/${props.videoId}/`} className={"mo-link"}>
            <span className={"mo-modify"}>{"영상 수정"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

MoreOption.propTypes = {
  videoId: PropTypes.number.isRequired,
  toggleMoreOption: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default MoreOption;
