import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../store-data/cartContext";

import styles from "./Nav.module.css";
const Nav = (props) => {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;

  cartCtx.items.map((item) => {
    return (totalAmount += item.amount);
  });

  return (
    <nav className={styles.headerContainer_navContainer}>
      <Link to="/">
        <h1
          className={`${styles.navContainer_title} ${styles["navContainer_title-hover"]}`}
        >
          OnlineShop
        </h1>
      </Link>
      <button className={styles.navContainer_cart} onClick={props.onShowCart}>
        <i className={`fas fa-shopping-cart ${styles.cart_icon}`}></i>
        <span className={styles.cart_title}>Cart</span>
        <span className={styles.cart_productCount}>{totalAmount}</span>
      </button>
    </nav>
  );
};
export default Nav;
