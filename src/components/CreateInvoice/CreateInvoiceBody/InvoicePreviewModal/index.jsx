import styles from "./style.module.scss";
import InvoicePreviewUploadFile from "./InvoicePreviewUploadFile";
import InvoicePreview from "./InvoicePreview";
import { useState } from "react";

const InvoicePreviewModal = ({
  openModal,
  closeModal,
  customer,
  billOfLanding,
  blueJayLoadID,
  greifID,
  salesOrder,
  trailerNumber,
  drumsShipped,
  linehaul,
  total,
}) => {
  const [fileList, setFileList] = useState([]);

  const handleFileList = (files) => setFileList(files);

  if (!openModal) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <InvoicePreview
          fileList={fileList}
          customer={customer}
          billOfLanding={billOfLanding}
          blueJayLoadID={blueJayLoadID}
          greifID={greifID}
          salesOrder={salesOrder}
          trailerNumber={trailerNumber}
          drumsShipped={drumsShipped}
          linehaul={linehaul}
          total={total}
        />
        <InvoicePreviewUploadFile
          closeModal={closeModal}
          handleFileList={handleFileList}
        />
      </div>
    </div>
  );
};
export default InvoicePreviewModal;
