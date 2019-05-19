import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "react-ionicons/lib/MdClose";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import NoticeRow from "../NoticeRow";

const NotificationPresenter = props => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{"Notification"}</h4>
          <span className={styles.closeIcon} onClick={props.closeNoticeList}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        <div className={styles.content}>
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
