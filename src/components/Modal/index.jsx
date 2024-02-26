import React from "react";
import styles from "./styles.module.scss";
import Close from "../Icons/Close";

const Modal = ({ children, onClose, isOpen }) => {
  return (
    <div
      className={`${styles.wrapper} ${isOpen ? "" : styles.wrapperHidden}`}
      onClick={(e) => {
        if (e.target.classList.contains(styles.wrapper)) {
          onClose(false);
        }
      }}
    >
      <div className={`${styles.container} ${isOpen ? "" : styles.hidden}`}>
        <div className={styles.iconClose} onClick={() => onClose(false)}>
          <Close />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
