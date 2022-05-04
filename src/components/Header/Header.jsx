import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.headerContainer_photoContainer}>
      <div className={styles.photoContainer_titleSpace}>
        <h3 className={styles.titleSpace_title}>Title</h3>
        <p className={styles.titleSpace_desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          itaque sunt nisi odit sequi, quidem corporis facere cupiditate non
          possimus saepe beatae consectetur officiis. Culpa nesciunt suscipit
          velit vero quam.
        </p>
      </div>
    </section>
  );
};

export default Header;
