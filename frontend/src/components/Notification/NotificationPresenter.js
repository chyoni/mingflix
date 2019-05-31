import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "react-ionicons/lib/MdClose";
import "./Notification.css";
import Loading from "../Loading";
import NoticeRow from "../NoticeRow";

const NotificationPresenter = props => {
  return (
    <div className={"notification-container"}>
      <div className={"notification-box"}>
        <header className={"notification-header"}>
          <h4 className={"notification-title"}>{"Notification"}</h4>
          <span
            className={"notification-close-icon"}
            onClick={props.closeNoticeList}
          >
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        <div className={"notification-content"}>
          {props.loading ? (
            <Loading />
          ) : (
            <NoticeDisplay notices={props.notices} />
          )}
        </div>
      </div>
    </div>
  );
};

NotificationPresenter.propTypes = {
  closeNoticeList: PropTypes.func.isRequired,
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      creator: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        channel: PropTypes.object
      }).isRequired,
      notification_type: PropTypes.string.isRequired,
      natural_time: PropTypes.string.isRequired,
      to: PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        channel: PropTypes.object
      }).isRequired,
      video: PropTypes.shape({
        id: PropTypes.number.isRequired,
        file: PropTypes.string.isRequired,
        poster: PropTypes.string,
        title: PropTypes.string.isRequired
      })
    })
  )
};

const NoticeDisplay = props =>
  props.notices.map((notice, index) => {
    if (notice.creator.id === notice.to.id) {
      return false;
    } else {
      return (
        <NoticeRow
          key={index}
          comment={notice.comment}
          creator={notice.creator}
          type={notice.notification_type}
          video={notice.video}
          time={notice.natural_time}
          to={notice.to}
        />
      );
    }
  });

export default NotificationPresenter;
