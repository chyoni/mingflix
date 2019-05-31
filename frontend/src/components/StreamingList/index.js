import React from "react";
import "./StreamingList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StreamingList = props => (
  <Link
    to={`/live/${props.creator.channel.stream_key}/`}
    className={"streaming-list-link"}
  >
    <div className={"streaming-list-container"}>
      <div className={"streaming-list-column"}>
        <img
          src={props.poster || require("../../images/noPhoto.jpg")}
          alt={props.title}
          className={"streaming-list-poster"}
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
      <div className={"streaming-list-column"}>
        <div className={"streaming-list-top-title"}>
          <span className={"streaming-list-title"}>{props.title}</span>
          <span className={"streaming-list-info"}>{"스트리밍"}</span>
        </div>
      </div>
      <div className={"streaming-list-column"}>
        <span className={"streaming-list-description"}>
          {props.description}
        </span>
        <span className={"streaming-list-channel-name"}>
          {props.creator.username}
        </span>
      </div>
    </div>
  </Link>
);

StreamingList.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default StreamingList;
