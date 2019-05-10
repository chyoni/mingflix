import React, { Component } from "react";
import PropTypes from "prop-types";
import NoticeRowPresenter from "./NoticeRowPresenter";

class NoticeRowContainer extends Component {
  static propTypes = {
    comment: PropTypes.string,
    creator: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    video: PropTypes.object,
    time: PropTypes.string.isRequired,
    to: PropTypes.object.isRequired
  };
  render() {
    const { comment, creator, type, video, time, to } = this.props;
    return (
      <NoticeRowPresenter
        comment={comment}
        creator={creator}
        type={type}
        video={video}
        time={time}
        to={to}
      />
    );
  }
}

export default NoticeRowContainer;
