import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useContext } from "react";
import styles from "./ProductDetails.module.css";
import { MainButton } from "../components/UI/Button";
import StoreItemForm from "../components/StoreContent/StoreItemForm";
import CartContext from "../store-data/cartContext";

const ProductDetails = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [selectedAmount, setSelectedAmount] = useState(1);
  const cartCtx = useContext(CartContext);
  const params = useParams();

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://shop-items-aa240-default-rtdb.europe-west1.firebasedatabase.app/store.json"
    );
    const data = await response.json();
    let dummy_array = [];

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    for (const key in data) {
      dummy_array.push({
        key: key,
        id: key,
        name: data[key].name,
        summary: data[key].summary,
        price: data[key].price,
        type: data[key].type,
      });
    }

    const selectedItem = dummy_array.find((item) => {
      return item.id === params.itemId;
    });

    setSelectedItem(selectedItem);
  }, [params.itemId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const selectedAmountHandler = (amount) => {
    setSelectedAmount(amount);
  };

  const addItemHandler = () => {
    cartCtx.addItem({
      id: selectedItem.id,
      name: selectedItem.name,
      amount: +selectedAmount,
      price: selectedItem.price,
    });
  };

  if (!selectedItem) return <p>Not found</p>;

  return (
    <div className={styles.productDetailsSpace}>
      <section className={styles.navigationBar}>
        <span>&gt;</span>{" "}
        <Link to={"/"} className={styles.navigationBar_back}>
          <span>Back</span>
        </Link>
      </section>
      <section className={styles.itemDetailsSpace}>
        <img
          className={styles.itemDetailsSpace_image}
          src="#"
          alt="some_photo"
        />
        <div className={styles.itemDetailsSpace_informationSpace}>
          <div>
            <h1 className={styles.informationSpace_title}>
              {selectedItem.name}
            </h1>
            <p className={styles.informationSpace_type}>
              <span>Type:</span> <span>{selectedItem.type}</span>
            </p>
            <p className={styles.informationSpace_des}>
              {selectedItem.summary}
            </p>
          </div>
          <div className={styles.itemWindow_buyInterface}>
            <MainButton onClick={addItemHandler}>
              <i
                className={`${"fas fa-shopping-cart"} ${styles.buyButton_icon}`}
              ></i>
              <p className={styles.buyButton_text}>Add to cart</p>
            </MainButton>
            <StoreItemForm
              itemsQuantity={selectedAmountHandler}
              price={selectedItem.price}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
