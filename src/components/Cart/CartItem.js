import styles from "./CartItem.module.css";
import CartContext from "../../store-data/cartContext";
import { useContext } from "react";

const CartItem = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles["list-outer"]}>
      {cartCtx.items.map((item) => {
        return (
          <div key={item.id} className={styles["list-item"]}>
            <h2>{item.name}</h2>
            <div className={styles["item-amount-space"]}>
              <h4>Amount: {item.amount}</h4>
              <div className={styles["buttons-container"]}>
                <button
                  onClick={() => {
                    cartCtx.removeItem({
                      itemId: item.id,
                      amount: item.amount,
                    });
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    cartCtx.addItem({
                      id: item.id,
                      amount: 1,
                      price: item.price,
                    });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartItem;
