import styles from "./style.module.scss";

const InvoiceDetailsItem = ({title, info, width}) => {

    console.log(width);
    return (
        <div
            className={styles.invoiceDetailsItem}
            style={{width: `${width}`}}
        >
            <span className={styles.title}>{title}</span>
            <span className={styles.info}>{info}</span>
        </div>
    );
};

export default InvoiceDetailsItem;