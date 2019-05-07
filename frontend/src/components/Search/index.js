import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { searchUserList, searchVideoList },
    router: { location }
  } = state;
  return {
    searchUserList,
    searchVideoList,
    location
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { searchTerm }
    }
  } = ownProps;
  return {
    searchByTerm: () => {
      dispatch(userAction.searchByTerm(searchTerm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
