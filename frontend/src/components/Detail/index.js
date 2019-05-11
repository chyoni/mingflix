import DetailContainer from "./DetailContainer";
import { connect } from "react-redux";
import { actionCreators as videoAction } from "../../Redux/modules/video";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    video: { video },
    users: { yourProfile, username }
  } = state;
  return {
    video,
    yourProfile,
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { videoId }
    }
  } = ownProps;
  return {
    getVideo: () => {
      dispatch(videoAction.getVideo(videoId));
    },
    getProfile: () => {
      dispatch(userAction.getProfile());
    },
    deleteVideo: () => {
      dispatch(videoAction.deleteVideo(videoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
