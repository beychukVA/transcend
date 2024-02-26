import React from "react";
import styles from "./styles.module.scss";
import Bucket from "../../../Icons/Bucket";
import Button from "../../../UI/Button";

const RightScreenSideInvoicePreviewBtnGroup = () => {
  return (
    <div className={styles.btnGroupContainer}>
      <div className={styles.closeBtn}>
        <Bucket color={"#000000"} />
        <span>Delete</span>
      </div>

      <div className={styles.btnGroup}>
        <Button text={"Edit Invoice"} className={styles.editBtn} />
        <Button text={"Download Invoice"} className={styles.downloadBtn} />
      </div>
    </div>
  );
};

export default RightScreenSideInvoicePreviewBtnGroup;
