import React, { useContext } from "react";
import styles from "./Header.module.css";
import HeaderSummary from "./HeaderSummary";
import CartContext from "../../store-data/cartContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;

  cartCtx.items.map((item) => {
    return (totalAmount += item.amount);
  });
  return (
    <div>
      <section className={styles["header-stipe-container"]}>
        <h1 className={styles["header-title"]}>OnlineShop</h1>
        <button className={styles["header-cart"]} onClick={props.onShowCart}>
          <i className="fas fa-shopping-cart"></i>
          <p>Cart</p>
          <p>{totalAmount}</p>
        </button>
      </section>
      <section className={styles["header-photo-container"]}></section>
      <HeaderSummary />
    </div>
  );
};
export default Header;
