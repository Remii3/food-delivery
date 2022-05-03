import { useContext } from "react";

import CartContext from "../../store-data/cartContext";

import styles from "./CartItem.module.css";

const CartItem = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles["cartItemsList"]}>
      {cartCtx.items.map((item) => {
        return (
          <div key={item.id} className={styles["cartItemsList_itemSpace"]}>
            <h2 className={styles["itemSpace_itemName"]}>{item.name}</h2>
            <div className={styles["itemSpace_amountSpace"]}>
              <h4 className={styles["amountSpace_amount"]}>
                Amount: {item.amount}
              </h4>
              <div className={styles["amount_buttonsSpace"]}>
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
