import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};
const Overlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
const portalElement = document.getElementById("shopCartModal");

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </React.Fragment>
  );
};
export default Modal;
