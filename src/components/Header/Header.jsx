import React, { useContext } from "react";

import CartContext from "../../store-data/cartContext";

import styles from "./Header.module.css";
const Header = (props) => {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;

  cartCtx.items.map((item) => {
    return (totalAmount += item.amount);
  });

  return (
    <div className={styles.headerContainer}>
      <nav className={styles.headerContainer_navContainer}>
        <h1 className={styles.navContainer_title}>OnlineShop</h1>
        <button className={styles.navContainer_cart} onClick={props.onShowCart}>
          <i className={`fas fa-shopping-cart ${styles.cart_icon}`}></i>
          <span className={styles.cart_title}>Cart</span>
          <span className={styles.cart_productCount}>{totalAmount}</span>
        </button>
      </nav>
      <section className={styles.headerContainer_photoContainer}>
        <div className={styles.photoContainer_titleSpace}>
          <h3 className={styles.titleSpace_title}>Title</h3>
          <p className={styles.titleSpace_desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium itaque sunt nisi odit sequi, quidem corporis facere
            cupiditate non possimus saepe beatae consectetur officiis. Culpa
            nesciunt suscipit velit vero quam.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Header;
