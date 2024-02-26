import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const AuthMenu = () => {
  return (
    <div className={styles.authMenu}>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;
