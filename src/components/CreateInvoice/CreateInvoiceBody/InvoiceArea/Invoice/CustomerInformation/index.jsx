import React, { useState } from "react";
import Input from "../../../../../UI/Input";
import styles from "./styles.module.scss";

const CustomerInformation = ({
  customer,
  handleBillOfLanding,
  handleTrailerNumber,
  handlePaymentAmount,
}) => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [trailerNumber, setTrailerNumber] = useState("");
  const [billOfLanding, setBillOfLanding] = useState("");

  const onChangeBillOfLanding = (value) => {
    setBillOfLanding(value);
    handleBillOfLanding(value);
  };

  const onChangeTrailerNumber = (value) => {
    setTrailerNumber(value);
    handleTrailerNumber(value);
  };

  const onChangePaymentAmount = (value) => {
    setPaymentAmount(value);
    handlePaymentAmount(Number(value));
  };
  return (
    <div className={styles.container}>
      <span className={styles.title}>Customer information</span>
      <Input
        className={styles.input}
        classNameContainer={styles.inputContainer}
        label="Customer Name:"
        disabled={true}
        placeholder={customer.customerName}
      />
      <Input
        className={styles.input}
        classNameContainer={styles.inputContainer}
        label="Address:"
        disabled={true}
        placeholder={customer.streetAddress}
      />

      <div className={styles.addressInfoContainer}>
        <div className={styles.cityContainer}>
          <Input
            className={styles.input}
            classNameContainer={styles.inputContainer}
            label="City:"
            disabled={true}
            placeholder={customer.city}
          />
        </div>
        <div className={styles.stateAndZipCodeContainer}>
          <div className={styles.stateContainer}>
            <Input
              className={styles.input}
              classNameContainer={styles.inputContainer}
              label="State:"
              disabled={true}
              placeholder={customer.state}
            />
          </div>
          <div className={styles.zipCodeContainer}>
            <Input
              className={styles.input}
              classNameContainer={styles.inputContainer}
              label="Zip Code:"
              disabled={true}
              placeholder={customer.zipCode}
            />
          </div>
        </div>
      </div>
      <div className={styles.billingContainer}>
        <div className={styles.paymentDateContainer}>
          <Input
            className={styles.input}
            classNameContainer={styles.inputContainer}
            label="Payment Date:"
            disabled={true}
            placeholder={`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`}
          />
        </div>
        <div className={styles.paymentAmountContainer}>
          <Input
            className={`${styles.input} ${styles.inputHover}`}
            classNameContainer={styles.inputContainer}
            label="Payment Amount:"
            disabled={customer.customerName ? false : true}
            placeholder={paymentAmount}
            onChange={onChangePaymentAmount}
          />
        </div>
      </div>

      <div className={styles.shippingContainer}>
        <div className={styles.trailerNumberContainer}>
          <Input
            className={`${styles.input} ${styles.inputHover}`}
            classNameContainer={styles.inputContainer}
            label="Trailer #:"
            disabled={customer.customerName ? false : true}
            placeholder={trailerNumber}
            onChange={onChangeTrailerNumber}
          />
        </div>
        <div className={styles.billContainer}>
          <Input
            className={`${styles.input} ${styles.inputHover}`}
            classNameContainer={styles.inputContainer}
            label="Bill of landing:"
            disabled={customer.customerName ? false : true}
            placeholder={billOfLanding}
            onChange={onChangeBillOfLanding}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
