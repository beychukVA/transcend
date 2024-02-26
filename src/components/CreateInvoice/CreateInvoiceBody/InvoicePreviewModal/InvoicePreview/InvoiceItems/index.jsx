import styles from "./style.module.scss";
import InvoiceItem from "./InvoiceItem";
import InvoiceHeader from "./InvoiceHeader";

const headerTitles = {
  id: "#",
  name: "Item Name",
  unit: "unit",
  unitPrice: "Unit Price",
  total: "Total",
};

const InvoiceItems = ({ linehaul = 0, total = 0 }) => {
  const invoiceData = [
    {
      id: 1,
      name: "lINEHAUL",
      unit: "",
      unitPrice: "",
      total: Number(linehaul),
    },
    {
      id: 2,
      name: "TRAILER MOVEMENT",
      unit: "",
      unitPrice: "",
      total: 0,
    },
    {
      id: 3,
      name: "inventory",
      unit: "",
      unitPrice: "",
      total: 23.45,
    },
    {
      id: 4,
      name: "lINEHAUL",
      unit: "Trailer",
      unitPrice: "$76/Trailer",
      total: 0,
    },
  ];
  return (
    <div className={styles.invoiceItems}>
      <div className={styles.invoiceItemsInner}>
        <InvoiceHeader headerTitles={headerTitles} />
        {invoiceData.map((item) => (
          <InvoiceItem key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.finalPriceContainer}>
        <span>Grand Total</span>
        <span>
          $
          {invoiceData
            .map((item) => item.total)
            .reduce((prev, next) => prev + next)
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default InvoiceItems;
