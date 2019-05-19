import SidebarContainer from "./SidebarContainer";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { followingList, username, yourProfile }
  } = state;
  return {
    followingList,
    username,
    yourProfile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    myFollowingList: username => {
      dispatch(userAction.getFollowingList(username));
    },
    getProfile: () => {
      dispatch(userAction.getProfile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
