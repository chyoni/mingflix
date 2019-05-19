import React from "react";
import Helmet from "react-helmet";
import styles from "./styles.module.scss";
import UserList from "../UserList";
import Loading from "../Loading";
import PropTypes from "prop-types";
import VideoSearchList from "../VideoSearchList";
import StreamingSearchList from "../StreamingSearchList";

const SearchPresenter = props => {
  console.log(props);
  return props.loading ? (
    <Loading />
  ) : (
    <div className={styles.searchContainer}>
      <Helmet>
        <title>Mingflix | 검색</title>
      </Helmet>
      <div className={styles.userListCard}>
        <h4 className={styles.title}>{"Users"}</h4>
        {!props.loading && props.userList.length < 1 && <NotFound text={""} />}
        {!props.loading &&
          props.userList.length > 0 &&
          props.userList.map(user => {
            if (user.channel) {
              return (
                <UserList
                  key={user.id}
                  userId={user.id}
                  channelCaption={user.channel.channel_caption}
                  followersCount={user.followers_count}
                  postCount={user.post_count}
                  username={user.username}
                  profileImage={user.profile_image}
                />
              );
            } else {
              return false;
            }
          })}
      </div>
      <div className={styles.videoListCard}>
        <h4 className={styles.title}>{"Videos"}</h4>
        {!props.loading && props.videoList.length < 1 && <NotFound text={""} />}
        {!props.loading &&
          props.videoList.length > 0 &&
          props.videoList.map(video => {
            return (
              <VideoSearchList
                key={video.id}
                id={video.id}
                video={video.file}
                title={video.title}
                description={video.description}
                postTime={video.natural_time}
                poster={video.poster}
                tags={video.tags}
                views={video.views}
                creatorName={video.creator.username}
              />
            );
          })}
      </div>
      <div className={styles.streamingListCard}>
        <h4 className={styles.title}>{"Streaming"}</h4>
        {!props.loading && props.streamingList.length < 1 && (
          <NotFound text={""} />
        )}
        {!props.loading &&
          props.streamingList.length > 0 &&
          props.streamingList.map(streaming => {
            return (
              <StreamingSearchList
                key={streaming.id}
                id={streaming.id}
                title={streaming.title}
                description={streaming.description}
                poster={streaming.poster}
                creator={streaming.creator}
              />
            );
          })}
      </div>
    </div>
  );
};

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  videoList: PropTypes.array,
  streamingList: PropTypes.array
};

export default SearchPresenter;
