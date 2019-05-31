import React from "react";
import PropTypes from "prop-types";
import "../FollowersBox/FollowersBox.css";
import Loading from "../Loading";
import CloseIcon from "react-ionicons/lib/MdClose";
import SmallUserList from "../SmallUserList";

const FollowingsBoxPresenter = props => {
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
          <h4 className={"fbox-title"}>{"Followings"}</h4>
          <span className={"fbox-close-icon"} onClick={props.toggleFollowings}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        {props.followingList.map(following => {
          return (
            <SmallUserList
              key={following.id}
              id={following.id}
              username={following.username}
              profileImage={following.profile_image}
            />
          );
        })}
      </div>
    </div>
  );
};

FollowingsBoxPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  toggleFollowings: PropTypes.func.isRequired,
  followingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      profile_image: PropTypes.string
    })
  )
};

export default FollowingsBoxPresenter;
