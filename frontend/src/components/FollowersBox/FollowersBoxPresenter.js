import React from "react";
import PropTypes from "prop-types";
import "./FollowersBox.css";
import Loading from "../Loading";
import CloseIcon from "react-ionicons/lib/MdClose";
import SmallUserList from "../SmallUserList";

const FollowersBoxPresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={"fbox-container"}>
      <div className={"fbox-box"}>
        <Loading />
      </div>
    </div>
  ) : (
    <div className={"fbox-container"}>
      <div className={"fbox-box"}>
        <header className={"fbox-header"}>
          <h4 className={"fbox-title"}>{"Followers"}</h4>
          <span className={"fbox-close-icon"} onClick={props.toggleFollowers}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        {props.followerList.map(follower => {
          return (
            <SmallUserList
              key={follower.id}
              id={follower.id}
              username={follower.username}
              profileImage={follower.profile_image}
            />
          );
        })}
      </div>
    </div>
  );
};

FollowersBoxPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  toggleFollowers: PropTypes.func.isRequired,
  followerList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      profile_image: PropTypes.string
    })
  )
};

export default FollowersBoxPresenter;
