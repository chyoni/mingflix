import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./CreateChannel.css";

const CreateChannelPresenter = props => {
  console.log(props);
  return (
    <div className={"cc-container"}>
      <Helmet>
        <title>Mingflix | 채널 생성</title>
      </Helmet>
      <div className={"cc-create-container"}>
        <header className={"cc-header"}>
          <span className={"cc-title"}>{"Create Channel"}</span>
        </header>
        <main className={"cc-main"}>
          <div className={"cc-channel-name-box"}>
            <span className={"cc-channel-name-span"}>{"채널명"}</span>
            <input
              type={"text"}
              name={"channelName"}
              value={props.channelName}
              placeholder={"채널명"}
              className={"cc-preview-input"}
              onChange={props.handleInputChange}
            />
          </div>
          <div className={"cc-info-box"}>
            <div className={"cc-channel-caption-box"}>
              <span className={"cc-channel-caption-span"}>{"채널 설명"}</span>
              <input
                type={"text"}
                placeholder={"채널 설명"}
                name={"channelCaption"}
                value={props.channelCaption}
                onChange={props.handleInputChange}
                className={"cc-preview-input"}
              />
            </div>
            <div className={"cc-streamkey-box"}>
              <span className={"cc-streamkey-span"}>{"스트림 키"}</span>
              <input
                type={"text"}
                placeholder={"스트림 키"}
                name={"streamKey"}
                value={props.streamKey}
                onChange={props.handleInputChange}
                className={"cc-preview-input"}
              />
            </div>
          </div>
        </main>
        <footer className={"cc-footer"}>
          <button className={"cc-create-button"} onClick={props.handleSubmit}>
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
