import React, { useState } from "react";
import styles from "./styles.module.scss";
import InvoiceColumnHeader from "./InvoicesColumnHeader";
import InvoicesItem from "./InvoicesItem";
import InvoicesPagination from "./InvoicesPagination";
import RightScreenSideInvoicePreview from "../RightScreenSideInvoicePreview";

const invoicesData = [
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
  {
    id: 6690,
    customer: "ALBEMARLE CORPORATION",
    total: "$1,256.00",
    lastUpdateData: "09/30/22",
    dataCreate: "09/30/22",
  },
];

const InvoicesBody = ({ openModal }) => {
  return (
    <div className={styles.container}>
      <InvoiceColumnHeader />

      <div>
        {invoicesData.map((invoice, index) => (
          <InvoicesItem
            key={index}
            index={index}
            invoice={invoice}
            openModal={openModal}
          />
        ))}
      </div>

      <InvoicesPagination />
    </div>
  );
};

export default InvoicesBody;
