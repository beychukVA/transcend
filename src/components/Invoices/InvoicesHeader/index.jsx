import React from "react";
import styles from "./styles.module.scss";
import SearchInvoices from "./SearchInvoices";
import CalendarInvoices from "./CalendarInvoices";

const InvoicesHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <span className={styles.title}>Invoice</span>
        <SearchInvoices />
      </div>
      <CalendarInvoices />
    </div>
  );
};

export default InvoicesHeader;
