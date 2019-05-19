import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const CreateChannelPresenter = props => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Mingflix | 채널 생성</title>
      </Helmet>
      <div className={styles.createContainer}>
        <header className={styles.header}>
          <span className={styles.title}>{"Create Channel"}</span>
        </header>
        <main className={styles.main}>
          <div className={styles.channelNameBox}>
            <span className={styles.channelNameSpan}>{"채널명"}</span>
            <input
              type={"text"}
              name={"channelName"}
              value={props.channelName}
              placeholder={"채널명"}
              className={styles.previewInput}
              onChange={props.handleInputChange}
            />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.channelCaptionBox}>
              <span className={styles.channelCaptionSpan}>{"채널 설명"}</span>
              <input
                type={"text"}
                placeholder={"채널 설명"}
                name={"channelCaption"}
                value={props.channelCaption}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
            </div>
            <div className={styles.streamKeyBox}>
              <span className={styles.streamKeySpan}>{"스트림 키"}</span>
              <input
                type={"text"}
                placeholder={"스트림 키"}
                name={"streamKey"}
                value={props.streamKey}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <button className={styles.createButton} onClick={props.handleSubmit}>
            {"Create"}
          </button>
        </footer>
      </div>
    </div>
  );
};

CreateChannelPresenter.propTypes = {
  channelName: PropTypes.string,
  channelCaption: PropTypes.string,
  streamKey: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default CreateChannelPresenter;
