import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
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
    <div className={"sidebar-loading-container"}>
      <Loading />
    </div>
  ) : (
    <div className={"sidebar-container"}>
      <div className={"sidebar-content"}>
        <Link to={"/"} className={"sidebar-link"}>
          <div className={"sidebar-column"}>
            <section className={"sidebar-icon"}>
              <IosHome
                icon={"ios-home-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"Home"}
          </div>
        </Link>
        <Link to={"/history"} className={"sidebar-link"}>
          <div className={"sidebar-column"}>
            <section className={"sidebar-icon"}>
              <IosFolder
                icon={"ios-folder-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"History"}
          </div>
        </Link>
        <Link to={"/post"} className={"sidebar-link"}>
          <div className={"sidebar-column"}>
            <section className={"sidebar-icon"}>
              <IosAdd icon={"ios-add"} fontSize={"28px"} color={"black"} />
            </section>
            {"Post Video"}
          </div>
        </Link>
        {props.yourProfile.is_streaming && (
          <Link
            to={`/live/${props.yourProfile.channel.stream_key}/`}
            className={"sidebar-link"}
          >
            <div className={"sidebar-column"}>
              <section className={"sidebar-icon"}>
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
        <div className={"sidebar-subscribe-column"}>
          <div className={"sidebar-subscribe-title"}>
            <section className={"sidebar-icon"}>
              <IosBookmark
                icon={"ios-bookmark-outline"}
                fontSize={"28px"}
                color={"black"}
              />
            </section>
            {"Subscribe"}
          </div>
          <div className={"sidebar-subscribe-content"}>
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
        <Link to={"/edit"} className={"sidebar-link"}>
          <div className={"sidebar-column"}>
            <section className={"sidebar-icon"}>
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
