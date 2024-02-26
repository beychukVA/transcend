import React, { useState } from "react";
import styles from "./styles.module.scss";
import Search from "../../../Icons/Search";
import SearchInput from "./SearchInput";

const SearchInvoices = () => {
  const [isSelectedInput, setSelectedInput] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.searchIcon}>
        <Search />
      </div>
      <SearchInput
        onFocus={() => setSelectedInput(true)}
        onBlur={() => setSelectedInput(false)}
        placeholder={"Search for invoice here"}
        isSelectedInput={isSelectedInput}
      />
    </div>
  );
};

export default SearchInvoices;
