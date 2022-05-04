import CartContext from "../../store-data/cartContext";
import { useContext, useState } from "react";
import Card from "../UI/Card";
import styles from "./StoreItem.module.css";
import StoreItemForm from "./StoreItemForm";
import { SecondaryButton } from "../UI/Button";
import { useNavigate } from "react-router-dom";

const StoreItem = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const cartCtx = useContext(CartContext);
  const { item } = props;
  const navigate = useNavigate();

  const selectedAmountHandler = (amount) => {
    setSelectedAmount(amount);
  };

  const addItemHandler = () => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: +selectedAmount,
      price: item.price,
    });
  };

  const showDetails = () => {
    navigate(`/details/${item.id}`);
  };

  return (
    <Card>
      <div className={styles["itemSpace_itemWindow"]}>
        <div className={styles.itemWindow_titleSpace} onClick={showDetails}>
          <h1
            className={`${styles.titleSpace_title} ${styles["titleSpace_title-hover"]}`}
          >
            {item.name}
          </h1>
          <h4
            className={`${styles.titleSpace_desc} ${styles["titleSpace_desc-hover"]}`}
          >
            {item.summary}
          </h4>
        </div>
        <div className={styles.itemWindow_buyInterface}>
          <SecondaryButton
            onClick={addItemHandler}
            className={styles.buyInterface_buyButton}
          >
            <i
              className={`${"fas fa-shopping-cart"} ${styles.buyButton_icon}`}
            ></i>
            <p className={styles.buyButton_text}>Add to cart</p>
          </SecondaryButton>
          <StoreItemForm
            itemsQuantity={selectedAmountHandler}
            price={item.price}
          />
        </div>
      </div>
    </Card>
  );
};
export default StoreItem;
