import React from "react";
import styles from "./styles.module.scss";

const TextArea = ({ onChange, placeholder, className, name }) => {
  return (
    <textarea
      onChange={(e) => onChange(e.target.value)}
      name={name}
      className={`${styles.textarea} ${className}`}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
