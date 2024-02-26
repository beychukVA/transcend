import css from "./styles.module.scss";
import styles from "../InvoicesColumnHeader/styles.module.scss";

import React from "react";
import Disable from "../../../Icons/Disable";
import DownloadLetter from "../../../Icons/DownloadLetter";
import Edit from "../../../Icons/Edit";

const InvoicesItem = ({ invoice, index, openModal }) => {
  const { id, customer, total, lastUpdateData, dataCreate } = invoice;

  const background = index % 2 === 1 ? "#F8F8F8" : "";

  return (
    <div
      style={{ background: background }}
      className={`${styles.container} ${css.invoicesItem}`}
    >
      <div className={styles.numberContainer}>
        <span>{id}</span>
      </div>

      <div className={styles.customerContainer}>
        <span>{customer}</span>
      </div>

      <div className={styles.totalContainer}>
        <span>{total}</span>
      </div>

      <div className={styles.updateDataContainer}>
        <span>{lastUpdateData}</span>
      </div>

      <div className={styles.createdDataContainer}>
        <span>{dataCreate}</span>
      </div>

      <div className={`${styles.actionContainer} ${css.actionContainer}`}>
        <div onClick={openModal} className={css.disableBtnContainer}>
          <Disable />
        </div>

        <div className={css.downloadBtnContainer}>
          <DownloadLetter />
        </div>

        <div className={css.editBtnContainer}>
          <Edit />
        </div>
      </div>
    </div>
  );
};

export default InvoicesItem;
