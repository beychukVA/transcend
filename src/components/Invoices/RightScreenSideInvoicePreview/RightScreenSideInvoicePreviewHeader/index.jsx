import React from "react";
import styles from "./styles.module.scss";
import Close from "../../../Icons/Close";

const RightScreenSideInvoicePreviewHeader = ({ closeModal }) => {
  return (
    <div className={styles.header}>
      <div className={styles.invoiceNumberContainer}>
        <span className={styles.invoiceNumber}>Invoice 6690</span>
        <div onClick={closeModal} className={styles.closeBtn}>
          <Close />
        </div>
      </div>
      <span className={styles.nameCorporation}>ALBEMARLE CORPORATION</span>
    </div>
  );
};

export default RightScreenSideInvoicePreviewHeader;
