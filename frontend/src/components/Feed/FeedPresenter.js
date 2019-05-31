import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./Feed.css";
import Loading from "../Loading";
import HotVideos from "../HotVideos";
import FollowingsVideo from "../FollowingsVideo";
import FollowStreaming from "../FollowStreaming";

const FeedPresenter = props => {
  return props.loading ? (
    <LoadingFeed />
  ) : (
    <RenderFeed
      hotVideos={props.hotVideos}
      followingsVideo={props.followingsVideo}
      followingsStreaming={props.followingsStreaming}
    />
  );
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  hotVideos: PropTypes.array,
  followingsVideo: PropTypes.array,
  followingsStreaming: PropTypes.array
};

const LoadingFeed = props => (
  <div className={"feed-feed"}>
    <Loading />
  </div>
);

const RenderFeed = props => [
  <div key={4} className={"feed-feed"}>
    <Helmet>
      <title>Mingflix | 홈</title>
    </Helmet>
    <HotVideos key={5} hotVideos={props.hotVideos} />
    <FollowingsVideo key={6} followingsVideo={props.followingsVideo} />
    <FollowStreaming key={7} followingsStreaming={props.followingsStreaming} />
  </div>
];

export default FeedPresenter;
