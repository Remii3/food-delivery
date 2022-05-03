import { useState, useRef } from "react";
import styles from "./StoreFilterLook.module.css";

const StoreFilterLook = (props) => {
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false);
  const searchBar = useRef("");

  const changeInputHandler = () => {
    props.onFilteredLetters(searchBar.current.value);
  };
  const changeTypeHandler = (e) => {
    addSelectedTag(e);
    props.onFilteredType(e.target.innerText);
  };

  const addSelectedTag = (e) => {
    if (e.target.classList.contains(styles.selected)) return;

    const listTags = document.querySelectorAll(`.${styles.list_listTag}`);
    listTags.forEach((tag) => tag.classList.remove(styles.selected));
    e.target.classList.add(styles.selected);
  };

  return (
    <section className={styles["filterSection"]}>
      <button
        className={` hamburger hamburger--spin ${
          burgerMenuClicked && "is-active"
        } ${styles.filterSection_burgerStyle}`}
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
        <div className={styles["filterSection_filtersSpace"]}>
          <h2 className={styles.filtersSpace_searchTitle}>Search</h2>
          <input
            className={styles["filtersSpace_filterInput"]}
            ref={searchBar}
            type="text"
            onChange={changeInputHandler}
          />
          <h3 className={styles.filtersSpace_categoriesTitle}>Categories</h3>
          <ul className={styles.filtersSpace_list}>
            <li
              className={`${styles.list_listTag} ${styles.selected}`}
              onClick={changeTypeHandler}
            >
              All
            </li>
            <li
              className={`${styles.list_listTag}`}
              onClick={changeTypeHandler}
            >
              Fruits
            </li>
            <li
              className={`${styles.list_listTag}`}
              onClick={changeTypeHandler}
            >
              Vegetables
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};
export default StoreFilterLook;
