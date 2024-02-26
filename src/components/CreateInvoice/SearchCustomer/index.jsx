import React, { useMemo, useState } from "react";
import SearchInput from "./SearchInput";
import styles from "./styles.module.scss";
import Person from "../../Icons/Person";
import ArrowDown from "../../Icons/ArrowDown";
import SearchDropdown from "./SearchDropdown";
import useFetchCustomers from "../../../services/useFetchCustomers";

const SearchCustomer = ({ setCustomer }) => {
  const [isSelectedInput, setSelectedInput] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [filter, setFilter] = useState("");
  const toggleArrow = () => setSelectedInput(!isSelectedInput);
  const { customers } = useFetchCustomers();

  const filteredCustomers = useMemo(
    () =>
      customers
        .filter((customer) =>
          customer.customerName?.toLowerCase().includes(filter?.toLowerCase())
        )
        .map((customer) => customer),
    [customers, filter]
  );

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setCustomer(customer);
  };

  return (
    <div className={styles.container}>
      <div className={styles.personIcon}>
        <Person />
      </div>
      <SearchInput
        isActive={isSelectedInput}
        setActive={setSelectedInput}
        value={filter}
        onChange={setFilter}
      />
      <div
        className={`${styles.arrowDown} ${
          isSelectedInput ? styles.arrowUp : ""
        }`}
        onClick={() => toggleArrow()}
      >
        <ArrowDown />
      </div>
      <SearchDropdown
        onClose={setSelectedInput}
        isOpen={isSelectedInput}
        customers={filteredCustomers}
        setSelectedCustomer={handleSelectCustomer}
        setSelectedInput={setSelectedInput}
      />
    </div>
  );
};

export default SearchCustomer;
