import FeedContainer from "./FeedContainer";
import { connect } from "react-redux";
import { actionCreators as videoAction } from "../../Redux/modules/video";

const mapStateToProps = (state, ownProps) => {
  const {
    video: { hotVideos, followingsVideo }
  } = state;
  return {
    hotVideos,
    followingsVideo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHotVideos: () => {
      dispatch(videoAction.getHotVideos());
    },
    getFollowingsVideos: () => {
      dispatch(videoAction.getFollowingsVideos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
