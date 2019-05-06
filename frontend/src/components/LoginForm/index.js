import LoginFormContainer from "./LoginFormContainer";
import { connect } from "react-redux";
import { actionCreators as userActions } from "../../Redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    },
    facebookLogin: access_token => {
      dispatch(userActions.facebookLogin(access_token));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginFormContainer);
