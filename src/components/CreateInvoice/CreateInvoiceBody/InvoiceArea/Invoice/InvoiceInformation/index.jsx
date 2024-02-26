import React, { useState } from "react";
import Input from "../../../../../UI/Input";
import Button from "../../../../../UI/Button";
import styles from "./styles.module.scss";
import InvoicePreviewModal from "../../../InvoicePreviewModal";
import Error from "../../../../../Error/Error";
import { generatePdf } from "../../../../../../utils/generatePdf";

const InvoiceInformation = ({
  customer,
  billOfLandingCustomerInfo,
  trailerNumberCustomerInfo,
  paymentAmountCustomerInfo,
}) => {
  const [openInvoicePreview, setOpenInvoicePreview] = useState(false);
  const [billOfLanding, setBillOfLanding] = useState("");
  const [blueJayLoadID, setBlueJayLoadID] = useState("");
  const [greifID, setGreifID] = useState("");
  const [salesOrder, setSalesOrder] = useState("");
  const [trailerNumber, setTrailerNumber] = useState("");
  const [drumsShipped, setDrumsShipped] = useState("");
  const [linehaul, setLinehaul] = useState("");
  const [total, setTotal] = useState("");

  const canSubmit =
    !customer.customerName ||
    !billOfLanding ||
    !blueJayLoadID ||
    !greifID ||
    !salesOrder ||
    !trailerNumber ||
    !drumsShipped ||
    !linehaul ||
    !total ||
    !billOfLandingCustomerInfo ||
    !trailerNumberCustomerInfo ||
    !paymentAmountCustomerInfo;

  const onChangeBillOfLanding = (value) => {
    setBillOfLanding(value);
  };

  const onChangeTrailerNumber = (value) => {
    setTrailerNumber(value);
  };

  const onChangeTotal = (value) => {
    setTotal(value);
  };

  const onChangeLinehaul = (value) => {
    setLinehaul(value);
  };

  const toggleModal = () => setOpenInvoicePreview(!openInvoicePreview);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Information</span>
      <div className={styles.inputsContainer}>
        <Input
          className={styles.input}
          classNameContainer={styles.inputContainer}
          label="Bill of Landing"
          onChange={onChangeBillOfLanding}
        />
        <Input
          className={styles.input}
          classNameContainer={styles.inputContainer}
          label="Blue Jay Load ID"
          onChange={setBlueJayLoadID}
        />
        <Input
          className={styles.input}
          classNameContainer={styles.inputContainer}
          label="Greif ID"
          onChange={setGreifID}
        />

        <Input
          className={styles.input}
          classNameContainer={styles.inputContainer}
          label="Sales Order #"
          onChange={setSalesOrder}
        />
        <Input
          className={styles.input}
          classNameContainer={styles.inputContainer}
          label="Trailer Number"
          onChange={onChangeTrailerNumber}
        />
        <Input
          className={styles.input}
          classNameContainer={styles.inputContainer}
          label="Drums Shipped"
          onChange={setDrumsShipped}
        />
      </div>
      <div className={styles.totalWrapper}>
        <div className={styles.totalContainer}>
          <Input
            className={styles.input}
            classNameContainer={styles.inputContainer}
            label="Linehaul ($)"
            onChange={onChangeLinehaul}
          />
          <Input
            className={styles.input}
            classNameContainer={styles.inputContainer}
            label="Total ($)"
            onChange={onChangeTotal}
          />
        </div>
      </div>
      {canSubmit && (
        <Error message="Fields cannot be empty! Select customer and fill in all fields" />
      )}
      <div className={styles.buttonsContainer}>
        <Button
          className={`${styles.button} ${styles.buttonWhite}`}
          text="Preview Invoice"
          onClick={toggleModal}
          disabled={canSubmit}
        />
        <Button
          className={styles.button}
          text="Generate Invoice"
          disabled={canSubmit}
          onClick={() => generatePdf("htmlToPdf")}
        />
      </div>
      <InvoicePreviewModal
        customer={customer}
        billOfLanding={billOfLanding}
        blueJayLoadID={blueJayLoadID}
        greifID={greifID}
        salesOrder={salesOrder}
        trailerNumber={trailerNumber}
        drumsShipped={drumsShipped}
        linehaul={linehaul}
        total={total}
        closeModal={() => toggleModal()}
        openModal={openInvoicePreview}
      />
    </div>
  );
};

export default InvoiceInformation;
