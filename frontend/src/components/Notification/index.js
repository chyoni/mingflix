import NotificationContainer from "./NotificationContainer";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { notices }
  } = state;
  return {
    notices
  };
};

export default connect(
  mapStateToProps,
  null
)(NotificationContainer);
