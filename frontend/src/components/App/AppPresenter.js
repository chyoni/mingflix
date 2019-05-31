import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Auth from "../Auth";
import Feed from "../Feed";
import Detail from "../Detail";
import Profile from "../Profile";
import Search from "../Search";
import AnonymousProfile from "../AnonymousProfile";
import History from "../History";
import Post from "../Post";
import Update from "../Update";
import Live from "../Live";
import Stream from "../Stream";
import CreateChannel from "../CreateChannel";
import Edit from "../Edit";

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
    <Route exact={true} path={"/history"} component={History} />
    <Route exact={true} path={"/post"} component={Post} />
    <Route exact={true} path={"/update/:videoId"} component={Update} />
    <Route exact={true} path={"/live/:streamKey"} component={Live} />
    <Route exact={true} path={"/stream"} component={Stream} />
    <Route exact={true} path={"/create"} component={CreateChannel} />
    <Route exact={true} path={"/edit"} component={Edit} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact={true} path={"/"} component={Auth} />
  </Switch>
);

export default AppPresesnter;
