import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const QuitStream = props => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{"종료하시겠습니까?"}</h4>
        </header>
        <div className={styles.column}>
          <span className={styles.quit} onClick={props.quitStream}>
            {"스트리밍 종료"}
          </span>
          <span className={styles.close} onClick={props.toggleQuitFunc}>
            {"취소"}
          </span>
        </div>
      </div>
    </div>
  );
};

QuitStream.propTypes = {
  toggleQuitFunc: PropTypes.func.isRequired,
  quitStream: PropTypes.func.isRequired
};

export default QuitStream;
