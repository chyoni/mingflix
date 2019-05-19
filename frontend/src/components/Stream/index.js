import StreamContainer from "./StreamContainer";
import { connect } from "react-redux";
import { actionCreators as streamAction } from "../../Redux/modules/streaming";
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
    getStartStream: (title, description, poster) => {
      dispatch(streamAction.getStartStream(title, description, poster));
    },
    getProfile: () => {
      dispatch(userAction.getProfile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamContainer);
