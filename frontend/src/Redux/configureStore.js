import { createStore, combineReducers, applyMiddleware } from "redux";
import users from "./modules/user";
import video from "./modules/video";
import streaming from "./modules/streaming";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";

const env = process.env.NODE_ENV;

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  router: connectRouter(history),
  users,
  video,
  streaming,
  i18nState
});

let store = initialStore =>
  createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export { history };
export default store();
