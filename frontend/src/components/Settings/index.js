import { connect } from "react-redux";
import SettingsContainer from "./SettingsContainer";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(userAction.logout());
    },
    changePassword: (current_password, new_password) => {
      dispatch(userAction.changePassword(current_password, new_password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SettingsContainer);
