import React from "react";
import styles from "./styles.module.scss";
import InvoicePreview from "../../CreateInvoice/CreateInvoiceBody/InvoicePreviewModal/InvoicePreview";
import RightScreenSideInvoicePreviewHeader from "./RightScreenSideInvoicePreviewHeader";
import RightScreenSideInvoicePreviewBtnGroup from "./RightScreenSideInvoicePreviewBtnGroup";

const RightScreenSideInvoicePreview = ({ openModal, closeModal }) => {
  if (!openModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div>
          <RightScreenSideInvoicePreviewHeader closeModal={closeModal} />
          <div className={styles.line}>
            <div className={styles.scrollContainer}>
              <InvoicePreview />
            </div>
          </div>
        </div>
        <RightScreenSideInvoicePreviewBtnGroup />
      </div>
    </div>
  );
};

export default RightScreenSideInvoicePreview;
