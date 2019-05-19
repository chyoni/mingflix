import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import IosHome from "react-ionicons/lib/IosHomeOutline";
import IosFolder from "react-ionicons/lib/IosFolderOutline";
import IosBookmark from "react-ionicons/lib/IosBookmarkOutline";
import IosAdd from "react-ionicons/lib/IosAdd";
import IosVideoCam from "react-ionicons/lib/IosVideocamOutline";
import Loading from "../Loading";
import IosSetting from "react-ionicons/lib/IosSettingsOutline";
import SmallUserList from "../SmallUserList";
import { Link } from "react-router-dom";

const SidebarPresenter = props => {
  return props.loading ? (
    <div className={styles.loadingContainer}>
      <Loading />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to={"/"} className={styles.link}>
          <div className={styles.column}>
            <section className={styles.icon}>
              <IosHome
                icon={"ios-home-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"Home"}
          </div>
        </Link>
        <Link to={"/history"} className={styles.link}>
          <div className={styles.column}>
            <section className={styles.icon}>
              <IosFolder
                icon={"ios-folder-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"History"}
          </div>
        </Link>
        <Link to={"/post"} className={styles.link}>
          <div className={styles.column}>
            <section className={styles.icon}>
              <IosAdd icon={"ios-add"} fontSize={"28px"} color={"black"} />
            </section>
            {"Post Video"}
          </div>
        </Link>
        {props.yourProfile.is_streaming && (
          <Link
            to={`/live/${props.yourProfile.channel.stream_key}/`}
            className={styles.link}
          >
            <div className={styles.column}>
              <section className={styles.icon}>
                <IosVideoCam
                  icon={"ios-videocam-outline"}
                  fontSize={"28px"}
                  color={"black"}
                />
              </section>
              {"My Streaming"}
            </div>
          </Link>
        )}
        <div className={styles.subscribeColumn}>
          <div className={styles.subscribeTitle}>
            <section className={styles.icon}>
              <IosBookmark
                icon={"ios-bookmark-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"Subscribe"}
          </div>
          <div className={styles.subscribeContent}>
            {props.followingList.map(following => {
              return (
                <SmallUserList
                  key={following.id}
                  id={following.id}
                  profileImage={following.profile_image}
                  username={following.username}
                />
              );
            })}
          </div>
        </div>
        <Link to={"/edit"} className={styles.link}>
          <div className={styles.column}>
            <section className={styles.icon}>
              <IosSetting
                icon={"ios-setting-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"Edit Profile"}
          </div>
        </Link>
      </div>
    </div>
  );
};

SidebarPresenter.propTypes = {
  followingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
    })
  ),
  loading: PropTypes.bool.isRequired
};

export default SidebarPresenter;
