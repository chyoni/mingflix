import { connect } from "react-redux";
import CommentBoxContainer from "./CommentBoxContainer";
import { actionCreators as videoAction } from "../../Redux/modules/video";

const mapStateToProps = (state, ownProps) => {
  const { users: username } = state;
  return {
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitComment: message => {
      dispatch(videoAction.commentVideo(ownProps.videoId, message));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBoxContainer);
