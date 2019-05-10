import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";
import FollowButtonContainer from "./FollowButtonContainer";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { userId, isFollowing } = ownProps;
  return {
    handleClick: () => {
      if (isFollowing) {
        dispatch(userAction.unFollowUser(userId));
      } else {
        dispatch(userAction.followUser(userId));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FollowButtonContainer);
