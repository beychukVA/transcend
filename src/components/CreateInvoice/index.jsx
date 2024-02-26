import React, { useState } from "react";
import styles from "./styles.module.scss";
import CreateInvoiceHeader from "./CreateInvoiceHeader";
import CreateInvoiceBody from "./CreateInvoiceBody";

const CreateInvoice = () => {
  const [customer, setCustomer] = useState({});
  return (
    <div className={styles.container}>
      <CreateInvoiceHeader setCustomer={setCustomer} />
      <CreateInvoiceBody customer={customer} />
    </div>
  );
};

export default CreateInvoice;
