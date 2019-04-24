import AppContainer from "./AppContainer";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const {
    users,
    router: { location }
  } = state;
  return {
    isLoggedIn: users.isLoggedIn,
    pathname: location.pathname
  };
};

export default connect(
  mapStateToProps,
  null
)(AppContainer);
