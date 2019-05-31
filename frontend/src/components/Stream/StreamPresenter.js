import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./Stream.css";
import Loading from "../Loading";

const StreamPresenter = props => {
  return props.loading ? (
    <div className={"stream-container"}>
      <div className={"stream-post-container"}>
        <Loading />
      </div>
    </div>
  ) : (
    <div className={"stream-container"}>
      <Helmet>
        <title>Mingflix | 스트리밍 시작하기</title>
      </Helmet>
      <div className={"stream-post-container"}>
        <header className={"stream-header"}>
          <span className={"stream-title"}>{"Streaming"}</span>
        </header>
        <main className={"stream-main"}>
          <div className={"stream-poster-box"}>
            <input
              type={"text"}
              value={props.poster === null ? "포스터명" : props.poster.name}
              placeholder={"포스터명"}
              readOnly={true}
              className={"stream-preview-input"}
            />
            <button className={"stream-button"}>{"Poster"}</button>
            <input
              type={"file"}
              name={"poster"}
              className={"stream-input"}
              multiple={false}
              onChange={props.handlePosterChange}
            />
          </div>
          <div className={"stream-info-box"}>
            <div className={"stream-title"}>
              <input
                type={"text"}
                placeholder={"제목"}
                name={"title"}
                value={props.title}
                onChange={props.handleInputChange}
                className={"stream-preview-input"}
              />
            </div>
            <div className={"stream-description"}>
              <input
                type={"text"}
                placeholder={"설명"}
                name={"description"}
                value={props.description}
                onChange={props.handleInputChange}
                className={"stream-preview-input"}
              />
            </div>
          </div>
        </main>
        <footer className={"stream-footer"}>
          <button
            className={"stream-start-button"}
            onClick={props.handleOnSubmit}
          >
            {"Start"}
          </button>
        </footer>
      </div>
    </div>
  );
};

StreamPresenter.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  description: PropTypes.string,
  poster: PropTypes.object,
  handleInputChange: PropTypes.func.isRequired,
  handlePosterChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
};

export default StreamPresenter;
