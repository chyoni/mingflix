import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import VideoList from "../VideoList";
import Loading from "../Loading";

const HistoryPresenter = props => {
  return props.loading ? (
    <Loading />
  ) : (
    <div className={styles.container}>
      <Helmet>
        <title>Mingflix | 히스토리</title>
      </Helmet>
      <div className={styles.history}>
        <div className={styles.column}>
          <span className={styles.title}>{"내가 본 동영상"}</span>
        </div>
        <div className={styles.videoBox}>
          {props.myHistory.map(history => {
            return (
              <VideoList
                key={history.id}
                id={history.id}
                poster={history.video.poster}
                file={history.video.file}
                title={history.video.title}
                creator={history.video.creator}
                views={history.video.views}
                natural_time={history.video.natural_time}
              />
            );
          })}
        </div>
        <div className={styles.divider} />
      </div>
    </div>
  );
};

HistoryPresenter.propTypes = {
  myHistory: PropTypes.array,
  loading: PropTypes.bool.isRequired
};

export default HistoryPresenter;
