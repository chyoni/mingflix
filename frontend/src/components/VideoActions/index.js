import { connect } from "react-redux";
import VideoActionsContainer from "./VideoActionsContainer";
import { actionCreators as videoAction } from "../../Redux/modules/video";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleHeartClick: () => {
      if (ownProps.isLiked) {
        dispatch(videoAction.cancelLikeVideo(ownProps.videoId));
      } else {
        dispatch(videoAction.likeVideo(ownProps.videoId));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VideoActionsContainer);
