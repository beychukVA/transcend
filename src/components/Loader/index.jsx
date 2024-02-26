import React from "react";
import styles from "./styles.module.scss";

const Loader = () => {
  console.log("Loader...");
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
