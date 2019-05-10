import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.module.scss";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Auth from "../Auth";
import Feed from "../Feed";
import Detail from "../Detail";
import Profile from "../Profile";
import Search from "../Search";
import AnonymousProfile from "../AnonymousProfile";

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
    <Route exact={true} path={"/"} component={Feed} />
    <Route exact={true} path={"/detail/:videoId"} component={Detail} />
    <Route exact={true} path={"/profile"} component={Profile} />
    <Route exact={true} path={"/search/:searchTerm"} component={Search} />
    <Route
      exact={true}
      path={"/anonyprofile/:username"}
      component={AnonymousProfile}
    />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact={true} path={"/"} component={Auth} />
  </Switch>
);

export default AppPresesnter;
