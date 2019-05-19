import PostContainer from "./PostContainer";
import { connect } from "react-redux";
import { actionCreators as videoAction } from "../../Redux/modules/video";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { yourProfile }
  } = state;
  return {
    yourProfile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postVideo: (file, poster, title, tags, description) => {
      dispatch(videoAction.postVideo(file, poster, title, tags, description));
    },
    getProfile: () => {
      dispatch(userAction.getProfile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
