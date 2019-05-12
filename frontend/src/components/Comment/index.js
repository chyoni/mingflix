import { connect } from "react-redux";
import CommentContainer from "./CommentContainer";
import { actionCreators as videoAction } from "../../Redux/modules/video";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { username }
  } = state;
  return {
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { videoId, commentId } = ownProps;
  return {
    moderateComment: () => {
      dispatch(videoAction.moderateComment(videoId, commentId));
    },
    deleteMyComment: () => {
      dispatch(videoAction.deleteMyComment(commentId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
