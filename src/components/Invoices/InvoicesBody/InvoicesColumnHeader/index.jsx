import React from "react";
import styles from "./styles.module.scss";

const InvoicesColumnHeader = () => {
  return (
    <div className={`${styles.container} ${styles.invoicesColumnHeader}`}>
      <div className={styles.numberContainer}>
        <span>invoice number</span>
      </div>

      <div className={styles.customerContainer}>
        <span>Customer</span>
      </div>

      <div className={styles.totalContainer}>
        <span>Total</span>
      </div>

      <div className={styles.updateDataContainer}>
        <span>last update date</span>
      </div>

      <div className={styles.createdDataContainer}>
        <span>Date created</span>
      </div>

      <div className={styles.actionContainer}>
        <span>action</span>
      </div>
    </div>
  );
};

export default InvoicesColumnHeader;
