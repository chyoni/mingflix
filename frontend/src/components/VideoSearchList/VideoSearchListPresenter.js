import React from "react";
import PropTypes from "prop-types";
import "./VideoSearchList.css";
import { Link } from "react-router-dom";
const VideoSearchListPresenter = props => {
  return (
    <Link to={`/detail/${props.id}/`} className={"video-search-list-link"}>
      <div className={"video-search-list-container"}>
        <div className={"video-search-list-video-info"}>
          <div className={"video-search-list-video"}>
            <img
              src={props.poster || require("../../images/noPhoto.jpg")}
              alt={props.file}
              className={"video-search-list-poster"}
            />
          </div>
          <div className={"video-search-list-info"}>
            <span className={"video-search-list-title"}>{props.title}</span>
            <span className={"video-search-list-description"}>
              {"description:  "} {props.description}
            </span>
            {props.tags.length >= 1 && (
              <div className={"video-search-list-tag-list"}>
                {props.tags.map((tag, index) => {
                  return (
                    <span key={index} className={"video-search-list-tag-child"}>
                      {"#"}
                      {tag}{" "}
                    </span>
                  );
                })}
              </div>
            )}
            <span className={"video-search-list-creator-name"}>
              {"creator: "} {props.creatorName}
            </span>
            <div className={"video-search-list-views-and-time"}>
              <span className={"video-search-list-views"}>
                {"조회수  "}
                {props.views}
                {"회"}
              </span>
              <span className={"video-search-list-divider"}>{"·"}</span>
              <span className={"video-search-list-post-time"}>
                {props.postTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

VideoSearchListPresenter.propTypes = {
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
export default VideoSearchListPresenter;
