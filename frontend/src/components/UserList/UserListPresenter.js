import React from "react";
import PropTypes from "prop-types";
import "./UserList.css";
import { Link } from "react-router-dom";

const UserListPresenter = props => (
  <Link to={`/anonyprofile/${props.username}/`} className={"userlist-link"}>
    <div className={"userlist-user-info"}>
      <img
        src={props.profileImage || require("../../images/noPhoto.jpg")}
        alt={props.username}
        className={"userlist-profile-image"}
      />
      <div className={"userlist-main"}>
        <div className={"userlist-username-card"}>
          <span className={"userlist-username"}>{props.username}</span>
        </div>
        <div className={"userlist-channel-card"}>
          <span className={"userlist-post"}>
            <span className={"userlist-post-count"}>{props.postCount}</span>
            {"  "}
            {"posts"}
          </span>
          <span className={"userlist-followers"}>
            <span className={"userlist-followers-count"}>
              {props.followersCount}
            </span>
            {"  "}
            {"followers"}
          </span>
        </div>
        <div className={"userlist-caption-card"}>
          <span className={"userlist-channel-caption"}>
            {props.channelCaption}
          </span>
        </div>
      </div>
    </div>
  </Link>
);

UserListPresenter.propTypes = {
  userId: PropTypes.number.isRequired,
  channelCaption: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  postCount: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string
};
export default UserListPresenter;
