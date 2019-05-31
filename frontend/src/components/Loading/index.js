import React from "react";
import Helmet from "react-helmet";
import "./Loading.css";

const Loading = props => (
  <div className={"loading-container"}>
    <Helmet>
      <title>Mingflix</title>
    </Helmet>
    <img
      src={require("../../images/loading.png")}
      className={"loading-spinner"}
      alt={"loading"}
    />
  </div>
);

export default Loading;
