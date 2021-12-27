import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store-data/cartContext";
import { useContext, useState } from "react";
import CartForm from "./CartForm";

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
      {isSent && !httpsError && <p>Successfully sent</p>}
      {isSending && <p>Sending...</p>}
      {!isSending && !isSent && shownForm && (
        <CartForm onSendOrder={sendOrderHandler} />
      )}
      {!shownForm && <CartItem />}
      {!isSending && !isSent && !shownForm && (
        <div className={styles.interactiveSection}>
          <h2>{totalAmount}</h2>
          <button onClick={hideCartAndShowItems}>Close</button>
          <button
            onClick={() => showFormHandler(true)}
            disabled={cartCtx.items.length < 1}
          >
            Order
          </button>
        </div>
      )}
    </Modal>
  );
};
export default Cart;
