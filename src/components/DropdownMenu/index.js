import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ logOut }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!isOpenMenu);

  return (
    <>
      <div
        className={` ${isOpenMenu ? styles.wrapper : styles.wrapperHidden}`}
        onClick={() => toggleMenu()}
      ></div>
      <div className={styles.dropdown}>
        <div
          className={`${styles.dropdownIcon} ${
            isOpenMenu ? styles.arrowUp : ""
          }`}
          onClick={() => toggleMenu()}
        ></div>
        <ul
          className={`${styles.dropdownMenu} ${
            isOpenMenu ? "" : styles.hidden
          }`}
        >
          {/* <div className={styles.dropdownSection}>
            <NavLink
              className={styles.link}
              to="/"
              onClick={() => toggleMenu()}
            >
              <li className={styles.dropdownItem}>Home</li>
            </NavLink>
            <NavLink
              className={styles.link}
              to="/dashboard/create-invoice"
              onClick={() => toggleMenu()}
            >
              <li className={styles.dropdownItem}>Dashboard</li>
            </NavLink>
          </div> */}
          <div className={styles.dropdownSection}>
            <NavLink className={styles.link} to="/" onClick={() => logOut()}>
              <li className={styles.dropdownItem}>Log out</li>
            </NavLink>
          </div>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
