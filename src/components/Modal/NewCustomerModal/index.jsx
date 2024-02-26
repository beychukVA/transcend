import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import useCreateCustomer from "../../../services/useCreateCustomer";
import Error from "../../../components/Error/Error";

const NewCustomerModal = ({ onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [streetAddress, setStreetAddres] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const { createCustomer } = useCreateCustomer();
  const [error, setError] = useState({});

  const canSubmit =
    !customerName || !streetAddress || !city || !state || !zipCode;

  const create = async () => {
    await createCustomer({
      customerName: customerName,
      city: city,
      state: state,
      streetAddress: streetAddress,
      zipCode: zipCode,
    })
      .then((res) => {
        console.log("Create customer success: ", res);
        onClose(false);
      })
      .catch((error) => {
        console.log("Error create customer: ", error);
        setError({ message: error });
      });
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Create new customer</span>
      <div className={styles.inputWrapper}>
        <Input
          className={styles.input}
          label="Customer Name:"
          onChange={setCustomerName}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          className={styles.input}
          label="Street Address:"
          onChange={setStreetAddres}
        />
      </div>
      <div className={styles.addressDetailContainer}>
        <div className={`${styles.inputWrapper} ${styles.city}`}>
          <Input className={styles.input} label="City:" onChange={setCity} />
        </div>
        <div className={`${styles.inputWrapper} ${styles.state}`}>
          <Input className={styles.input} label="State:" onChange={setState} />
        </div>
        <div className={`${styles.inputWrapper} ${styles.zipCode}`}>
          <Input
            className={styles.input}
            label="Zip Code:"
            onChange={setZipCode}
          />
        </div>
      </div>
      <Error message={error.message} />
      <div className={styles.buttonsContainer}>
        <Button
          className={`${styles.button} ${styles.buttonWhite}`}
          text="Cancel"
          onClick={() => onClose(false)}
        />
        <Button
          className={styles.button}
          text="Generate Customer"
          disabled={canSubmit}
          onClick={() => create()}
        />
      </div>
    </div>
  );
};

export default NewCustomerModal;
