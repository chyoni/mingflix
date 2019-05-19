import FeedContainer from "./FeedContainer";
import { connect } from "react-redux";
import { actionCreators as videoAction } from "../../Redux/modules/video";
import { actionCreators as streamAction } from "../../Redux/modules/streaming";

const mapStateToProps = (state, ownProps) => {
  const {
    video: { hotVideos, followingsVideo },
    streaming: { followingsStreaming }
  } = state;
  return {
    hotVideos,
    followingsVideo,
    followingsStreaming
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHotVideos: () => {
      dispatch(videoAction.getHotVideos());
    },
    getFollowingsVideos: () => {
      dispatch(videoAction.getFollowingsVideos());
    },
    getFollowingsStreaming: () => {
      dispatch(streamAction.getFollowingsStreaming());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
