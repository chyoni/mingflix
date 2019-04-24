import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.module.scss";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Auth from "../Auth";

const AppPresesnter = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

AppPresesnter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact={true} path={"/"} render={() => "privateHome"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact={true} path={"/"} component={Auth} />
  </Switch>
);

export default AppPresesnter;
