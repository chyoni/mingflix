import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./Post.css";
import Loading from "../Loading";

const PostPresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={"post-container"}>
      <div className={"post-post-container"}>
        <Loading />
      </div>
    </div>
  ) : props.yourProfile.channel ? (
    <div className={"post-container"}>
      <Helmet>
        <title>Mingflix | 영상 업로드</title>
      </Helmet>
      <div className={"post-post-container"}>
        <header className={"post-header"}>
          <span className={"post-title"}>{"Upload Video"}</span>
        </header>
        <main className={"post-main"}>
          <div className={"post-file-box"}>
            <input
              type={"text"}
              value={props.file === null ? "파일명" : props.file.name}
              placeholder={"파일명"}
              readOnly={true}
              className={"post-preview-input"}
            />
            <button className={"post-button"}>{"File"}</button>
            <input
              type={"file"}
              name={"file"}
              className={"post-input"}
              multiple={false}
              onChange={props.fileOnChange}
            />
          </div>
          <div className={"post-poster-box"}>
            <input
              type={"text"}
              value={props.poster === null ? "포스터명" : props.poster.name}
              placeholder={"포스터명"}
              readOnly={true}
              className={"post-preview-input"}
            />
            <button className={"post-button"}>{"Poster"}</button>
            <input
              type={"file"}
              name={"poster"}
              className={"post-input"}
              multiple={false}
              onChange={props.posterOnChange}
            />
          </div>
          <div className={"post-info-box"}>
            <div className={"post-title"}>
              <input
                type={"text"}
                placeholder={"제목"}
                name={"title"}
                value={props.title}
                onChange={props.handleInputChange}
                className={"post-preview-input"}
              />
            </div>
            <div className={"post-tags"}>
              <input
                type={"text"}
                placeholder={"태그 예)밍플릭스,mingflix"}
                name={"tags"}
                value={props.tags}
                onChange={props.handleInputChange}
                className={"post-preview-input"}
              />
            </div>
            <div className={"post-description"}>
              <input
                type={"text"}
                placeholder={"설명"}
                name={"description"}
                value={props.description}
                onChange={props.handleInputChange}
                className={"post-preview-input"}
              />
            </div>
          </div>
        </main>
        <footer className={"post-footer"}>
          <button
            className={"post-upload-button"}
            onClick={props.handleOnSubmit}
          >
            {"Upload"}
          </button>
        </footer>
      </div>
    </div>
  ) : (
    <React.Fragment>
      <Helmet>
        <title>Mingflix | 영상 업로드</title>
      </Helmet>
      <div className={"post-infoContainer"}>
        <div className={"post-no-channel-header"}>
          <span className={"post-no-channel"}>
            {"영상을 올리시려면 채널을 생성하세요🧐"}
          </span>
          <button
            className={"post-channel-create"}
            onClick={props.goCraeteFunc}
          >
            {"채널 만들기"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

PostPresenter.propTypes = {
  file: PropTypes.object,
  poster: PropTypes.object,
  fileOnChange: PropTypes.func.isRequired,
  posterOnChange: PropTypes.func.isRequired,
  yourProfile: PropTypes.object,
  goCraeteFunc: PropTypes.func.isRequired
};

export default PostPresenter;
