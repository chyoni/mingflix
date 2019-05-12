import { connect } from "react-redux";
import FollowingsBoxContainer from "./FollowingsBoxContainer";
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
    getFollowingList: username => {
      dispatch(userAction.getFollowingList(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowingsBoxContainer);
