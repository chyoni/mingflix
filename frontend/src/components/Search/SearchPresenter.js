import React from "react";
import styles from "./styles.module.scss";
import UserList from "../UserList";
import Loading from "../Loading";
import PropTypes from "prop-types";

const SearchPresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : (
    <div className={styles.searchContainer}>
      <div className={styles.userListCard}>
        <h4 className={styles.title}>{"Users"}</h4>
        {!props.loading && props.userList.length < 1 && <NotFound text={""} />}
        {!props.loading &&
          props.userList.length > 0 &&
          props.userList.map(user => {
            return (
              <UserList
                key={user.id}
                channelCaption={user.channel.channel_caption}
                followersCount={user.followers_count}
                postCount={user.post_count}
                username={user.username}
                profileImage={user.profile_image}
              />
            );
          })}
      </div>
      <div className={styles.videoListCard}>
        <h4 className={styles.title}>{"Videos"}</h4>
      </div>
    </div>
  );
};

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  videoList: PropTypes.array
};

export default SearchPresenter;
