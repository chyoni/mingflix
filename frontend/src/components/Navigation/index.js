import NavigationContainer from "./NavigationContainer";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    },
    getNotification: () => {
      dispatch(userAction.getNotification());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationContainer);
