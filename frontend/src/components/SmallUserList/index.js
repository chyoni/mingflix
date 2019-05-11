import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const SmallUserList = props => {
  return (
    <Link to={`/anonyprofile/${props.username}/`} className={styles.link}>
      <div className={styles.container}>
        <img
          src={props.profileImage || require("../../images/noPhoto.jpg")}
          alt={props.username}
          className={styles.profileImage}
        />
        <span className={styles.creator}>{props.username}</span>
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
