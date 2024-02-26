import React, { useState } from "react";
import styles from "./style.module.scss";
import CustomerDetails from "./CustomerDetails";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceItems from "./InvoiceItems";

const InvoicePreview = ({
  fileList = [],
  billOfLanding,
  blueJayLoadID,
  greifID,
  salesOrder,
  trailerNumber,
  drumsShipped,
  linehaul,
  total,
  customer,
}) => {
  return (
    <div id="htmlToPdf" className={styles.invoicePreviewContainer}>
      <div className={styles.invoicePreviewInner}>
        <div>
          <CustomerDetails customer={customer} />
          <InvoiceDetails
            billOfLanding={billOfLanding}
            blueJayLoadID={blueJayLoadID}
            greifID={greifID}
            salesOrder={salesOrder}
            trailerNumber={trailerNumber}
            drumsShipped={drumsShipped}
          />
          <InvoiceItems linehaul={linehaul} total={total} />
        </div>
        <div className={styles.footer}>
          <span className={styles.gratitude}>
            Thank you for doing business with us. Have a good day!
          </span>
          <div className={styles.line}></div>
          <span className={styles.numberOfPage}>Page 1 of 1</span>
        </div>
      </div>
      <div class="html2pdf__page-break"></div>

      {fileList &&
        fileList.map((file, index) => (
          <div id={file.file.name}>
            {/* <object> */}
            <iframe
              key={index}
              src={`${file?.base64Data}#toolbar=0`}
              height="800px;"
              width="100%;"
              title="pdf"
              type="application/pdf"
              frameBorder="0"
            />
            {/* </object> */}
            <div class="html2pdf__page-break"></div>
          </div>
        ))}
    </div>
  );
};

export default InvoicePreview;
