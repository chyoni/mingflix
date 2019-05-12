import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import CloseIcon from "react-ionicons/lib/MdClose";
import SmallUserList from "../SmallUserList";

const FollowersBoxPresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={styles.container}>
      <div className={styles.box}>
        <Loading />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{"Followers"}</h4>
          <span className={styles.closeIcon} onClick={props.toggleFollowers}>
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
