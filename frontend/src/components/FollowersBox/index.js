import { connect } from "react-redux";
import FollowersBoxContainer from "./FollowersBoxContainer";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { followerList }
  } = state;
  return {
    followerList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFollowerList: username => {
      dispatch(userAction.getFollowersList(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersBoxContainer);
