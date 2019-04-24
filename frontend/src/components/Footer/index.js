import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <span className={styles.item}>{context.t("About Us")}</span>
    </div>
    <div className={styles.column}>
      <span className={styles.mingflix}>© 2019 mingflix</span>
    </div>
  </footer>
);

Footer.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;
