import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = (props, context) => (
  <footer className={"footer-footer"}>
    <div className={"footer-column"}>
      <span className={"footer-item"}>{context.t("조승환")}</span>
      <span className={"footer-item"}>{context.t("최치원")}</span>
      <span className={"footer-item"}>{context.t("조석현")}</span>
    </div>
    <div className={"footer-column"}>
      <span className={"footer-mingflix"}>© 2019 mingflix</span>
    </div>
  </footer>
);

Footer.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;
