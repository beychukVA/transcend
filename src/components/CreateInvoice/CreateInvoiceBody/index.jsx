import React from "react";
import InvoiceArea from "./InvoiceArea";
import StatsArea from "./StatsArea";
import styles from "./styles.module.scss";

const CreateInvoiceBody = ({ customer }) => {
  return (
    <div className={styles.container}>
      <InvoiceArea customer={customer} />
      <StatsArea />
    </div>
  );
};

export default CreateInvoiceBody;
