import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PostPresenter = props => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Mingflix | 영상 업로드</title>
      </Helmet>
      <div className={styles.postContainer}>
        <header className={styles.header}>
          <span className={styles.title}>{"Upload Video"}</span>
        </header>
        <main className={styles.main}>
          <div className={styles.fileBox}>
            <input
              type={"text"}
              value={props.file === null ? "파일명" : props.file.name}
              placeholder={"파일명"}
              readOnly={true}
              className={styles.previewInput}
            />
            <button className={styles.button}>{"File"}</button>
            <input
              type={"file"}
              name={"file"}
              className={styles.input}
              multiple={false}
              onChange={props.fileOnChange}
            />
          </div>
          <div className={styles.posterBox}>
            <input
              type={"text"}
              value={props.poster === null ? "포스터명" : props.poster.name}
              placeholder={"포스터명"}
              readOnly={true}
              className={styles.previewInput}
            />
            <button className={styles.button}>{"Poster"}</button>
            <input
              type={"file"}
              name={"poster"}
              className={styles.input}
              multiple={false}
              onChange={props.posterOnChange}
            />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.title}>
              <input
                type={"text"}
                placeholder={"제목"}
                name={"title"}
                value={props.title}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
            </div>
            <div className={styles.tags}>
              <input
                type={"text"}
                placeholder={"태그 예)밍플릭스,mingflix"}
                name={"tags"}
                value={props.tags}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
            </div>
            <div className={styles.description}>
              <input
                type={"text"}
                placeholder={"설명"}
                name={"description"}
                value={props.description}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <button
            className={styles.uploadButton}
            onClick={props.handleOnSubmit}
          >
            {"Upload"}
          </button>
        </footer>
      </div>
    </div>
  );
};

PostPresenter.propTypes = {
  file: PropTypes.object,
  poster: PropTypes.object,
  fileOnChange: PropTypes.func.isRequired,
  posterOnChange: PropTypes.func.isRequired
};

export default PostPresenter;
