import React, { useState } from "react";
import styles from "./styles.module.scss";
import CreateInvoiceIcon from "../Icons/CreateInvoiceIcon";
import InvoicesIcon from "../Icons/InvoicesIcon";
import NotificationsIcon from "../Icons/NotificationsIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import { NavLink, useLocation } from "react-router-dom";

const NavSidebar = () => {
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(location.pathname);

  return (
    <ul className={styles.navList}>
      <NavLink
        to="/dashboard/create-invoice"
        className={`${styles.navItem} ${
          currentItem === "/dashboard/create-invoice" ? styles.activeLink : ""
        }`}
        onClick={() => setCurrentItem("/dashboard/create-invoice")}
      >
        <li>
          <CreateInvoiceIcon />
          <span className={styles.name}>Create Invoice</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/invoices"
        className={`${styles.navItem} ${
          currentItem === "/dashboard/invoices" ? styles.activeLink : ""
        }`}
        onClick={() => setCurrentItem("/dashboard/invoices")}
      >
        <li>
          <InvoicesIcon />
          <span className={styles.name}>Invoices</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/notifications"
        className={`${styles.navItem} ${
          currentItem === "/dashboard/notifications" ? styles.activeLink : ""
        }`}
        onClick={() => setCurrentItem("/dashboard/notifications")}
      >
        <li>
          <NotificationsIcon />
          <span className={styles.name}>Notifications</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/settings"
        className={`${styles.navItem} ${
          currentItem === "/dashboard/settings" ? styles.activeLink : ""
        }`}
        onClick={() => setCurrentItem("/dashboard/settings")}
      >
        <li>
          <SettingsIcon />
          <span className={styles.name}>Settings</span>
        </li>
      </NavLink>
    </ul>
  );
};

export default NavSidebar;
