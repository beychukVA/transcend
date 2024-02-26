import React from "react";
import styles from "./styles.module.scss";

const Header = ({ children, className }) => {
  return (
    <header className={`${styles.header} ${className}`}>{children}</header>
  );
};

export default Header;
