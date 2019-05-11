import React from "react";
import Helmet from "react-helmet";
import styles from "./styles.module.scss";

const Loading = props => (
  <div className={styles.container}>
    <Helmet>
      <title>Mingflix</title>
    </Helmet>
    <img
      src={require("../../images/loading.png")}
      className={styles.spinner}
      alt={"loading"}
    />
  </div>
);

export default Loading;
