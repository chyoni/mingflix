import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import "./Edit.css";
import Loading from "../Loading";

const EditPresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={"edit-container"}>
      <div className={"edit-edit-container"}>
        <Loading />
      </div>
    </div>
  ) : props.yourProfile.channel ? (
    <div className={"edit-container"}>
      <Helmet>
        <title>Mingflix | 프로필 수정</title>
      </Helmet>
      <div className={"edit-edit-container"}>
        <header className={"edit-header"}>
          <span className={"edit-title"}>{"Edit Profile"}</span>
        </header>
        <main className={"edit-main"}>
          <div className={"edit-username"}>
            <input
              type={"text"}
              placeholder={"유저닉네임"}
              name={"username"}
              value={props.yourProfile.username}
              readOnly={true}
              disabled={true}
              className={"edit-username-input"}
            />
            <span className={"edit-username-span"}>{"아이디"}</span>
          </div>
          <div className={"edit-file-box"}>
            <input
              type={"text"}
              value={
                props.profileImage === null
                  ? props.yourProfile.profile_image
                  : props.profileImage.name
              }
              placeholder={"파일명"}
              readOnly={true}
              className={"edit-preview-input"}
            />
            <button className={"edit-button"}>{"프로필 이미지"}</button>
            <input
              type={"file"}
              name={"profileImage"}
              className={"edit-input"}
              multiple={false}
              onChange={props.handleProfileImage}
            />
          </div>
          <div className={"edit-info-box"}>
            <div className={"edit-name"}>
              <input
                type={"text"}
                placeholder={"이름"}
                name={"name"}
                value={props.name}
                onChange={props.handleInputChange}
                className={"edit-preview-input"}
              />
              <span className={"edit-name-span"}>{"이름"}</span>
            </div>
            <div className={"edit-phone"}>
              <input
                type={"text"}
                placeholder={"핸드폰"}
                name={"phone"}
                value={props.phone}
                onChange={props.handleInputChange}
                className={"edit-preview-input"}
              />
              <span className={"edit-phone-span"}>{"핸드폰"}</span>
            </div>
            <div className={"edit-channel-name"}>
              <input
                type={"text"}
                placeholder={"채널명"}
                name={"channelName"}
                value={props.channelName}
                onChange={props.handleInputChange}
                className={"edit-preview-input"}
              />
              <span className={"edit-channel-name-span"}>{"채널명"}</span>
            </div>
            <div className={"edit-caption"}>
              <input
                type={"text"}
                placeholder={"채널 설명"}
                name={"channelCaption"}
                value={props.channelCaption}
                onChange={props.handleInputChange}
                className={"edit-preview-input"}
              />
              <span className={"edit-channel-caption-span"}>{"채널설명"}</span>
            </div>
          </div>
        </main>
        <footer className={"edit-footer"}>
          <button
            className={"edit-update-button"}
            onClick={props.updateProfile}
          >
            {"Update Profile"}
          </button>
        </footer>
      </div>
    </div>
  ) : (
    <React.Fragment>
      <Helmet>
        <title>Mingflix | 프로필 수정</title>
      </Helmet>
      <div className={"edit-info-container"}>
        <div className={"edit-no-channel-header"}>
          <span className={"edit-no-channel"}>
            {"프로필을 수정할 채널을 생성하세요🧐"}
          </span>
          <button
            className={"edit-channel-create"}
            onClick={props.goCreateChannelFunc}
          >
            {"채널 만들기"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

EditPresenter.propTypes = {
  yourProfile: PropTypes.object,
  profileImage: PropTypes.any,
  name: PropTypes.string,
  phone: PropTypes.string,
  channelName: PropTypes.string,
  channelCaption: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  updateProfile: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleProfileImage: PropTypes.func.isRequired,
  goCreateChannelFunc: PropTypes.func.isRequired
};

export default EditPresenter;
