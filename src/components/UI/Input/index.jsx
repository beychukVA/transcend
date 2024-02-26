import React, { useState } from "react";
import styles from "./styles.module.scss";

const Input = ({
  placeholder,
  className,
  type = "text",
  leftIcon,
  rightIcon,
  classNameContainer,
  onChange,
  name,
  label,
  disabled,
}) => {
  const [isVisiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className={`${styles.container} ${classNameContainer}`}>
      {label && <label className={styles.label}>{label}</label>}
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      <input
        disabled={disabled}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        type={`${isVisiblePassword ? "text" : type}`}
        placeholder={placeholder}
        className={`${styles.input} ${
          disabled ? styles.disabled : ""
        } ${className} ${leftIcon ? styles.inputPaddingLeft : ""} ${
          rightIcon ? styles.inputPaddingRight : ""
        }`}
      />

      {rightIcon && (
        <div
          onClick={() => setVisiblePassword(!isVisiblePassword)}
          className={`${styles.rightIcon} ${
            isVisiblePassword ? styles.activeEye : ""
          }`}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
