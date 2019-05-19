import LiveContainer from "./LiveContainer";
import { connect } from "react-redux";
import { actionCreators as streamAction } from "../../Redux/modules/streaming";

const mapStateToProps = (state, ownProps) => {
  const {
    streaming: { userByStreamKey },
    users: { username }
  } = state;
  const {
    match: {
      params: { streamKey }
    }
  } = ownProps;
  return {
    userByStreamKey,
    streamKey,
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { streamKey }
    }
  } = ownProps;
  return {
    getUserByStreamKey: () => {
      dispatch(streamAction.getUserByStreamKey(streamKey));
    },
    getQuitStream: streamId => {
      dispatch(streamAction.getQuitStream(streamId));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveContainer);
