import { connect } from "react-redux";
import SettingsContainer from "./SettingsContainer";
import { actionCreators as userAction } from "../../Redux/modules/user";
import { push } from "react-router-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(userAction.logout());
    },
    changePassword: (current_password, new_password) => {
      dispatch(userAction.changePassword(current_password, new_password));
    },
    goToHome: () => {
      dispatch(push("/"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SettingsContainer);
