import React from "react";
import styles from "./styles.module.scss";

const MenuContainer = ({ children }) => {
  return <div className={styles.menuContainer}>{children}</div>;
};

export default MenuContainer;
