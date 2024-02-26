import React from "react";
import NavSidebar from "../NavSidebar";
import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavSidebar />
    </div>
  );
};

export default Sidebar;
