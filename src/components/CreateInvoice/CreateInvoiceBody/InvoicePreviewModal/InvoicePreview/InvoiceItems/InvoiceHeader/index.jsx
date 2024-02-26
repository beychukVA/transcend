import css from "../InvoiceItem/style.module.scss";
import styles from "./style.module.scss";

const InvoiceHeader = ({headerTitles}) => {

    return (
        <div className={`${css.container} ${styles.invoiceHeaderContainer}`}>
            <div className={css.invoiceNumber}>
                <span>{headerTitles.id}</span>
            </div>

            <div className={css.invoiceName}>
                <span>{headerTitles.name}</span>
            </div>

            <div className={css.unit}>
                <span>{headerTitles.unit}</span>
            </div>

            <div className={css.unitPrice}>
                <span>{headerTitles.unitPrice}</span>
            </div>

            <div className={css.total}>
                <span>{headerTitles.total}</span>
            </div>
        </div>
    );
};

export default InvoiceHeader;