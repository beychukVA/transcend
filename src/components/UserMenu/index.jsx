import React from "react";
import DropdownMenu from "../DropdownMenu";
import Avatar from "../Icons/Avatar";
import styles from "./styles.module.scss";

const UserMenu = ({ auth, logOut }) => {
  return (
    <div className={styles.userMenu}>
      <Avatar />
      <span className={styles.userName}>
        {auth?.currentUser?.email || "Admin"}
      </span>
      <DropdownMenu logOut={logOut} />
    </div>
  );
};

export default UserMenu;
