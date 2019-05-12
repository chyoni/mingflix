import { connect } from "react-redux";
import VideoCommentsContainer from "./VideoCommentsContainer";
import { actionCreators as videoAction } from "../../Redux/modules/video";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { videoId } = ownProps;
  return {
    moderateComment: commentId => {
      dispatch(videoAction.moderateComment(videoId, commentId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VideoCommentsContainer);
