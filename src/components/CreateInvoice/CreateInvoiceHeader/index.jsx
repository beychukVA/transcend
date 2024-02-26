import React from "react";
import AddNewCustomer from "../AddNewCustomer";
import SearchCustomer from "../SearchCustomer";
import styles from "./styles.module.scss";

const CreateInvoiceHeader = ({ setCustomer }) => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>Create Invoice</span>
      <SearchCustomer setCustomer={setCustomer} />
      <AddNewCustomer />
    </div>
  );
};

export default CreateInvoiceHeader;
