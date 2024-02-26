import React from "react";
import styles from "./styles.module.scss";

const StatsCard = ({ bgColor, icon, count, text, fontSize, color }) => {
  return (
    <div className={styles.container} style={{ background: bgColor }}>
      <div className={styles.icon}>{icon}</div>
      <span
        className={styles.count}
        style={{ fontSize: fontSize, color: color }}
      >
        {count}
      </span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default StatsCard;
