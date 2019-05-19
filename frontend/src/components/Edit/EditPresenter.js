import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";

const EditPresenter = props => {
  console.log(props);
  return props.loading ? (
    <div className={styles.container}>
      <div className={styles.editContainer}>
        <Loading />
      </div>
    </div>
  ) : props.yourProfile.channel ? (
    <div className={styles.container}>
      <Helmet>
        <title>Mingflix | 프로필 수정</title>
      </Helmet>
      <div className={styles.editContainer}>
        <header className={styles.header}>
          <span className={styles.title}>{"Edit Profile"}</span>
        </header>
        <main className={styles.main}>
          <div className={styles.username}>
            <input
              type={"text"}
              placeholder={"유저닉네임"}
              name={"username"}
              value={props.yourProfile.username}
              readOnly={true}
              disabled={true}
              className={styles.usernameInput}
            />
            <span className={styles.usernameSpan}>{"아이디"}</span>
          </div>
          <div className={styles.fileBox}>
            <input
              type={"text"}
              value={
                props.profileImage === null
                  ? props.yourProfile.profile_image
                  : props.profileImage.name
              }
              placeholder={"파일명"}
              readOnly={true}
              className={styles.previewInput}
            />
            <button className={styles.button}>{"프로필 이미지"}</button>
            <input
              type={"file"}
              name={"profileImage"}
              className={styles.input}
              multiple={false}
              onChange={props.handleProfileImage}
            />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.name}>
              <input
                type={"text"}
                placeholder={"이름"}
                name={"name"}
                value={props.name}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
              <span className={styles.nameSpan}>{"이름"}</span>
            </div>
            <div className={styles.phone}>
              <input
                type={"text"}
                placeholder={"핸드폰"}
                name={"phone"}
                value={props.phone}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
              <span className={styles.phoneSpan}>{"핸드폰"}</span>
            </div>
            <div className={styles.channelName}>
              <input
                type={"text"}
                placeholder={"채널명"}
                name={"channelName"}
                value={props.channelName}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
              <span className={styles.channelNameSpan}>{"채널명"}</span>
            </div>
            <div className={styles.caption}>
              <input
                type={"text"}
                placeholder={"채널 설명"}
                name={"channelCaption"}
                value={props.channelCaption}
                onChange={props.handleInputChange}
                className={styles.previewInput}
              />
              <span className={styles.channelCaptionSpan}>{"채널설명"}</span>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <button className={styles.updateButton} onClick={props.updateProfile}>
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
      <div className={styles.infoContainer}>
        <div className={styles.noChannelHeader}>
          <span className={styles.noChannel}>
            {"프로필을 수정할 채널을 생성하세요🧐"}
          </span>
          <button
            className={styles.channelCreate}
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
