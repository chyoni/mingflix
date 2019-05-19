import React, { Component } from "react";
import StreamingSearchListPresenter from "./StreamingSearchListPresenter";
import PropTypes from "prop-types";

class StreamingSearchListContainer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    creator: PropTypes.object.isRequired
  };

  render() {
    const { id, title, description, poster, creator } = this.props;
    return (
      <StreamingSearchListPresenter
        id={id}
        title={title}
        description={description}
        poster={poster}
        creator={creator}
      />
    );
  }
}

export default StreamingSearchListContainer;
