import React from "react";
import styles from "./styles.module.scss";

const Footer = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <span className={styles.copyright}>
        copyright by TranscendTransit 2022
      </span>
    </footer>
  );
};

export default Footer;
