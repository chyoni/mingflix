import React from "react";
import "./VideoList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VideoList = props => (
  <Link to={`/detail/${props.id}/`} className={"videolist-link"}>
    <div className={"videolist-container"}>
      <div className={"videolist-column"}>
        <img
          src={props.poster || require("../../images/noPhoto.jpg")}
          alt={props.file}
          className={"videolist-poster"}
        />
        {/* <video
          controls={"controls"}
          preload={"none"}
          width={"200"}
          height={"130"}
          poster={props.poster}
        >
          <source id={"mp4"} src={props.file} type={"video/mp4"} />
          <source id={"webm"} src={props.file} type={"video/webm"} />
          <source id={"ogv"} src={props.file} type={"video/ogg"} />
        </video> */}
      </div>
      <div className={"videolist-column"}>
        <span className={"videolist-title"}>{props.title}</span>
      </div>
      <div className={"videolist-column"}>
        <span className={"videolist-channel-name"}>
          {props.creator.username}
        </span>
        <span className={"videolist-views"}>
          {"조회수 "}
          {props.views}
          {"회"}
        </span>
        <span className={"videolist-divider"}>{"·"}</span>
        <span className={"videolist-natural-time"}>{props.natural_time}</span>
      </div>
    </div>
  </Link>
);

VideoList.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
  views: PropTypes.number.isRequired,
  natural_time: PropTypes.string.isRequired
};

export default VideoList;
