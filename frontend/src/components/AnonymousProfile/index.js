import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";
import AnonymousProfileContainer from "./AnonymousProfileContainer";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { anonymousUser, username },
    router: { location }
  } = state;
  return {
    anonymousUser,
    location,
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { username }
    }
  } = ownProps;
  return {
    getAmProfile: () => {
      dispatch(userAction.getYourProfile(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnonymousProfileContainer);
