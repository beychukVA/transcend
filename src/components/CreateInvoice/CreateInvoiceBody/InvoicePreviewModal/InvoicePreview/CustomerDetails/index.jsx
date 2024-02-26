import styles from "./style.module.scss";
import logo from "../../../../../../assets/icons/logo-whole.svg";
import { uid } from "../../../../../../utils/uid";

const customerDetails = ({ customer }) => {
  return (
    <div className={styles.customerDetailsContainer}>
      <div className={styles.customerDetails}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.customerLocation}>
          <span className={styles.address}>
            313 Hunters Creat, Ridgeland, MS 39157
          </span>
          <span className={styles.email}>username@email.com</span>
          <span className={styles.location}>P: (601) 812 9887</span>
          <span className={styles.location}>F: (601) 500 5724</span>
        </div>

        <div className={styles.customerAllPayment}>
          <span>Make all payment to:</span>
          <span>
            PHOENIX CAPITAL GROUP LLC. P.O. BOX 1415 DeS MOINES, ia 50305-1415
          </span>
        </div>
      </div>

      <div className={styles.customerInvoiceNumber}>
        <span>Invoice {uid()}</span>
        <div className={styles.invoiceData}>
          <span>Invoice Date</span>
          <span>
            {`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`}
          </span>
        </div>

        <div className={styles.customerInvoiceNumberInner}>
          <div className={styles.customerDetailsComponent}>
            <span>Customer Details</span>
            <span>{customer.customerName}</span>
            <span>{`${customer.streetAddress}, ${customer.state} ${customer.zipCode}`}</span>
          </div>

          <div className={styles.shipperComponent}>
            <span>Shipper</span>
            <span>GREIF INC.</span>
            <span>10850 STRANG RD LA PORTE, TX 77571</span>
            <span>P: (218) 470 4400</span>
          </div>
        </div>

        <div className={styles.consigneeComponent}>
          <span>Consignee</span>
          <span>UNIVAR SOLUTIONS</span>
          <span>8901 OLD GALVESTONE RD HOUSTON, TX 77034</span>
        </div>
      </div>
    </div>
  );
};

export default customerDetails;
