import React from "react";
import styles from "./styles.module.scss";
import Doc from "../../../Icons/Doc";
import Invoice from "./Invoice";

const InvoiceArea = ({ customer }) => {
  return (
    <div className={styles.container}>
      {customer ? (
        <Invoice customer={customer} />
      ) : (
        <div className={styles.emptyContainer}>
          <div className={styles.docIcon}>
            <Doc />
          </div>
          <span className={styles.description}>To create New Invoice</span>
          <span className={`${styles.description} ${styles.strong}`}>
            please select the customer above
          </span>
          <div className={styles.bgImg}></div>
        </div>
      )}
    </div>
  );
};

export default InvoiceArea;
