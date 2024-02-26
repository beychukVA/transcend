import React from "react";
import styles from "./styles.module.scss";

const SearchInput = ({ placeholder, onFocus, onBlur, isSelectedInput }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles.searchInput} ${
        isSelectedInput ? styles.active : null
      }`}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchInput;
