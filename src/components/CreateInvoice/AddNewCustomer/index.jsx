import React, { useState } from "react";
import styles from "./styles.module.scss";
import Plus from "../../Icons/Plus";
import Modal from "../../Modal";
import NewCustomerModal from "../../Modal/NewCustomerModal";

const AddNewCustomer = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setOpenModal(true)}>
        <Plus />
        <span className={styles.text}>Add New Customer</span>
      </div>
      <Modal onClose={setOpenModal} isOpen={isOpenModal}>
        <NewCustomerModal onClose={setOpenModal} />
      </Modal>
    </>
  );
};

export default AddNewCustomer;
