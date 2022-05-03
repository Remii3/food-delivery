import { useReducer } from "react";
import CartContext from "./cartContext";
const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingItem) {
      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = {
        ...updatedItems[existingCartItemIndex],
        amount: existingItem.amount + action.item.amount,
      };
    } else {
      updatedItems = [...state.items, action.item];
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    let updatedTotalAmount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.idAmount.itemId
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (action.idAmount.amount > 1) {
      updatedItems = [...state.items];
      updatedTotalAmount = state.totalAmount - 1 * existingItem.price;
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        amount: existingItem.amount - 1,
      };
    } else {
      updatedItems = [...state.items];
      updatedItems = updatedItems.filter((item) => item.id !== existingItem.id);
      updatedTotalAmount = state.totalAmount - 1 * existingItem.price;
      updatedTotalAmount += 0;
    }
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultState;
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (idAmount) => {
    dispatchCartAction({ type: "REMOVE", idAmount: idAmount });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
