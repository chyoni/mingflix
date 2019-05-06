import SignUpFormContainer from "./SignUpFormContainer";
import { connect } from "react-redux";
import { actionCreators as userActions } from "../../Redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    facebookLogin: access_token => {
      dispatch(userActions.facebookLogin(access_token));
    },
    createAccount: (username, password, email, name) => {
      dispatch(userActions.createAccount(username, password, email, name));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpFormContainer);
