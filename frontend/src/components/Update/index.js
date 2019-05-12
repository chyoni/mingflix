import { connect } from "react-redux";
import UpdateContainer from "./UpdateContainer";
import { actionCreators as videoAction } from "../../Redux/modules/video";

const mapStateToProps = (state, ownProps) => {
  const {
    video: { video }
  } = state;
  return {
    video
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { videoId }
    }
  } = ownProps;
  return {
    updateVideo: (poster, title, tags, description) => {
      dispatch(
        videoAction.updateVideo(videoId, poster, title, tags, description)
      );
    },
    getVideo: () => {
      dispatch(videoAction.getVideo(videoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateContainer);
