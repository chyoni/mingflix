import React from "react";
import styles from "./styles.module.scss";
import Textarea from "react-textarea-autosize";
import PropTypes from "prop-types";

const CommentBox = (props, context) => (
  <div className={styles.container}>
    <img
      src={props.profileImage || require("../../images/noPhoto.jpg")}
      alt={props.creator}
      className={styles.profileImage}
    />
    <form className={styles.commentBox}>
      <Textarea
        className={styles.input}
        placeholder={"댓글"}
        value={props.comment}
        onChange={props.handleInputChange}
        onKeyPress={props.handleKeyPress}
        name={"comment"}
      />
    </form>
  </div>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

CommentBox.propTyeps = {
  comment: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default CommentBox;
