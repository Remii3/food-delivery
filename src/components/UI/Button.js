import styles from "./Button.module.css";

const Button = (props) => {
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
export default Button;
