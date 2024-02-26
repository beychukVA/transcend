import React from "react";
import styles from "./styles.module.scss";

const Button = ({ disabled, onClick, type = "button", text, className }) => {
  return (
    <button
      className={`${styles.button} ${className} ${
        disabled ? styles.disabled : ""
      }`}
      type={type}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
