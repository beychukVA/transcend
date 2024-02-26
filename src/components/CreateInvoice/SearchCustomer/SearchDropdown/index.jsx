import React from "react";
import styles from "./styles.module.scss";

const SearchDropdown = ({
  onClose,
  isOpen,
  customers,
  select,
  setSelectedCustomer,
  setSelectedInput,
}) => {
  return (
    <div
      className={`${styles.container} ${
        isOpen ? styles.active : styles.hidden
      }`}
    >
      {customers &&
        customers.map((customer, index) => {
          return (
            <div
              key={`${customer.customerID}${index}`}
              className={styles.customerList}
              onClick={() => {
                setSelectedCustomer(customer);
                setSelectedInput(false);
              }}
            >
              <span className={styles.customerItem}>
                {customer.customerName}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default SearchDropdown;
