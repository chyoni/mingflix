import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";

const StreamPresenter = props => {
  return props.loading ? (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <Loading />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <Helmet>
        <title>Mingflix | 스트리밍 시작하기</title>
      </Helmet>
      <div className={styles.postContainer}>
        <header className={styles.header}>
          <span className={styles.title}>{"Streaming"}</span>
        </header>
        <main className={styles.main}>
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
              onChange={props.handlePosterChange}
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
          <button className={styles.startButton} onClick={props.handleOnSubmit}>
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
