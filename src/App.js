import React, { useState } from "react";
import Header from "./components/Header/Header";
import StoreContent from "./components/StoreContent/StoreContent";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store-data/CartProvider";

function App() {
  const [cartView, setCartView] = useState(false);

  const showCart = () => {
    setCartView(true);
  };
  const hideCart = () => {
    setCartView(false);
  };

  return (
    <div className="App">
      <CartProvider>
        {cartView && <Cart onHideCart={hideCart} />}
        <Header onShowCart={showCart} />
        <StoreContent />
      </CartProvider>
    </div>
  );
}

export default App;
