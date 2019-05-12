import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";

const UpdatePresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <Loading />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <Helmet>
        <title>Mingflix | 영상 업데이트</title>
      </Helmet>
      <div className={styles.postContainer}>
        <header className={styles.header}>
          <span className={styles.title}>{"Update Video"}</span>
        </header>
        <main className={styles.main}>
          <div className={styles.fileBox}>
            <input
              type={"text"}
              value={props.video.file}
              readOnly={true}
              className={styles.previewInput}
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
            className={styles.updateButton}
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
