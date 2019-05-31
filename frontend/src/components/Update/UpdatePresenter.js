import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./Update.css";
import Loading from "../Loading";

const UpdatePresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={"update-container"}>
      <div className={"update-post-container"}>
        <Loading />
      </div>
    </div>
  ) : (
    <div className={"update-container"}>
      <Helmet>
        <title>Mingflix | 영상 업데이트</title>
      </Helmet>
      <div className={"update-post-container"}>
        <header className={"update-header"}>
          <span className={"update-title"}>{"Update Video"}</span>
        </header>
        <main className={"update-main"}>
          <div className={"update-file-box"}>
            <input
              type={"text"}
              value={props.video.file}
              readOnly={true}
              className={"update-preview-input"}
            />
          </div>
          <div className={"update-poster-box"}>
            <input
              type={"text"}
              value={props.poster === null ? "포스터명" : props.poster.name}
              placeholder={"포스터명"}
              readOnly={true}
              className={"update-preview-input"}
            />
            <button className={"update-button"}>{"Poster"}</button>
            <input
              type={"file"}
              name={"poster"}
              className={"update-input"}
              multiple={false}
              onChange={props.posterOnChange}
            />
          </div>
          <div className={"update-info-box"}>
            <div className={"update-title"}>
              <input
                type={"text"}
                placeholder={"제목"}
                name={"title"}
                value={props.title}
                onChange={props.handleInputChange}
                className={"update-preview-input"}
              />
            </div>
            <div className={"update-tags"}>
              <input
                type={"text"}
                placeholder={"태그 예)밍플릭스,mingflix"}
                name={"tags"}
                value={props.tags}
                onChange={props.handleInputChange}
                className={"update-preview-input"}
              />
            </div>
            <div className={"update-description"}>
              <input
                type={"text"}
                placeholder={"설명"}
                name={"description"}
                value={props.description}
                onChange={props.handleInputChange}
                className={"update-preview-input"}
              />
            </div>
          </div>
        </main>
        <footer className={"update-footer"}>
          <button
            className={"update-updateButton"}
            onClick={props.handleOnSubmit}
          >
            {"Update"}
          </button>
        </footer>
      </div>
    </div>
  );
};

UpdatePresenter.propTypes = {
  video: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  poster: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.string,
  description: PropTypes.string,
  posterOnChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default UpdatePresenter;
