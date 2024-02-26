import styles from "./style.module.scss";
import InvoiceDetailsItem from "./InvoiceDetailsItem";

const InvoiceDetails = ({
  billOfLanding,
  blueJayLoadID,
  greifID,
  salesOrder,
  trailerNumber,
  drumsShipped,
}) => {
  return (
    <div className={styles.invoiceDetails}>
      <div className={styles.invoiceDetailsUpInner}>
        <InvoiceDetailsItem
          width={"135px"}
          title={"Freight terms"}
          info={"Upon Receipt of Invoice"}
        />
        <InvoiceDetailsItem
          width={"79px"}
          title={"Ship Date"}
          info={`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`}
        />
        <InvoiceDetailsItem width={"94px"} title={"PO #"} info={"4525729514"} />
        <InvoiceDetailsItem
          width={"112px"}
          title={"Bill of landing"}
          info={billOfLanding}
        />
        <InvoiceDetailsItem
          width={"75px"}
          title={"Blue jay load Id"}
          info={blueJayLoadID}
        />
      </div>

      <div className={styles.invoiceDetailsDownInner}>
        <InvoiceDetailsItem
          width={"135px"}
          title={"Sales order #"}
          info={salesOrder}
        />
        <InvoiceDetailsItem
          width={"79px"}
          title={"Trailer #"}
          info={trailerNumber}
        />
        <InvoiceDetailsItem width={"94px"} title={"GREIF Id"} info={greifID} />
        <InvoiceDetailsItem
          width={"112px"}
          title={"Drums shipped"}
          info={drumsShipped}
        />
      </div>
    </div>
  );
};

export default InvoiceDetails;
