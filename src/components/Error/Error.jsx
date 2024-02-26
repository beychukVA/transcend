import React from "react";
import styles from "./styles.module.scss";

const Error = ({ message }) => {
  return <span className={styles.error}>{message}</span>;
};

export default Error;
