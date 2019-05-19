import { connect } from "react-redux";
import CreateChannelContainer from "./CreateChannelContainer";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createChannel: (channelName, channelCaption, streamKey) => {
      dispatch(
        userAction.createChannel(channelName, channelCaption, streamKey)
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateChannelContainer);
