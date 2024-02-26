import React from "react";
import styles from "./styles.module.scss";

const SearchInput = ({ isActive, setActive, value, onChange }) => {
  return (
    <input
      onFocus={() => setActive(true)}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      type="text"
      placeholder="Search for customer here"
      className={`${styles.searchInput} ${isActive ? styles.active : ""}`}
    />
  );
};

export default SearchInput;
