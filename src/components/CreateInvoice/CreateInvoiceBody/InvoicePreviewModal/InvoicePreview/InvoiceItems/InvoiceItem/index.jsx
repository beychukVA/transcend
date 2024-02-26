import styles from "./style.module.scss";

const InvoiceItem = ({item}) => {

    return (
        <div className={`${styles.container} ${styles.invoiceContainer}`}>
            <div className={styles.invoiceNumber}>
                <span>{item.id}</span>
            </div>

            <div className={styles.invoiceName}>
                <span>{item.name}</span>
            </div>

            <div className={styles.unit}>
                <span>{item.unit}</span>
            </div>

            <div className={styles.unitPrice}>
                <span>{item.unitPrice}</span>
            </div>

            <div className={styles.total}>
                <span>${item.total}</span>
            </div>
        </div>
    );
};

export default InvoiceItem;