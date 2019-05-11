import { connect } from "react-redux";
import { actionCreators as videoAction } from "../../Redux/modules/video";
import HistoryContainer from "./HistoryContainer";

const mapStateToProps = (state, ownProps) => {
  const {
    video: { myHistory }
  } = state;
  return {
    myHistory
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMyHistory: () => {
      dispatch(videoAction.getMyHistory());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryContainer);
