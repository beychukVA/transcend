import React, { useState } from "react";
import styles from "./styles.module.scss";
import InvoicesHeader from "./InvoicesHeader";
import InvoicesBody from "./InvoicesBody";
import RightScreenSideInvoicePreview from "./RightScreenSideInvoicePreview";

const Invoices = () => {
  const [rightScreenSideInvoicePreview, setRightScreenSideInvoicePreview] =
    useState(false);

  return (
    <div className={styles.container}>
      <InvoicesHeader />
      <InvoicesBody openModal={() => setRightScreenSideInvoicePreview(true)} />
      <RightScreenSideInvoicePreview
        openModal={rightScreenSideInvoicePreview}
        closeModal={() => setRightScreenSideInvoicePreview(false)}
      />
    </div>
  );
};

export default Invoices;
