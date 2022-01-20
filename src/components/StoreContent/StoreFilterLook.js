import { useState, useRef } from "react";
import styles from "./StoreFilterLook.module.css";

const StoreFilterLook = (props) => {
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false);
  const searchBar = useRef("");

  const changeInputHandler = () => {
    props.onFilteredLetters(searchBar.current.value);
  };
  const changeTypeHandler = (e) => {
    props.onFilteredType(e.target.innerText);
  };

  return (
    <section className={styles["filterSection"]}>
      <button
        className={`${
          burgerMenuClicked && styles.clicked
        } hamburger hamburger--spin ${burgerMenuClicked && "is-active"}`}
        onClick={() => {
          setBurgerMenuClicked(!burgerMenuClicked);
        }}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {burgerMenuClicked && (
        <div className={styles["filter-outerContainer"]}>
          <h2>Search</h2>
          <input
            className={styles["filterInput"]}
            ref={searchBar}
            type="text"
            onChange={changeInputHandler}
          />
          <h3>Categories</h3>
          <ul className={styles.list}>
            <li onClick={changeTypeHandler}>All</li>
            <li onClick={changeTypeHandler}>Fruits</li>
            <li onClick={changeTypeHandler}>Vegetables</li>
          </ul>
        </div>
      )}
    </section>
  );
};
export default StoreFilterLook;
