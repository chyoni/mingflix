import React from "react";
import PropTypes from "prop-types";
import "./StreamingSearchList.css";
import { Link } from "react-router-dom";

const StreamingSearchListPresenter = props => {
  return (
    <Link
      to={`/live/${props.creator.channel.stream_key}/`}
      className={"streaming-search-list-link"}
    >
      <div className={"streaming-search-list-container"}>
        <div className={"streaming-search-list-streaming-info"}>
          <div className={"streaming-search-list-streaming"}>
            <img
              src={props.poster || require("../../images/noPhoto.jpg")}
              alt={props.title}
              className={"streaming-search-list-poster"}
            />
          </div>
          <div className={"streaming-search-list-info"}>
            <span className={"streaming-search-list-title"}>{props.title}</span>
            <span className={"streaming-search-list-description"}>
              {"description:  "} {props.description}
            </span>
            <span className={"streaming-search-list-creator-name"}>
              {"creator: "} {props.creator.username}
            </span>
            <div className={"streaming-search-list-stream-red-box"}>
              <span className={"streaming-search-list-red-box"}>
                {"실시간 스트리밍"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

StreamingSearchListPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired
};

export default StreamingSearchListPresenter;
