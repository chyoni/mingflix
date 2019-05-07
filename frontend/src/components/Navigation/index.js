import NavigationContainer from "./NavigationContainer";
import { push } from "react-router-redux";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationContainer);
