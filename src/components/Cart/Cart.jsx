import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import { MainButton } from "../UI/Button";

import CartItem from "./CartItem";
import CartForm from "./CartForm";

import CartContext from "../../store-data/cartContext";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const [shownForm, setShownForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [httpsError, setHttpError] = useState(null);

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2) + "zł";

  const showFormHandler = (bool) => {
    setShownForm(bool);
  };

  const hideCartAndShowItems = () => {
    props.onHideCart();
    showFormHandler(false);
  };

  const sendOrderHandler = async (info) => {
    try {
      setIsSent(false);
      setIsSending(true);

      const data = await fetch(
        "https://shop-items-aa240-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: info, orderedItems: cartCtx.items }),
        }
      );

      if (!data.ok) {
        throw new Error("Something went wrong");
      }

      setIsSending(false);
      setIsSent(true);
      cartCtx.clearCart();
    } catch (err) {
      setIsSending(false);
      setIsSent(true);
      setHttpError(err.message);
    }
  };

  return (
    <Modal className={styles.modal} onHideCart={hideCartAndShowItems}>
      {httpsError && <p>{httpsError}</p>}
      {isSent && !httpsError && (
        <>
          <h4 className={styles.sentMessage}>Successfully sent.</h4>
          <div className={styles.buttonSpace}>
            <MainButton onClick={hideCartAndShowItems} closeClass={true}>
              Close
            </MainButton>
          </div>
        </>
      )}
      {isSending && <p>Sending...</p>}

      {!isSending && !isSent && shownForm && (
        <CartForm
          onSendOrder={sendOrderHandler}
          onHideForm={hideCartAndShowItems}
        />
      )}
      {!shownForm && <CartItem />}
      {!isSending && !isSent && !shownForm && (
        <div className={styles.cartInteractiveSpace}>
          <h2 className={styles.cartInteractiveSpace_price}>{totalAmount}</h2>
          <div className={styles.cartInteractiveSpace_buttonSpace}>
            <MainButton onClick={hideCartAndShowItems} closeClass={true}>
              Close
            </MainButton>
            <MainButton
              onClick={() => showFormHandler(true)}
              disabled={cartCtx.items.length < 1}
            >
              Order
            </MainButton>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default Cart;
