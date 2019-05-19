import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";
import { push } from "react-router-redux";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { token, yourProfile }
  } = state;
  return {
    token,
    yourProfile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: () => {
      dispatch(userAction.getProfile());
    },
    goToCreateChannel: () => {
      dispatch(push(`/create`));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
