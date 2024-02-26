import React from "react";
import styles from "./styles.module.scss";

const Period = ({ text, isSelected, setIsSelected }) => {
  return (
    <span
      onClick={() => setIsSelected(text)}
      className={`${styles.period} ${isSelected === text ? styles.active : ""}`}
    >
      {text}
    </span>
  );
};

export default Period;
