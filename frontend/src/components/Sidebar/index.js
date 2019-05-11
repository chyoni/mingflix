import SidebarContainer from "./SidebarContainer";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { followingList }
  } = state;
  return {
    followingList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    myFollowingList: () => {
      dispatch(userAction.getFollowingList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
