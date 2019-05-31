import React from "react";
import PropTypes from "prop-types";
import "./SmallUserList.css";
import { Link } from "react-router-dom";

const SmallUserList = props => {
  return (
    <Link to={`/anonyprofile/${props.username}/`} className={"sul-link"}>
      <div className={"sul-container"}>
        <img
          src={props.profileImage || require("../../images/noPhoto.jpg")}
          alt={props.username}
          className={"sul-profile-image"}
        />
        <span className={"sul-creator"}>{props.username}</span>
      </div>
    </Link>
  );
};

SmallUserList.propTypes = {
  id: PropTypes.number.isRequired,
  profileImage: PropTypes.string,
  username: PropTypes.string.isRequired
};

export default SmallUserList;
