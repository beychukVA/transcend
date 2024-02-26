import React from "react";
import styles from "./styles.module.scss";

const InvoicesPagination = () => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.prev}>prev</div>

      <div className={styles.pageNumbers}>
        <span>1</span>
        <span>2</span>
        <span>...</span>
        <span>5</span>
        <span>6</span>
      </div>

      <div className={styles.next}>next</div>
    </div>
  );
};

export default InvoicesPagination;
