import React, { useState } from "react";
import styles from "./styles.module.scss";
import CustomerInformation from "./CustomerInformation";
import InvoiceInformation from "./InvoiceInformation";
// import InvoicePreview from "../../InvoicePreviewModal/InvoicePreview"

const Invoice = ({ customer }) => {
  const [billOfLandingCustomerInfo, setBillOfLanding] = useState("");
  const [trailerNumberCustomerInfo, setTrailerNumber] = useState("");
  const [paymentAmountCustomerInfo, setPaymentAmount] = useState("");

  const handleBillOfLanding = (value) => setBillOfLanding(value);
  const handleTrailerNumber = (value) => setTrailerNumber(value);
  const handlePaymentAmount = (value) => setPaymentAmount(value);
  return (
    <div className={styles.container}>
      <CustomerInformation
        customer={customer}
        handleBillOfLanding={handleBillOfLanding}
        handleTrailerNumber={handleTrailerNumber}
        handlePaymentAmount={handlePaymentAmount}
      />
      <InvoiceInformation
        customer={customer}
        billOfLandingCustomerInfo={billOfLandingCustomerInfo}
        trailerNumberCustomerInfo={trailerNumberCustomerInfo}
        paymentAmountCustomerInfo={paymentAmountCustomerInfo}
      />
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Invoice;
