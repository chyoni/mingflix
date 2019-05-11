import PostContainer from "./PostContainer";
import { connect } from "react-redux";
import { actionCreators as videoAction } from "../../Redux/modules/video";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postVideo: (file, poster, title, tags, description) => {
      dispatch(videoAction.postVideo(file, poster, title, tags, description));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostContainer);
