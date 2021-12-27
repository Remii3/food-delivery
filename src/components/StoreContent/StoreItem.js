import CartContext from "../../store-data/cartContext";
import { useContext, useState } from "react";
import Card from "../UI/Card";
import styles from "./StoreItem.module.css";
import StoreItemForm from "./StoreItemForm";

const StoreItem = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const cartCtx = useContext(CartContext);
  const { item } = props;

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

  return (
    <Card>
      <div className={styles["item-mini-window"]}>
        <div>
          <h1>{item.name}</h1>
          <h3>{item.summary}</h3>
        </div>
        <div className={styles.buyInterface}>
          <button onClick={addItemHandler}>
            <i className="fas fa-shopping-cart"></i> <p>Add to cart</p>
          </button>
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
