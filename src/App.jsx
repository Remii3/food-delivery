import React, { useState } from "react";
import StoreContent from "./components/StoreContent/StoreContent";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store-data/CartProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Nav from "./components/Header/Nav";

function App() {
  const [cartView, setCartView] = useState(false);

  const showCart = () => {
    setCartView(true);
  };
  const hideCart = () => {
    setCartView(false);
  };

  return (
    <>
      <CartProvider>
        {cartView && <Cart onHideCart={hideCart} />}
        <Nav onShowCart={showCart} />
        <Routes>
          <Route path="/onlineshop" element={<StoreContent />} />
          <Route path="/details/:itemId" element={<ProductDetails />} />
          <Route path="/*" element={<Navigate to={"/onlineshop"} replace />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
