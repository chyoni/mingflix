import React, { Component } from "react";
import VideoSearchListPresenter from "./VideoSearchListPresenter";
import PropTypes from "prop-types";

class VideoSearchListContainer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    tags: PropTypes.array,
    views: PropTypes.number.isRequired,
    creatorName: PropTypes.string.isRequired
  };
  render() {
    const {
      id,
      video,
      title,
      description,
      postTime,
      tags,
      poster,
      views,
      creatorName
    } = this.props;
    return (
      <VideoSearchListPresenter
        id={id}
        video={video}
        title={title}
        description={description}
        postTime={postTime}
        tags={tags}
        poster={poster}
        views={views}
        creatorName={creatorName}
      />
    );
  }
}

export default VideoSearchListContainer;
