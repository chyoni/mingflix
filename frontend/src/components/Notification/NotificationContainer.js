import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationPresenter from "./NotificationPresenter";

class NotificationContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    notices: PropTypes.array,
    closeNoticeList: PropTypes.func.isRequired
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.notices) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { notices, closeNoticeList } = this.props;
    const { loading } = this.state;
    return (
      <NotificationPresenter
        notices={notices}
        closeNoticeList={closeNoticeList}
        loading={loading}
      />
    );
  }
}

export default NotificationContainer;
