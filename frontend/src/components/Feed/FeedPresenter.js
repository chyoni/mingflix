import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import HotVideos from "../HotVideos";
import FollowingsVideo from "../FollowingsVideo";

const FeedPresenter = props => {
  return props.loading ? (
    <LoadingFeed />
  ) : (
    <RenderFeed
      hotVideos={props.hotVideos}
      followingsVideo={props.followingsVideo}
    />
  );
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  hotVideos: PropTypes.array,
  followingsVideo: PropTypes.array
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

const RenderFeed = props => [
  <div key={4} className={styles.feed}>
    <HotVideos key={5} hotVideos={props.hotVideos} />,
    <FollowingsVideo key={6} followingsVideo={props.followingsVideo} />
  </div>
];

export default FeedPresenter;
