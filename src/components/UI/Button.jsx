import styles from "./Button.module.css";

export const MainButton = (props) => {
  const isUnavailable = props.closeClass;

  return (
    <button
      type={props.type}
      className={`${styles.defaultButton} ${styles["defaultButton-cart"]} ${
        isUnavailable && styles["defaultButton-unavailable"]
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export const SecondaryButton = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.defaultButton} ${
        props.closeClass && styles.closeClass
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
