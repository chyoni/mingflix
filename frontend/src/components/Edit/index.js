import { connect } from "react-redux";
import EditContainer from "./EditContainer";
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
    editInfo: (profileImage, name, phone, channelName, channelCaption) => {
      dispatch(
        userAction.editInfo(
          profileImage,
          name,
          phone,
          channelName,
          channelCaption
        )
      );
    },
    getProfile: () => {
      dispatch(userAction.getProfile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer);
