import styles from "./StoreItemForm.module.css";
import { useRef } from "react";

const StoreItemForm = (props) => {
  const selectedAmount = useRef(1);
  const price = props.price.toFixed(2) + "zł";

  return (
    <div className={styles.priceContainer}>
      <p className={styles.priceContainer_price}>{price}</p>
      <input
        ref={selectedAmount}
        type="number"
        onChange={() => {
          props.itemsQuantity(selectedAmount.current.value);
        }}
        min="1"
        max="5"
        defaultValue="1"
        className={styles.priceContainer_quantity}
      />
    </div>
  );
};
export default StoreItemForm;
