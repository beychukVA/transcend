import React, { useState } from "react";
import styles from "./styles.module.scss";

const Select = ({
  placeholder,
  className,
  leftIcon,
  rightIcon,
  classNameContainer,
  name,
  label,
}) => {
  return (
    <div className={`${styles.container} ${classNameContainer}`}>
      {label && <label className={styles.label}>{label}</label>}
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${className} ${
          leftIcon ? styles.inputPaddingLeft : ""
        } ${rightIcon ? styles.inputPaddingRight : ""}`}
      />
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
    </div>
  );
};

export default Select;
